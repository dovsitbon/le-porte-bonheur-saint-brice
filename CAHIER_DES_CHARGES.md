# Prompt Claude Code : site « Le Porte Bonheur » (restaurant asiatique, Saint-Brice-sous-Forêt)

Tu es un développeur front-end et directeur artistique senior. Crée le site vitrine complet du restaurant **Le Porte Bonheur**. Objectif business : remplir la salle (réservations par téléphone), pousser la vente à emporter en direct (moins de commandes Uber Eats à 30 % de commission) et rassurer les nouveaux clients.

## Fiche d'identité (informations vérifiées)
- **Nom** : Le Porte Bonheur
- **Type** : restaurant asiatique (cuisine chinoise et thaï), service à table, **pas de buffet**, plats à la carte
- **Adresse** : 53 avenue du Général de Gaulle, 95350 Saint-Brice-sous-Forêt
- **Téléphone** : 01 34 29 10 11
- **Horaires** : tous les jours, 7j/7 : 12h00–14h30 et 19h00–22h30
- **Services** : sur place, vente à emporter, livraison (présent sur Uber Eats), traiteur, terrasse
- **Note Google** : 4,3/5 sur environ 650 avis ; TripAdvisor ~93 avis
- **Réservations** : acceptées (par téléphone)
- **Paiements** : CB, sans contact, titres-restaurant (Ticket Restaurant, Pluxee, Bimpli, Chèque Déjeuner)
- **Pratique** : parking gratuit et stationnement facile, accessible fauteuil roulant (entrée, places, toilettes), chaises hautes, adapté aux enfants, chiens acceptés
- **Points forts relevés par Google** : cocktails, choix de vins, café ; options végétariennes ; petites portions à partager
- **Ambiance** : décontractée, calme, cadre décoré, clientèle de familles, groupes, fidèles depuis plus de 15 ans
- **Schema.org** : `Restaurant` (servesCuisine : Chinese, Thai ; acceptsReservations : true)

## Ce que disent les clients (thèmes récurrents)
Service rapide et souriant, personnel très poli, fidélité de longue date, plats toujours chauds, portions généreuses, rapport qualité/prix. Plats cités : soupe thaïlandaise, bœuf sauté au saké, poulet sauce pimentée, poulet croustillant, **fondue chinoise (formule pour 2)**, nems, litchis en dessert, glaces. Menus cités par des clients autour de **18,90 €, 20 € et 25 €** (entrée/plat/dessert) → à afficher comme `[À CONFIRMER]`.

Extraits d'avis utilisables (attribués « Avis Google ») :
- « Nous y allons depuis plus de 15 ans. Un accueil toujours chaleureux, la nourriture excellente et un service rapide et très convivial. »
- « Pas de buffet ! Plats à la carte et toujours chauds, produits frais. Encore certaines spécialités qu'on ne trouve plus ailleurs. »
- « L'intérieur est très beau, joliment décoré. Service rapide, le personnel est souriant et aimable. »
- « Par ce temps hivernal, rien de tel qu'une fondue chinoise pour se réchauffer ! Formule pour 2 très intéressante, portion copieuse. »

