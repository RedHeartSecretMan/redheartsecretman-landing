import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { runInNewContext } from 'node:vm';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const script = readFileSync(new URL('../redirect.js', import.meta.url), 'utf8');
const target = 'https://me.redheartsecretman.top/';
const resumeHref = html.match(/id="resume-link"[^>]*href="([^"]+)"/)[1];

for (const [name, search, hash] of [
  ['plain entry', '', ''],
  ['query and anchor', '?utm_source=github&tag=rust&tag=cuda', '#works'],
  ['encoded characters', '?name=%E7%8E%8B%E6%98%8A&q=a%2Bb', '#%E7%AE%80%E5%8E%86'],
  ['untrusted target parameter', '?redirect=https%3A%2F%2Fexample.org%2F&next=//example.org', '#works'],
]) {
  test(name, () => {
    const link = { href: resumeHref };
    const replaced = [];
    runInNewContext(script, {
      URL,
      document: { getElementById: () => link },
      window: { location: { search, hash, replace: (url) => replaced.push(url) } },
    });
    assert.deepEqual(replaced, [target + search + hash]);
    assert.equal(link.href, target + search + hash);
  });
}

test('the no-script redirect is the only meta refresh', () => {
  const noScript = html.match(/<noscript>([\s\S]*?)<\/noscript>/)[1];
  assert.match(noScript, /http-equiv="refresh"/);
  assert.ok(noScript.includes('content="0; url=' + target + '"'));
  assert.equal((html.match(/http-equiv="refresh"/g) || []).length, 1);
});

test('entry link and canonical use the stable resume domain', () => {
  assert.equal(resumeHref, target);
  assert.ok(html.includes('<link rel="canonical" href="' + target + '">'));
  assert.ok(html.includes('property="og:url" content="' + target + '"'));
  assert.equal(readFileSync(new URL('../CNAME', import.meta.url), 'utf8').trim(), 'redheartsecretman.top');
});
