import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { statSync } from 'node:fs';
import { test } from 'node:test';
import { runInNewContext } from 'node:vm';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const script = readFileSync(new URL('../redirect.js', import.meta.url), 'utf8');

test('homepage keeps the resume as an explicit destination', () => {
  assert.match(html, /href="https:\/\/me\.redheartsecretman\.top\//);
  assert.match(html, /id="work"/);
  assert.match(html, /id="about"/);
  assert.match(html, /id="contact"/);
  assert.match(html, /id="stage-canvas"/);
  assert.match(html, /redirect\.js/);
  assert.ok(readFileSync(new URL('../vendor/three.module.js', import.meta.url)).byteLength > 100000);
});

test('selected work exposes a gesture-friendly carousel', () => {
  assert.match(html, /data-carousel/);
  assert.match(html, />WORK</);
  assert.doesNotMatch(html, /data-prev|data-next/);
  assert.match(html, /aria-roledescription="carousel"/);
  assert.match(script, /pointerdown/);
  assert.match(script, /pointercancel/);
  assert.match(script, /setPointerCapture/);
  assert.match(script, /deltaX/);
  assert.match(script, /Math\.abs\(offset\) > 42/);
  assert.match(script, /targetScroll/);
  assert.match(script, /import\('\.\/vendor\/three\.module\.js(?:\?[^']*)?'\)/);
  assert.match(script, /WebGLRenderer/);
  assert.match(script, /BoxGeometry/);
  assert.match(script, /MeshStandardMaterial/);
  assert.match(script, /PointLight/);
});

test('homepage exposes a bilingual switch and copy tables', () => {
  assert.match(html, /data-lang-toggle/);
  assert.match(html, /data-copy="nav\.work"/);
  assert.match(script, /landing-language/);
  assert.match(script, /切换中文/);
  assert.match(script, /Switch to English/);
});

test('3D stage includes a licensed model loading path', () => {
  assert.match(script, /GLTFLoader/);
  assert.match(script, /television_02_1k\.gltf/);
  assert.match(script, /vendor\/loaders\/GLTFLoader\.js/);
  assert.ok(statSync(new URL('../assets/television_02/television_02_1k.gltf', import.meta.url)).size > 1000);
  assert.ok(statSync(new URL('../assets/television_02/television_02.bin', import.meta.url)).size > 10000);
  assert.ok(statSync(new URL('../vendor/loaders/GLTFLoader.js', import.meta.url)).size > 100000);
});

test('enhancement script does not navigate visitors away from the homepage', () => {
  const replaced = [];
  runInNewContext(script, {
    document: { body: { dataset: {} }, documentElement: { style: { setProperty() {} } }, querySelector: () => null, querySelectorAll: () => [] },
    window: { matchMedia: () => ({ matches: true }), addEventListener: () => {}, location: { replace: (url) => replaced.push(url) } },
    IntersectionObserver: class { observe() {} },
  });
  assert.deepEqual(replaced, []);
});

test('homepage metadata points to the landing domain', () => {
  assert.match(html, /canonical" href="https:\/\/redheartsecretman\.top\//);
  assert.match(html, /property="og:url" content="https:\/\/redheartsecretman\.top\//);
  assert.equal(readFileSync(new URL('../CNAME', import.meta.url), 'utf8').trim(), 'redheartsecretman.top');
});
