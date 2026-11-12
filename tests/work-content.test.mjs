import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { runInNewContext } from 'node:vm';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const script = readFileSync(new URL('../redirect.js', import.meta.url), 'utf8');
const styles = readFileSync(new URL('../styles.css', import.meta.url), 'utf8');

function startCarousel() {
  const elements = new Map();
  const element = () => ({
    dataset: {}, style: { setProperty() {} }, classList: { add() {}, remove() {} },
    listeners: {}, setAttribute() {}, setPointerCapture() {},
    addEventListener(name, listener) { this.listeners[name] = listener; },
  });
  for (const name of ['carousel', 'lang-toggle', 'project-title', 'project-type', 'project-number-text', 'project-description', 'project-tags', 'project-link']) {
    elements.set(`[data-${name}]`, element());
  }
  const document = {
    body: { dataset: {} }, documentElement: { style: { setProperty() {} } },
    querySelector: (selector) => elements.get(selector) || null,
    querySelectorAll: () => [],
  };
  const window = { matchMedia: () => ({ matches: true }), addEventListener() {}, dispatchEvent() {} };
  const localStorage = { getItem: () => 'en', setItem() {} };
  runInNewContext(script, { document, window, localStorage });
  return {
    carousel: elements.get('[data-carousel]'),
    toggle: elements.get('[data-lang-toggle]'),
    title: elements.get('[data-project-title]'),
    link: elements.get('[data-project-link]'),
  };
}

test('Work cycles through the public GitHub projects and preserves selection when language changes', () => {
  const { carousel, toggle, title, link } = startCarousel();
  const expected = ['vllm-oxide', 'dag-skill', 'a-share-research-skill', 'any-translate'];
  for (const name of expected) {
    assert.equal(title.textContent, name);
    assert.equal(link.href, `https://github.com/RedHeartSecretMan/${name}`);
    assert.equal(link.textContent, 'View project');
    carousel.listeners.keydown({ key: 'ArrowRight', preventDefault() {} });
  }
  assert.equal(title.textContent, expected[0]);
  carousel.listeners.keydown({ key: 'ArrowLeft', preventDefault() {} });
  assert.equal(title.textContent, expected[3]);
  toggle.listeners.click();
  assert.equal(title.textContent, expected[3]);
  assert.equal(link.href, `https://github.com/RedHeartSecretMan/${expected[3]}`);
  assert.equal(link.textContent, '查看项目');
});
test('horizontal touch drag advances the Work project', () => {
  const { carousel, title } = startCarousel();
  carousel.listeners.pointerdown({ pointerId: 1, pointerType: 'touch', clientX: 200, clientY: 100, target: { closest: () => null } });
  carousel.listeners.pointermove({ pointerId: 1, clientX: 110, clientY: 102, preventDefault() {} });
  carousel.listeners.pointerup({ pointerId: 1 });
  assert.equal(title.textContent, 'dag-skill');
});

test('Work links to a project and visible links have no arrow glyphs', () => {
  const work = html.match(/<section id="work"[\s\S]*?<\/section>/)?.[0];
  assert.ok(work);
  assert.match(work, /href="https:\/\/github\.com\/RedHeartSecretMan\/vllm-oxide"/);
  assert.doesNotMatch(work, /me\.redheartsecretman\.top/);
  for (const match of html.matchAll(/<a\b[^>]*>([\s\S]*?)<\/a>/g)) {
    assert.doesNotMatch(match[1].replace(/<[^>]*>/g, ''), /[↗↑↓←→]/);
  }
});

test('About keeps only the inline résumé reference', () => {
  assert.doesNotMatch(html, /about\.cta|outline-cta|阅读完整简历|Open résumé/);
  assert.match(html, /data-copy-html="about\.p4"/);
  assert.match(script, /about: \{[\s\S]*?p4:[\s\S]*?full résumé/);
  assert.doesNotMatch(script, /about: \{[\s\S]*?cta:/);
});

test('visual hierarchy uses interaction cues instead of static divider rules', () => {
  assert.match(styles, /\.site-header \{ border-bottom: 0;/);
  assert.match(styles, /\.work, \.about, \.contact \{ border-top: 0;/);
  assert.match(styles, /\.contact-item, \.site-footer \{ border-top: 0;/);
  assert.match(script, /toneMapping = THREE\.ACESFilmicToneMapping/);
  assert.match(script, /const atmosphere = new THREE\.Group\(\)/);
});
