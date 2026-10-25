# Le Porte Bonheur — site vitrine

Restaurant chinois et thaï, 53 avenue du Général de Gaulle, 95350 Saint-Brice-sous-Forêt. Astro 7 + Tailwind CSS 4, site statique.

## Lancer en local
```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # génère dist/
npm run preview    # sert dist/
npm run captures   # captures Playwright 390 px et 1440 px dans captures/ (après build)
node scripts/og.mjs  # régénère l'image de partage public/og.png
```

## Déployer
Projet statique détecté automatiquement par Vercel (aucun `vercel.json`). Importez le dépôt GitHub dans Vercel : chaque push sur `main` redéploie. Pensez à mettre l'URL finale dans `site` (`astro.config.mjs`), `public/robots.txt` et `public/llms.txt`.

## Où changer quoi
| Quoi | Fichier |
|---|---|
| Plats, numéros, prix, formules, allergènes | `src/data/carte.json` |
| Nom, adresse, téléphone, liens Google, communes voisines, réseaux sociaux (`sameAs`) | `src/data/site.json` |
| Avis affichés | `src/data/avis.json` (uniquement de vrais avis) |
| Horaires | `src/data/site.json` (`services`) + script du statut dans `src/layouts/Base.astro` (`SERVICES`) + `src/components/Horaires.astro` + pied de page |
| Textes de l'accueil, FAQ | `src/pages/index.astro` |
| Photos | remplacer les blocs `<figure class="photo-a-venir">` de `src/pages/index.astro` par `<Image>` d'`astro:assets` (fichiers dans `src/assets/`) |
| Couleurs, polices | `src/styles/global.css` (`@theme`) |
| Mentions légales | `src/pages/mentions-legales.astro` |

Tout ce qui reste à valider est marqué `[À CONFIRMER]` dans le site et listé dans `A_COMPLETER.md`.
