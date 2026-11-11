import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import * as THREE from '../vendor/three.module.js';
import { attachCrtDisplay } from '../crt-display.mjs';

function loadSourceMesh() {
  const base = new URL('../assets/television_02/', import.meta.url);
  const gltf = JSON.parse(readFileSync(new URL('television_02_1k.gltf', base)));
  const buffer = readFileSync(new URL(gltf.buffers[0].uri, base));
  const arrayBuffer = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
  const attribute = (id) => {
    const accessor = gltf.accessors[id];
    const view = gltf.bufferViews[accessor.bufferView];
    const itemSize = { VEC3: 3, VEC2: 2, SCALAR: 1 }[accessor.type];
    const Type = accessor.componentType === 5126 ? Float32Array : Uint16Array;
    return new THREE.BufferAttribute(new Type(arrayBuffer, (view.byteOffset || 0) + (accessor.byteOffset || 0), accessor.count * itemSize), itemSize);
  };
  const source = gltf.meshes[0].primitives[0];
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', attribute(source.attributes.POSITION));
  geometry.setAttribute('normal', attribute(source.attributes.NORMAL));
  geometry.setAttribute('uv', attribute(source.attributes.TEXCOORD_0));
  geometry.setIndex(attribute(source.indices));
  const mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial());
  mesh.name = gltf.nodes[0].name;
  const root = new THREE.Group(); root.add(mesh);
  return { root, mesh };
}

test('display uses exactly the source glass triangles; case and curvature remain unchanged', () => {
  const { root, mesh } = loadSourceMesh();
  const originalPosition = mesh.geometry.attributes.position.array.slice();
  const originalNormal = mesh.geometry.attributes.normal.array.slice();
  const originalUv = mesh.geometry.attributes.uv.clone();
  const originalIndex = mesh.geometry.index.array.slice();
  const bodyMaterial = mesh.material;
  const result = attachCrtDisplay(root, new THREE.CanvasTexture({}));
  assert.equal(result.triangleCount, 512);
  assert.equal(root.children.length, 1, 'no floating overlay mesh');
  assert.deepEqual(mesh.geometry.attributes.position.array, originalPosition);
  assert.deepEqual(mesh.geometry.attributes.normal.array, originalNormal);
  assert.equal(mesh.material[0], bodyMaterial);
  const sourceTriangles = new Set();
  for (let i = 0; i < originalIndex.length; i += 3) sourceTriangles.add(Array.from(originalIndex.slice(i, i + 3)).join(','));
  const nextIndex = mesh.geometry.index.array;
  const triangles = new Set();
  for (let i = 0; i < nextIndex.length; i += 3) triangles.add(Array.from(nextIndex.slice(i, i + 3)).join(','));
  assert.deepEqual(triangles, sourceTriangles, 'same triangles, no duplication or missing faces');
  const glass = new Set(result.glassVertices);
  for (let i = 0; i < originalUv.count; i++) {
    if (!glass.has(i)) {
      assert.equal(mesh.geometry.attributes.uv.getX(i), originalUv.getX(i));
      assert.equal(mesh.geometry.attributes.uv.getY(i), originalUv.getY(i));
    }
  }
  assert.ok(result.bounds.max.z - result.bounds.min.z > 0.03, 'real glass depth varies by more than 3 cm');
  assert.equal(result.material.depthTest, true);
  assert.equal(result.material.depthWrite, true);
  assert.equal(mesh.renderOrder, 0);
});

test('texture top and left map to model top and left, without flipped text', () => {
  const { root, mesh } = loadSourceMesh();
  const texture = new THREE.CanvasTexture({});
  const { glassVertices, bounds } = attachCrtDisplay(root, texture);
  const { position, uv } = mesh.geometry.attributes;
  assert.equal(texture.flipY, true);
  for (const v of glassVertices) {
    const u = (position.getX(v) - bounds.min.x) / (bounds.max.x - bounds.min.x);
    const uprightV = (position.getY(v) - bounds.min.y) / (bounds.max.y - bounds.min.y);
    assert.ok(Math.abs(uv.getX(v) - u) < 1e-6, 'left remains left');
    assert.ok(Math.abs(uv.getY(v) - uprightV) < 1e-6, 'top remains top');
  }
});

test('actual ray intersections hit display material only inside the recessed glass', () => {
  const { root, mesh } = loadSourceMesh();
  attachCrtDisplay(root, new THREE.CanvasTexture({}));
  root.updateMatrixWorld(true);
  const hit = (x, y) => new THREE.Raycaster(new THREE.Vector3(x, y, 1), new THREE.Vector3(0, 0, -1)).intersectObject(mesh)[0];
  for (const [x, y] of [[0,.26],[-.13,.26],[.13,.26],[0,.16],[0,.36]]) {
    assert.equal(hit(x, y).face.materialIndex, 1);
  }
  for (const [x, y] of [[-.18,.26],[.18,.26],[0,.39],[0,.12]]) {
    assert.equal(hit(x, y).face.materialIndex, 0, 'bezel retains original material');
  }
  assert.ok(hit(0,.26).point.z > hit(.13,.26).point.z, 'screen bulges towards viewer');
});
