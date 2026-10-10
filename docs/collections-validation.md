# Section Collections — 10 octobre 2026

Le modèle d'expositions fourni est adapté à la section Collections située après la présentation du musée : en-tête centré, trait bronze, grille de six cartes au ratio 4:3 avec une hauteur minimale pour la lisibilité. Une colonne sur mobile, deux à partir de 640 px et trois à partir de 1024 px. Couleurs, typographie et rayons du Design System conservés.

La feature collections contient le modèle typé, le repository mock, les données de démonstration, la carte et la section. Les repositories de l'accueil sont lus en parallèle. Les composants restent côté serveur, sans dépendance ajoutée. L'état vide est conservé lorsque le repository ne retourne aucune carte.

Les six cartes ne représentent pas l'inventaire du musée : titres génériques et badge Contenu mock, avertissement commun, photographie et notice à fournir. Aucune œuvre, catégorie historique, période ou exposition étrangère du modèle n'est attribuée au musée. Les cartes ne sont pas cliquables en l'absence de fiches détaillées. La carte accepte une photographie future optimisée par next/image avec dimensions réservées et chargement différé.

Contrôle navigateur : six cartes, disposition sur 1/2/3 colonnes, aucun débordement horizontal ni chevauchement interne à 320, 430, 768, 1024, 1440 et 1920 px après correction de la largeur. Inspection visuelle desktop et mobile. Pas d'interaction clavier propre aux cartes, qui sont des articles statiques. Couleurs et contrastes réutilisent les tokens existants ; aucun audit WCAG complet ni mesure Core Web Vitals.

TypeScript, lint et build réussis. TypeScript a été relancé seul avec succès après une erreur transitoire sur les routes générées pendant le build simultané.

Capture : screenshots/collections-desktop.jpg. Photographes, notices et catégories officielles restent à fournir ; l'apparence photographique du modèle ne peut pas encore être reproduite avec les contenus réels.
