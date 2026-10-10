# Présentation du musée — 10 octobre 2026

Adaptation du modèle fourni : image à gauche, texte à droite, fond ivoire, cadre bronze décoratif et séparation fine. Empilement image puis texte en dessous de 1024 px. Les tokens du Design System sont conservés, sans dépendance ajoutée ni JavaScript client supplémentaire.

Composant Server dédié dans features/home/museum-introduction.tsx ; l'ancienne présentation de discovery-sections.tsx est remplacée. Container et variantes du bouton partagés sont réutilisés.

La date et les statistiques du modèle ne sont pas reprises. Le texte est explicitement temporaire. L'illustration existante du hero est réutilisée pour prévisualiser la composition, avec une légende précisant qu'elle ne représente pas le musée. La photographie réelle et la présentation institutionnelle restent à fournir. Le lien mène à la section Collections existante, en attendant une page Musée détaillée.

Vérifications effectuées : pnpm typecheck, pnpm lint et pnpm build réussis. Contrôle navigateur sans débordement horizontal à 320, 430, 768, 1024, 1440 et 1920 px ; disposition sur une colonne puis deux colonnes confirmée. Inspection visuelle desktop et mobile 430 px. Focus visible et activation par Entrée du lien vers #collections confirmés. Couleurs et focus réutilisent les tokens existants ; aucun audit WCAG complet ni mesure Core Web Vitals.

Capture : screenshots/museum-introduction-desktop.jpg.
