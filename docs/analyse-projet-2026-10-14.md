# Analyse du projet — 14 octobre 2026

## Conclusion

Le socle est cohérent avec le cahier des charges. Le projet reste un prototype frontend : accueil, catalogue de démonstration, référence du Design System et nouvelle page Bibliothèque locale. L'administration ne contient que ses fondations. Les contenus officiels et les parcours du MVP restent à compléter avant publication.

Cette tâche est une analyse, sans correction du code applicatif ni validation institutionnelle. Les modifications locales déjà présentes ont été conservées et ne font pas partie du commit documentaire de cette analyse.

## Architecture et points solides

- Monorepo pnpm/Turbo : `apps/web`, `apps/admin`, `packages/ui`, `packages/config`, sans packages anticipés ni backend prématuré.
- Next.js App Router, React, TypeScript strict et Tailwind v4. La version Next.js observée pendant le build est 16.4.0.
- Routes principalement composées par features ; repositories typés pour les collections, la visite, le catalogue, la bibliothèque et l'agenda.
- Un seul module porte `use client` dans les sources inspectées : la navigation mobile. Recherche du catalogue par formulaire GET et état navigable dans l'URL.
- Chargements indépendants de l'accueil regroupés dans `Promise.all`.
- Palette officielle et deux familles de polices centralisées ; primitives de boutons, champs, badges, conteneurs et états vides partagées.
- Images WebP avec `next/image`, tailles responsives et préchargement des heroes. Les deux fichiers sources pèsent environ 192 et 226 ko ; aucune mesure de transfert ou de LCP n'a été effectuée.
- Labels, lien d'évitement, focus global, menu basé sur un dialogue natif et réduction des animations présents dans le code.
- Les notices et ouvrages de démonstration restent reconnaissables. Les informations manquantes sont indiquées comme restant à confirmer. Les horaires du musée ont une validation utilisateur documentée, sans confirmation institutionnelle.

## Constats prioritaires

| Priorité | Constat et preuve | Conséquence / action proposée |
| --- | --- | --- |
| P2 | `packages/ui/src/styles.css` définit le focus en `#933E23`. `apps/web/src/shared/site-footer.tsx` utilise le fond Ink `#1E1916` sans adaptation du focus. Contraste calculé : 2,45:1. | Renforcer localement le focus des liens du footer pour atteindre au moins 3:1 sur ce fond. Vérifier ensuite au clavier ; aucune modification globale du Design System sans validation. |
| P2 | La route catalogue accepte toute chaîne `category`, mais le select n'expose que la valeur vide et « Documents de démonstration ». Le repository filtre sur une égalité stricte. | Une URL avec une catégorie inconnue produit zéro résultat sans option correspondant au filtre dans le formulaire. Définir la validation des catégories et un affichage cohérent du filtre actif. Constat par lecture du code, sans test navigateur de ce cas. |
| P2 | `Book.isMock` est littéralement typé `true` dans `book-repository.ts` ; le contrat et son implémentation mock sont dans le même module. | Le contrat actuel ne peut pas représenter un ouvrage réel sans modification. Séparer le modèle indépendant des mocks et l'adapter lorsque l'intégration deviendra nécessaire ; ne pas développer l'API maintenant. |
| P2 | README et ancien état du suivi listent trois routes et décrivent la bibliothèque comme restant à construire, alors que `/bibliotheque` et sa feature existent localement. | Réconcilier le suivi avec le travail local et ses validations avant reprise. La présence de code et de captures ne prouve ni son approbation ni sa publication. |
| P3 | Les pages de fondations web/admin dupliquent une large structure. Plusieurs fichiers compressent des composants entiers sur quelques lignes. | Améliorer progressivement la lisibilité et mutualiser seulement les parties véritablement communes, sans abstraction prématurée. |
| P3 | Le système expose un seul token `text-display`, à 44–72 px, correspondant plutôt au Display XL officiel ; les icônes sont des tracés SVG internes. | Clarifier la correspondance Display / Display XL et documenter la famille d'icônes retenue. Conserver le style actuel jusqu'à validation d'une éventuelle évolution globale. |

