import * as THREE from './vendor/three.module.js';

// Television 02 has one material for its whole mesh. Its glass is a disconnected
// UV island in the upper right of the source atlas (glTF UVs have a top origin).
// Keep every original vertex/normal and assign the display material to that island
// only. No second surface, depth override, guessed bulge or world-space offset.
const GLASS_ISLAND = { uMin: 0.6907, uMax: 0.9941, vMin: 0.0105, vMax: 0.2349 };

export function attachCrtDisplay(model, texture) {
  const surfaces = [];
  model.traverse((node) => { if (node.isMesh && node.name === 'television_02') surfaces.push(node); });
  if (surfaces.length !== 1) throw new Error('Television 02: expected a single source mesh');
  const mesh = surfaces[0];
  const geometry = mesh.geometry;
  const { position, normal, uv } = geometry.attributes;
  const index = geometry.index;
  const glassVertices = new Set();
  const bodyVertices = new Set();
  const glassIndices = [];
  const bodyIndices = [];
  for (let i = 0; i < index.count; i += 3) {
    const triangle = [index.getX(i), index.getX(i + 1), index.getX(i + 2)];
    const isGlass = triangle.every((v) =>
      uv.getX(v) >= GLASS_ISLAND.uMin && uv.getX(v) <= GLASS_ISLAND.uMax &&
      uv.getY(v) >= GLASS_ISLAND.vMin && uv.getY(v) <= GLASS_ISLAND.vMax && normal.getZ(v) > 0.95);
    (isGlass ? glassIndices : bodyIndices).push(...triangle);
    triangle.forEach((v) => (isGlass ? glassVertices : bodyVertices).add(v));
  }
  // Fail clearly if this pinned asset changes; never put screen content on the case.
  if (glassVertices.size !== 289 || glassIndices.length !== 512 * 3 ||
      [...glassVertices].some((v) => bodyVertices.has(v))) {
    throw new Error('Television 02: glass UV island does not match the inspected asset');
  }
  const bounds = new THREE.Box3();
  for (const v of glassVertices) bounds.expandByPoint(new THREE.Vector3().fromBufferAttribute(position, v));
  const size = bounds.getSize(new THREE.Vector3());
  const displayUv = uv.clone();
  for (const v of glassVertices) {
    // CanvasTexture flipY=true: texture top is v=1, matching model-space +Y.
    displayUv.setXY(v, (position.getX(v) - bounds.min.x) / size.x,
      (position.getY(v) - bounds.min.y) / size.y);
  }
  texture.flipY = true;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  const material = new THREE.MeshStandardMaterial({
    name: 'CRT original curved glass',
    map: texture, emissiveMap: texture, emissive: 0xffffff,
    emissiveIntensity: 0.75, roughness: 0.62, metalness: 0,
    side: THREE.FrontSide, depthTest: true, depthWrite: true,
  });
  geometry.setAttribute('uv', displayUv);
  geometry.setIndex([...bodyIndices, ...glassIndices]);
  geometry.clearGroups();
  geometry.addGroup(0, bodyIndices.length, 0);
  geometry.addGroup(bodyIndices.length, glassIndices.length, 1);
  mesh.material = [mesh.material, material];
  return { mesh, material, bounds, glassVertices: [...glassVertices], triangleCount: glassIndices.length / 3 };
}
