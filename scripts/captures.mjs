// Captures pleine page de chaque page, à 390 px et 1440 px. Usage : npm run build && npm run captures
import { spawn } from 'node:child_process';
import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright';

const PORT = 4403;
const BASE = `http://localhost:${PORT}`;
const PAGES = [
  ['accueil', '/'],
  ['la-carte', '/la-carte/'],
  ['mentions-legales', '/mentions-legales/'],
  ['confidentialite', '/politique-de-confidentialite/'],
  ['404', '/page-inexistante/'],
];
const LARGEURS = [['mobile', 390, 844], ['desktop', 1440, 900]];

const serveur = spawn(process.execPath, ['node_modules/astro/bin/astro.mjs', 'preview', '--port', String(PORT), '--host', 'localhost'], { stdio: 'ignore' });
async function attendre() {
  for (let i = 0; i < 60; i++) {
    try { const r = await fetch(BASE + '/'); if (r.ok) return; } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error('astro preview ne répond pas');
}

try {
  await attendre();
  await mkdir('captures', { recursive: true });
  const browser = await chromium.launch();
  for (const [nomL, w, h] of LARGEURS) {
    const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1, reducedMotion: 'reduce' });
    const page = await ctx.newPage();
    for (const [nom, url] of PAGES) {
      await page.goto(BASE + url, { waitUntil: 'networkidle' });
      await page.evaluate(() => document.fonts.ready);
      const debord = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      if (debord > 0) console.warn(`  ! scroll horizontal de ${debord}px sur ${nom} (${nomL})`);
      await page.screenshot({ path: `captures/${nom}-${nomL}.png`, fullPage: true });
      console.log(`captures/${nom}-${nomL}.png`);
    }
    await ctx.close();
  }
  await browser.close();
} finally {
  serveur.kill();
  process.exit(0);
}