## Couverture fonctionnelle

- Accueil : sections implémentées, mais plusieurs contenus et sections de programmation restent provisoires.
- Bibliothèque : page locale composée avec présentation, catalogue, horaires à confirmer, événements/actualités vides et contact à compléter. Pas encore versionnée au début de l'analyse.
- Catalogue : trois ouvrages de démonstration, recherche normalisée, catégorie, réinitialisation et état vide. Pas encore de fiches livres ni de pagination.
- Musée / À propos, fiches collections et objets, expositions, événements, actualités, Visiter et Contact : pas de pages dédiées dans l'arborescence actuelle.
- Administration : page de fondations uniquement ; pas de dashboard, CRUD ou authentification opérationnelle.
- SEO : `noindex` volontaire sur les prototypes. Metadata encore partiellement générique ; Open Graph, sitemap et données structurées à finaliser après validation des contenus.
- États : plusieurs états vides présents ; pas de fichiers dédiés `loading.tsx`, `error.tsx` ou `not-found.tsx` dans les sources inspectées. Le build inclut la page 404 standard de Next.js.

La recherche globale est facultative dans le tout premier MVP selon le cahier des charges (§50). Elle ne doit pas bloquer la validation des parcours principaux.

## Vérifications réellement effectuées

- Lecture des trois documents sources, du suivi, des règles AGENTS et des trois skills imposés ; inspection des configurations et des sources web/admin/UI.
- `git status` et historique local : dernier commit initial `9e42303`. Les travaux Bibliothèque et captures déjà présents ont été préservés.
- `pnpm lint` : succès, trois tâches ; deux issues du cache Turbo, lint web exécuté.
- `pnpm build` : premier essai web en échec à cause de l'accès réseau à Google Fonts ; second essai avec autorisation réseau réussi. Build web exécuté, build admin restauré du cache Turbo.
- `pnpm typecheck` après le build : succès, trois tâches issues du cache Turbo. Le build web a également exécuté sa vérification TypeScript.
- Build web : `/`, `/bibliotheque` et `/design-system` statiques ; `/bibliotheque/catalogue` dynamique.
- Calcul statique des contrastes : focus sur Ink 2,45:1 ; blanc sur Primary 4,92:1 ; texte secondaire sur Background 5,27:1. Ces calculs ne constituent pas un audit WCAG complet.
- Recherche de `any`, `TODO`, `FIXME`, `dangerouslySetInnerHTML` et `fetch(` dans les sources TypeScript inspectées : aucune occurrence trouvée.
- Aucun fichier de test identifié par la recherche de noms `test`/`spec`, hors dépendances et sorties Next.js ; aucun script de tests déclaré dans les manifests inspectés.

Les commandes pnpm ont remis en place des dépendances à partir du lockfile existant. Aucun package n'a été ajouté aux manifests. Le premier essai réseau restreint a été interrompu après relance autorisée.

## Limites et prochaine étape

Pas de vérification navigateur pendant cette analyse : rendu aux six largeurs de référence, activation clavier, comportement du dialogue, lecteurs d'écran et parcours de recherche restent à vérifier sur l'état local actuel. Les captures et validations antérieures ne remplacent pas ces contrôles. Aucun audit WCAG complet, mesure Core Web Vitals ou audit de vulnérabilités n'est annoncé.

Prochaine étape : valider le travail Bibliothèque déjà présent localement et réconcilier son suivi, puis corriger les deux points UX/accessibilité prioritaires et couvrir les parcours de catalogue/menu avant de poursuivre les pages publiques. L'API reste différée jusqu'à validation des frontends.

Ce rapport et l'entrée de suivi sont seuls concernés par le commit documentaire ; aucun push sans accord explicite pour cette tâche.
