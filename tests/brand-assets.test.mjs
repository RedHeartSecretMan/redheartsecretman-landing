import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const favicon = readFileSync(new URL('../favicon.svg', import.meta.url), 'utf8');
const readme = readFileSync(new URL('../README.md', import.meta.url), 'utf8');
const workflow = readFileSync(new URL('../.github/workflows/deploy.yml', import.meta.url), 'utf8');

test('brand and documented assets match the current homepage', () => {
  assert.match(html, /favicon\.svg\?v=5/);
  assert.match(favicon, /#f0d7bd/);
  assert.match(favicon, /#e9957d/);
  assert.match(favicon, /#9789e6/);
  assert.match(readme, /!\[主页首屏预览\]\(docs\/preview\.jpg\)/);
  assert.doesNotMatch(workflow, /three\.core\.js/);
});
