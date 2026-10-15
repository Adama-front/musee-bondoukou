# Événements & ateliers et galerie — 15 octobre 2026

## Réalisation

Deux sections ajoutées à l'accueil dans l'ordre des deux modèles fournis : Bibliothèque → Événements & ateliers → Galerie → Footer. L'ancien bloc « Expositions & rendez-vous » supprimé reste absent. La nouvelle section est expressément demandée par les modèles de cette tâche ; ses six cartes ne constituent pas une programmation officielle.

- Activités : titre centré, sourcil, séparateur bronze, six cartes blanches avec icône circulaire à gauche ; grille d'une, deux ou trois colonnes.
- Galerie : huit images, formats paysage/portrait/carré, mosaïque CSS d'une, deux ou trois colonnes, largeur limitée à 1024 px pour retrouver la composition centrée du modèle.
- Deux features avec repositories typés et mocks séparés. Chargements indépendants regroupés dans le `Promise.all` de l'accueil. Server Components uniquement, aucune dépendance ajoutée.
- `Container`, `FeatureIcon` et `EmptyState` réutilisés ; palette, polices, rayons et espacements existants. Aucun token global du Design System modifié.
- Dates et fréquences du template non reprises : elles ne sont pas confirmées pour le musée. Activités proposées explicitement signalées comme démonstration.
- Six illustrations génériques générées avec l'outil intégré imagegen, plus les deux images déjà présentes. Originaux non écrasés ; WebP intégrés au dépôt. [Provenance et prompts exacts](gallery-assets.md).
- La galerie précise visiblement que les illustrations ne représentent pas le musée ni ses collections réelles. Chaque image possède un texte alternatif descriptif. Il n'y a ni fausse fiche, ni bouton inactif, ni ouverture de galerie simulée.

## Vérifications effectuées

- `pnpm lint` réussi sur la version finale ; web exécuté, admin/UI restaurés du cache Turbo.
- `pnpm build` réussi après l'ajustement final de largeur et des `sizes` ; build web et sa vérification TypeScript exécutés, admin restauré du cache.
- `pnpm typecheck` réussi après le build : web exécuté, admin/UI restaurés du cache Turbo.
- Navigateur : ordre Bibliothèque → Activités → Galerie confirmé, six cartes et huit images présentes ; huit images chargées avec une largeur naturelle non nulle et un texte alternatif non vide sur desktop.
- Absence de débordement horizontal vérifiée à 320, 430, 768, 1024, 1440 et 1920 px, après l'ajustement final. Activités : une colonne aux deux petites largeurs, deux à 768 px, trois à partir de 1024 px. Galerie : une colonne à 320/430, deux à 768, trois à partir de 1024 px.
- Rendu inspecté visuellement sur desktop 1440 px et mobile 320 px. Captures des débuts de section : [activités desktop](screenshots/activities-desktop.png), [activités mobile](screenshots/activities-mobile.png), [galerie desktop](screenshots/gallery-desktop.png), [galerie mobile](screenshots/gallery-mobile.png).
- Aucune interaction ajoutée dans ces deux sections : zéro lien ou bouton dans leur DOM. Navigation Tab de la signature du footer vers son CTA et contour de focus visible contrôlés après intégration.
- Images optimisées avec `next/image`, `sizes`, chargement différé par défaut et formats réservés par `aspect-ratio`. Les six WebP générés font entre 93 et 154 ko environ ; pas de mesure de Core Web Vitals.

## Limites et suite

Les contrastes reprennent les associations déjà utilisées du Design System : texte principal/secondaire sur fonds ivoire/blanc et accent Primary pour les petits textes. Pas de nouvel audit exhaustif des contrastes, de test lecteur d'écran ou de mesure de performance. Les branches d'état vide sont implémentées mais n'ont pas été exercées dans le navigateur avec des repositories vides. Les sources sont statiques et mockées ; aucun chargement réseau métier ou état d'erreur API n'est simulé.

Les contenus, activités et photographies officiels restent à fournir ou à valider. Le résultat implémenté doit être vérifié visuellement par l'utilisateur. Aucun push ni déploiement sans l'accord correspondant ; prochaine composition uniquement sur le prochain modèle utilisateur.
