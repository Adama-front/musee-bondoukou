# Validation du socle — 9 octobre 2026

Mise à jour : le blocage d'installation décrit ci-dessous est résolu. TypeScript, lint et builds passent. Voir accueil-validation.md pour les vérifications actuelles. Ce document conserve le diagnostic initial.

## Réalisé

- Manifests des applications et packages analysés comme JSON.
- Lockfile pnpm généré à partir des métadonnées locales.
- Contrastes calculés : blanc sur Primary 4,92:1 ; Foreground sur Secondary 5,37:1 ; Muted Foreground sur Background 5,27:1 ; Success sur Surface 5,77:1 ; Info sur Surface 6,21:1.
- Revue des styles : focus visible, lien d'évitement, champs associés à des labels, boutons de 44 px minimum, prise en compte de prefers-reduced-motion.

## Blocage

L'installation n'a pas pu se terminer : coupures et délais réseau lors du téléchargement de caniuse-lite, @babel/traverse et @babel/helpers. Les tentatives en ligne, hors ligne et avec lockfile ont échoué malgré 355 dépendances disponibles sur 358.

La tentative de pnpm typecheck a relancé l'installation incomplète et a été interrompue. TypeScript, lint, build, rendu visuel et responsive n'ont donc pas été validés. Les styles ont été revus dans le code uniquement. Aucun résultat Core Web Vitals n'a été mesuré.

## À reprendre

Quand le registre npm est accessible :

```sh
pnpm install --frozen-lockfile
pnpm typecheck
pnpm lint
pnpm build
pnpm dev
```

Vérifier les deux pages sur mobile, tablette et desktop, puis clavier et focus. Les polices next/font nécessitent aussi un accès initial à Google Fonts pendant la compilation.
