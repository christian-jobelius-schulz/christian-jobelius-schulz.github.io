const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const data = JSON.parse(read('content/site.json'));
const html = read('index.html');
const text = html.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&');
assert(text.includes(data.profile.bio), 'Biography must be readable without JavaScript');
for (const paper of data.papers) {
  assert(text.includes(paper.title), `Missing title: ${paper.title}`);
  if (paper.abstract) assert(text.includes(paper.abstract), 'Abstract must be in HTML');
}
assert.equal((html.match(/class="paper"/g) || []).length, data.papers.length);
assert(!html.includes('Your University'));
assert(!html.includes('Add your CV'));
const orderedTitles = data.papers.map(paper => text.indexOf(paper.title));
assert(orderedTitles.every((position, index) => index === 0 || position > orderedTitles[index - 1]), 'Paper order must match curated content');
assert(html.includes('</a>, and <a'), 'Oxford comma must be preserved');
for (const match of html.matchAll(/(?:href|src)="([^"#]+)"/g)) {
  if (!/^[a-z]+:/i.test(match[1])) assert(fs.existsSync(path.join(root, match[1])), `Missing file ${match[1]}`);
}
const buttons = [...html.matchAll(/<button class="abstract-button"[^>]*aria-controls="([^"]+)"[^>]*hidden/g)].map(match => ({
  hidden: true, attrs: {'aria-controls': match[1], 'aria-expanded': 'true'},
  getAttribute(key) { return this.attrs[key]; },
  setAttribute(key, value) { this.attrs[key] = value; },
  addEventListener(event, callback) { this.click = callback; }
}));
assert.equal(buttons.length, 2);
const elements = Object.fromEntries(buttons.map(button => [button.attrs['aria-controls'], {hidden: false}]));
elements.year = {};
vm.runInNewContext(read('app.js'), {document: {querySelectorAll: () => buttons, getElementById: id => elements[id]}, Date});
for (const button of buttons) {
  const detail = elements[button.attrs['aria-controls']];
  assert.equal(button.hidden, false);
  assert.equal(detail.hidden, true);
  button.click(); assert.equal(detail.hidden, false); assert.equal(button.attrs['aria-expanded'], 'true');
  button.click(); assert.equal(detail.hidden, true); assert.equal(button.attrs['aria-expanded'], 'false');
}
execFileSync(process.execPath, [path.join(__dirname, 'build_site.cjs')]);
assert.equal(read('index.html'), html, 'Repeated builds must be identical');
console.log('Passed: static content, assets, paper order, Oxford commas, abstract toggles, reproducible build.');