## Direction artistique
- Inspiration : **les enseignes et menus de restaurants chinois de quartier des années 80, revisités de façon élégante** (pas de cliché dragon/lanterne kitsch).
- Palette : rouge laque profond (#9E1B1B ou proche), vert jade sombre, crème papier, touches or mat. Fond crème majoritaire.
- Typo : une serif à fort contraste pour les titres (ex. Fraunces ou DM Serif Display) + une sans lisible pour le texte ; le nom du restaurant peut être accompagné des caractères chinois 福 (bonheur) en élément graphique.
- Idée signature : la **carte présentée comme un vrai menu imprimé** (colonnes, numéros de plats, pointillés entre nom et prix), et le mot « Bonheur » utilisé en grand comme élément graphique.

## Structure
1. **Accueil** : nom, accroche concrète (ex. « Cuisine chinoise et thaï, servie à table, 7 jours sur 7 depuis plus de 15 ans à Saint-Brice »), boutons « Réserver par téléphone » et « Commander à emporter », statut ouvert/fermé.
2. **La carte** : catégories (entrées, soupes, plats, fondue chinoise, desserts/glaces, boissons & cocktails), plats cités plus haut, prix `[À CONFIRMER]`. Données dans un fichier `src/data/carte.json` facile à éditer. Mention allergènes.
3. **Menus et formules** : midi / soir / fondue pour 2 (prix `[À CONFIRMER]`), titres-restaurant acceptés.
4. **À emporter** : « Appelez, c'est prêt en X min » `[À CONFIRMER]`, encart « Commandez en direct, c'est mieux pour nous et pour vous ».
5. **Le lieu** : salle décorée, terrasse, accessibilité, parking gratuit, enfants bienvenus.
6. **Avis** : 4 extraits ci-dessus + note 4,3/5 sur ~650 avis Google + lien vers la fiche.
7. **Infos pratiques** : horaires, adresse, carte, téléphone.
8. **Traiteur / groupes** : anniversaires, repas de groupe, commandes traiteur, contact téléphone.

---

## Règles communes (à respecter strictement)

### 1. Avant de coder
- Liste les skills et plugins disponibles dans ta session et **utilise toutes celles qui s'appliquent** : design frontend (ex. `frontend-design`), tests navigateur / captures (Playwright, `webapp-testing`), images, déploiement, etc. Dis-moi lesquelles tu utilises.
- Propose-moi en 10 lignes max la direction artistique (palette en hex, 2 polices, ambiance, 1 idée de mise en page signature) **puis enchaîne sans attendre ma validation**.

### 2. Stack technique
- **Astro + Tailwind CSS**, site statique, zéro framework JS lourd côté client (îlots JS seulement si nécessaire).
- Polices auto-hébergées (`@fontsource`), pas d'appel Google Fonts.
- Images en AVIF/WebP via `astro:assets`, `loading="lazy"` sauf la première image.
- Déploiement prévu sur **Vercel** (ajoute la config si besoin). Si un accès Vercel est connecté dans ta session, fais un déploiement **preview** et donne-moi l'URL.
- Objectif Lighthouse : ≥ 95 sur les 4 scores, mobile.

### 3. Design qui NE FAIT PAS « site généré par IA » (priorité n°1)
Interdit :
- dégradés violet/bleu, « glassmorphism », blobs flous en fond, néons, ombres molles partout ;
- la grille « 3 cartes avec une icône + titre + 2 lignes » ;
- les emojis comme icônes, les icônes génériques type Heroicons/Lucide posées partout ;
- Inter/Poppins/Montserrat seules, tout centré, tout arrondi en `rounded-2xl` ;
- les phrases creuses : « Bienvenue chez… », « Découvrez… », « Plongez dans… », « Votre partenaire de confiance », « Une expérience unique », « Notre passion, votre satisfaction » ;
- les fausses stats (« +500 clients satisfaits »), les faux témoignages, les photos de banque d'images clichés (poignée de main, personnes en costume qui sourient).

À faire :
- une **identité propre au lieu** (voir la direction artistique plus haut), avec un ou deux partis pris forts : typographie éditoriale, mise en page asymétrique, détails réels (ardoise, ticket, plaque, carte routière, numéro de rue en très grand…) ;
- des textes **courts, concrets, à la voix du commerçant**, avec de vrais détails (horaires, plats, adresses, noms de rues, parkings) ;
- du rythme : alterner sections pleines et aérées, une grande typo, des espaces généreux ;
- des micro-interactions sobres (hover, apparition légère au scroll), rien de plus ;
- `prefers-reduced-motion` respecté.

### 4. Contenu : zéro invention
- Utilise **uniquement** les informations fournies dans ce prompt.
- Tout ce qui manque (prix, plats exacts, photos, nom du gérant, SIRET…) = un marqueur visible **`[À CONFIRMER]`** et une entrée dans le fichier `A_COMPLETER.md` à la racine.
- Avis clients : n'utilise **que** les extraits fournis, attribués « Avis Google ». Jamais d'avis inventé, jamais de nom inventé.

### 5. Photos
- **Ne télécharge pas et n'intègre pas** de photos Google Maps / Facebook / Instagram (droits d'auteur des clients et du commerce).
- Mets des emplacements propres (bloc couleur + légende du cliché attendu, pas de gris « placeholder ») et crée `PHOTOS_A_PRENDRE.md` : la liste précise des photos à faire (cadrage, lumière, format), pour que je les prenne moi-même chez le commerçant.

### 6. SEO local (indispensable)
- `<html lang="fr">`, title + meta description uniques, Open Graph, favicon.
- **JSON-LD schema.org** adapté (type indiqué plus haut) avec nom, adresse, téléphone, horaires `openingHoursSpecification`, géolocalisation, `sameAs` (réseaux sociaux).
- Nom / adresse / téléphone identiques partout (NAP), pied de page compris.
- Carte : iframe Google Maps chargée **au clic** (façade légère) pour ne pas plomber la perf.
- `sitemap.xml`, `robots.txt`, URLs propres, H1 unique, balises `alt` descriptives.
- Mots-clés locaux naturels : la ville + les communes voisines (Groslay, Montmorency, Saint-Brice-sous-Forêt, Sarcelles, Deuil-la-Barre, Montmagny, Domont, Ézanville).

### 7. Conversion et mobile
- Mobile d'abord. **Bouton d'appel fixe en bas d'écran sur mobile** (`tel:`), + bouton itinéraire (lien Google Maps).
- Horaires lisibles, avec indication « Ouvert maintenant / Fermé » calculée en JS léger (fuseau Europe/Paris).
- Accessibilité AA : contrastes, focus visibles, navigation clavier, tailles de cibles ≥ 44 px.

### 8. Légal
- Page **Mentions légales** (éditeur, hébergeur Vercel, SIRET `[À CONFIRMER]`) et **Politique de confidentialité**.
- Pas de traceur, donc pas de bandeau cookies. Si un formulaire existe : consentement RGPD + envoi via un service sans backend (ex. Formspree / Web3Forms, clé `[À CONFIRMER]`).

### 9. Livraison
1. `npm run build` sans erreur ni warning.
2. Captures Playwright **mobile (390 px) et desktop (1440 px)** de chaque page ; regarde-les toi-même et corrige ce qui fait « template » ou « IA » avant de me rendre la main.
3. Un `README.md` court : lancer en local, déployer, où changer textes / photos / horaires.
4. Les fichiers `A_COMPLETER.md` et `PHOTOS_A_PRENDRE.md`.
5. Un résumé final de 10 lignes max : ce qui est fait, ce qui manque.
