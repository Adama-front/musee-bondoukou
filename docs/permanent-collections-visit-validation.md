# Collections permanentes et visite — 10 octobre 2026

## Composition

Les deux modèles sont insérés dans l'ordre demandé : après la grille Collections, viennent Collections permanentes, puis Informations de visite, puis la bibliothèque existante. La bibliothèque n'est pas encore remaniée.

La première section comporte cinq cartes claires, une icône dans un cercle ivoire, titre éditorial et description centrés. La deuxième comporte six cartes bordées sur le fond Ink officiel, avec icônes bronze clair et texte aligné à gauche. Le bleu sombre du modèle est remplacé par Ink selon le Design System. Aucun token global modifié.

La section Visiter précédente est remplacée et déplacée ; son identifiant reste unique et les liens existants continuent à fonctionner. Localisation et coordonnées à compléter sont conservées dans la nouvelle section.

## Architecture et données

Composants Server dans les features collections et visit, données typées derrière les repositories mock, lectures indépendantes en parallèle. Primitives Container, Badge et EmptyState réutilisées. Une petite primitive SVG FeatureIcon, décorative et sans focus, est partagée dans packages/ui ; aucune dépendance supplémentaire. Les catégories proposées restent explicitement Contenu mock ; les conditions de visite sont à confirmer. Aucun horaire, tarif, langue d'audioguide ou équipement d'accessibilité n'est annoncé comme réel.

Les listes vides disposent d'un message dédié. Ces branches sont relues mais n'ont pas fait l'objet d'une simulation navigateur. Les cartes sont statiques, sans faux bouton ni lien vers une page inexistante.

## Vérifications effectuées

- pnpm build, pnpm lint et pnpm typecheck réussis sur les packages concernés.
- Ordre des sections, cinq cartes de catégories et six cartes de visite vérifiés dans le navigateur ; une seule section #visiter.
- Grilles 1/2/3 colonnes et absence de débordement horizontal à 320, 430, 768, 1024, 1440 et 1920 px.
- Inspection visuelle desktop et mobile 320 px des deux sections.
- Focus visible et activation clavier du lien Visiter vérifiés.
- Les onze icônes sont masquées aux technologies d'assistance. Titres H2/H3 et sections nommées confirmés.
- Contraste théorique du texte ivoire à 80 % sur Ink : environ 10,64:1. Aucun audit WCAG complet ni mesure Core Web Vitals.

Captures : screenshots/permanent-collections-desktop.jpg et screenshots/visit-information-desktop.jpg. Les réglages personnels .vscode et les fichiers Next générés ne sont pas inclus dans le commit de cette tâche.

## Ajustements validés — 10 octobre 2026

La grille comporte désormais six cartes. « Explorer le patrimoine » renvoie à #collections ; son activation avec Entrée a été vérifiée. Les badges visibles « Contenu mock » sont retirés à la demande de l'utilisateur, y compris sur les fiches du catalogue. Les exemples des pages Design System portent maintenant le libellé « Exemple ». Les indicateurs de données mock restent dans les modèles internes.

Horaires proposés puis explicitement validés par l'utilisateur : mardi à dimanche, de 9 h à 17 h ; fermé le lundi. Cette validation concerne le contenu affiché dans le projet et ne constitue pas une confirmation institutionnelle. Les autres conditions de visite restent à confirmer.

Six cartes, absence du libellé « Contenu mock » et absence de débordement horizontal vérifiées à 320, 768 et 1440 px. Captures actualisées : permanent-collections-updated.jpg et visit-information-updated.jpg.
