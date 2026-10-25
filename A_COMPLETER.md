# À compléter / à confirmer

Chaque point apparaît sur le site avec le marqueur `[À CONFIRMER]` (sauf mention « non affiché »).

## Carte et prix — `src/data/carte.json`
- [ ] Prix de chaque plat (nems, soupe thaïlandaise, bœuf sauté au saké, poulet sauce pimentée, poulet croustillant, fondue chinoise pour 2, litchis, glaces, cocktails, vins, café).
- [ ] Numéros des plats : ceux du site (1 à 8) sont provisoires, reprendre ceux de la carte papier.
- [ ] Reste de la carte (autres entrées, soupes, plats chinois et thaï, desserts, parfums de glaces, boissons).
- [ ] Composition de la fondue chinoise pour 2 ; disponible midi et soir ?
- [ ] Vins : au verre, à la bouteille ?
- [ ] Menus midi / soir : contenu exact et prix. Les clients citent des menus à 18,90 €, 20 € et 25 € : à vérifier et à rattacher au bon menu.
- [ ] Options végétariennes : quels plats ?
- [ ] Support écrit des allergènes disponible ?

## À emporter / traiteur
- [ ] Délai de préparation à emporter (« prêt en X min »).
- [ ] Capacité de la salle, conditions et délais pour les commandes traiteur et les groupes.
- [ ] Lien direct de la page Uber Eats (non affiché, à ajouter si souhaité).

## Informations légales — `src/pages/mentions-legales.astro`
- [ ] Raison sociale, forme juridique, capital, SIRET, RCS, TVA intracommunautaire.
- [ ] Directeur de la publication.
- [ ] Adresse e-mail de contact.
- [ ] Date de mise à jour de la politique de confidentialité.

## SEO local (non affiché) — `src/data/site.json`, `src/layouts/Base.astro`
- [ ] Coordonnées GPS exactes (latitude / longitude) pour le JSON-LD `geo`.
- [ ] Lien exact de la fiche Google Business Profile (`ficheGoogle`) ; le lien actuel est une recherche Google Maps.
- [ ] Réseaux sociaux (Facebook, Instagram, TripAdvisor) pour `sameAs`.
- [ ] URL définitive du site (`astro.config.mjs`, `robots.txt`, `llms.txt`).

## Photos
- [ ] Voir `PHOTOS_A_PRENDRE.md` (3 emplacements sur l'accueil).
