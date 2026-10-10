# Header et hero — 10 octobre 2026

## Réalisation

Adaptation des quatre captures fournies : header transparent superposé, image plein écran, composition centrée, titre éditorial avec seconde ligne italique, deux actions et menu mobile. Les couleurs, polices et rayons du Design System officiel sont conservés. Aucun token global modifié.

Le menu mobile utilise un dialogue natif plein écran avec fermeture, touche Échap, restauration du focus et verrouillage du défilement. Les liens ferment le panneau. Le header du catalogue reste sur fond ivoire.

## Vérifications

TypeScript, lint et build de production réussis. Contrôle navigateur : navigation vers le catalogue et lisibilité de son header, affichage desktop et mobile 349 × 727. Lors de l'implémentation : fermeture par Échap, retour du focus au bouton, fermeture après navigation, absence de débordement horizontal à 320, 349, 768, 1024, 1440 et 1920 px. À 320 × 568, la section peut dépasser la hauteur de l'écran pour conserver le contenu lisible. Aucun audit WCAG complet ni mesure Core Web Vitals.

Captures actuelles : screenshots/header-hero-desktop.jpg et screenshots/header-hero-mobile.jpg. La capture accueil-desktop.jpg documente la version précédente.

## Illustration temporaire

Asset : apps/web/public/images/museum-hero-illustration.webp (225 624 octets). Génération avec image_gen, puis conversion en WebP. Direction du prompt : galerie fictive symétrique, colonnes et plafond à caissons, lumière chaude, tons bronze et brun, sans texte, logo, personnes, œuvres identifiables ni musée nommé. Cette illustration ne représente pas le Musée de Bondoukou ; la légende visible le précise. À remplacer par une photographie officielle fournie par l'utilisateur.

