# Musée de Bondoukou & Bibliothèque

Frontend du monorepo : première page d'accueil, catalogue de démonstration filtrable et pages de référence du Design System. Les informations historiques et institutionnelles non fournies restent à compléter.

## Démarrer

Node.js 20.9+ et pnpm 11 sont nécessaires.

```sh
pnpm install
pnpm dev
```

Site public : http://localhost:3000 — Administration : http://localhost:3001

Si le port 3000 est occupé : `pnpm --filter @musee/web exec next dev --port 3010 --hostname 127.0.0.1`.

Routes web : `/`, `/bibliotheque/catalogue`, `/design-system`. L'administration conserve sa page de référence.

```sh
pnpm typecheck
pnpm lint
pnpm build
```

## Organisation

Les trois documents fournis sont conservés intégralement dans `docs/`. Les règles de travail sont rappelées dans `AGENTS.md`.

- `apps/web` : site public, Next.js App Router.
- `apps/admin` : administration frontend, Next.js App Router.
- `packages/ui` : tokens CSS et primitives partagées.
- `packages/config` : configuration TypeScript stricte.

Les routes composent des features. Les futurs mocks resteront derrière des repositories typés ; aucune API ou base de données n'est développée à ce stade. Les autres packages seront ajoutés lorsque leur responsabilité devient concrète.

## Design System

Cormorant Garamond et Nunito sont chargées par next/font et hébergées par Next.js après compilation. La compilation initiale nécessite l'accès à Google Fonts. Palette officielle, focus visible, zones tactiles de 44 px, motion réduite et styles partagés sont définis dans packages/ui/src/styles.css.

Les boutons de la page de référence présentent les variantes sans déclencher d'opération métier. Les champs servent à vérifier les états clavier et focus. Les prototypes demandent aux robots de ne pas les indexer ; cette directive sera adaptée pour les pages publiques validées.

## Validation avant livraison de pages

Vérifier types, lint et build, puis clavier, focus, contrastes et rendu aux largeurs 320, 430, 768, 1024, 1440 et 1920 px. Ne pas annoncer de mesures de performance ou de vérifications visuelles qui n'ont pas été réalisées.
