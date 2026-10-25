// Génère public/og.png (1200x630) à partir des polices du projet. Usage : node scripts/og.mjs
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { FU_PATH } from '../src/data/fu-path.js';

const f = (p) => 'data:font/woff2;base64,' + readFileSync(resolve('node_modules', p)).toString('base64');
const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:F;src:url(${f('@fontsource-variable/fraunces/files/fraunces-latin-full-normal.woff2')}) format('woff2');font-weight:100 900}
@font-face{font-family:K;src:url(${f('@fontsource-variable/karla/files/karla-latin-wght-normal.woff2')}) format('woff2');font-weight:200 800}
body{margin:0;width:1200px;height:630px;background:#f2e8d2;color:#26170f;font-family:K}
.c{position:absolute;inset:28px;border:1.5px solid #a8843f;outline:1.5px solid #a8843f;outline-offset:-10px;padding:62px 70px}
.p{font-family:F;font-size:52px;font-weight:600;font-variation-settings:'opsz' 72,'SOFT' 50}
.b{font-family:F;font-size:236px;line-height:.86;font-weight:900;color:#9e1b1b;letter-spacing:-.045em;font-variation-settings:'opsz' 144,'SOFT' 60,'WONK' 1}
.t{position:absolute;left:70px;bottom:66px;font-size:30px;font-weight:600}
svg{position:absolute;right:70px;top:56px;width:190px;transform:rotate(-7deg)}
</style></head><body><div class="c"><div class="p">Le Porte</div><div class="b">Bonheur</div>
<div class="t">Restaurant chinois et thaï à Saint-Brice-sous-Forêt, 7j/7. 01 34 29 10 11</div></div>
<svg viewBox="0 0 120 120"><rect x="4" y="4" width="112" height="112" rx="7" fill="#9e1b1b"/><rect x="10" y="10" width="100" height="100" rx="3" fill="none" stroke="#f2e8d2" stroke-width="2.2"/><path d="${FU_PATH}" transform="translate(17 17) scale(0.086)" fill="#f2e8d2"/></svg>
</body></html>`;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(html, { waitUntil: 'load' });
await p.evaluate(() => document.fonts.ready);
await p.screenshot({ path: 'public/og.png' });
await b.close();
console.log('public/og.png');
