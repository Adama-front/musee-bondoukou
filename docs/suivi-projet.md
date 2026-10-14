# Suivi — Musée de Bondoukou & Bibliothèque

Dernière mise à jour : 14 octobre 2026. Ce fichier sert de point de reprise pour l'utilisateur et pour toute nouvelle session de travail.

## Reprendre sans perdre le contexte

1. Lire ce fichier, `../AGENTS.md` et les trois documents sources ci-dessous.
2. Vérifier `git status` et les derniers commits ; préserver les modifications locales de l'utilisateur.
3. Continuer la prochaine tâche identifiée, puis mettre à jour ce suivi dans le même commit.
4. Pour chaque tâche significative : vérifier types, lint, build, puis les interactions, le responsive et l'accessibilité pertinents. Indiquer les contrôles réellement effectués et les limites.
5. Préparer le commit et demander un accord explicite avant chaque push. Un accord ne vaut pas pour les tâches suivantes.

Prochaine tâche : vérifier et faire valider le travail Bibliothèque déjà présent localement, puis réconcilier le suivi de son implémentation. Au 14 octobre, une section d'accueil refondue, une route `/bibliotheque`, sa feature et deux captures sont présentes sans être versionnées dans le dernier commit. Leur présence ne prouve ni validation utilisateur, ni validation officielle des contenus, ni publication. Préserver ces modifications. L'ancienne attente du modèle est remplacée par ce constat de reprise.

## Documents sources

| Document initial | Fichier conservé |
| --- | --- |
| Cahier des charges | [cahier-des-charges.md](cahier-des-charges.md) |
| Design System officiel | [design-system.md](design-system.md) |
| Instructions de travail initiales | [instructions-projet.md](instructions-projet.md) |

Les trois fichiers sont déjà versionnés. Le 11 octobre 2026, leurs empreintes SHA-256 ont été comparées aux trois pièces jointes initiales : ils sont identiques, octet par octet. Ils ne sont ni résumés ni réécrits. Les décisions ultérieures figurent dans ce suivi et dans les comptes rendus de validation.

## État réel du produit

Le projet est un prototype frontend, pas un site institutionnel finalisé. L'état local au 14 octobre comporte quatre routes : `/`, `/bibliotheque`, `/bibliotheque/catalogue` et `/design-system`. La page Bibliothèque fait partie des travaux locaux à valider et à versionner séparément. L'administration reste au stade des fondations. Il n'existe encore ni API réelle, ni base de données, ni authentification opérationnelle.

Monorepo : `apps/web`, `apps/admin`, `packages/ui`, `packages/config`. Next.js App Router, React, TypeScript strict, Tailwind v4, pnpm ; Server Components par défaut. Les données passent par des repositories typés. Aucun nouveau package sans responsabilité concrète ; pas de SWR.

Identité : Cormorant Garamond pour les titres, Nunito pour le corps ; palette officielle terre cuite, bronze, ivoire et Ink. Les modèles fournis guident la composition, sans remplacer les tokens du Design System.

## Travail réalisé

Une case cochée signifie « implémenté dans le prototype », sans garantir la validation des contenus institutionnels.

- [x] Conservation intégrale des trois documents initiaux dans `docs/` et règles de collaboration dans `AGENTS.md`.
- [x] Socle monorepo, configuration stricte, tokens, polices et primitives partagées ; page de référence web à `/design-system` et référence admin.
- [x] Accueil composé par features avec header, menu mobile, hero, présentation, collections, bibliothèque, agenda, visite et footer.
- [x] Header transparent et hero adaptés aux références desktop/mobile fournies ; navigation et appels à l'action.
- [x] Présentation du musée adaptée au modèle image à gauche / texte à droite.
- [x] Grille de six aperçus de collections adaptée au modèle fourni, utilisant le même visuel que le hero.
- [x] Section Collections permanentes : six cartes, dont « Explorer le patrimoine » avec lien vers `#collections`.
- [x] Section Informations de visite : six cartes sur fond Ink, placée après Collections permanentes et avant la bibliothèque.
- [x] Horaires proposés et approuvés par l'utilisateur : mardi à dimanche, 9 h–17 h ; fermé le lundi.
- [x] Retrait des badges visibles « Contenu mock » et des légendes temporaires demandées par l'utilisateur. Les indicateurs de démonstration internes et la documentation restent conservés.
- [x] Catalogue de démonstration : trois fiches, recherche normalisée par titre/auteur/mot-clé, filtre catégorie, paramètres dans l'URL, réinitialisation et état sans résultat.
- [x] Agenda initial avec états vides pour les expositions et événements ; footer initial.
- [x] GitHub configuré et code des sections envoyé sur `master`, jusqu'au commit `56bee3e`.
- [x] Création de ce suivi, liens depuis le README et obligation de mise à jour dans `AGENTS.md`.

Ordre actuel de l'accueil : header → hero → présentation du musée → grille collections → collections permanentes → informations de visite → bibliothèque initiale → agenda initial → footer.

## Tâches restantes — site public

Cette liste suit le périmètre du cahier des charges ; l'ordre détaillé se précisera avec les modèles et les validations de l'utilisateur.

- [ ] **Priorité immédiate :** recevoir le modèle de la Bibliothèque du Musée, adapter la section, vérifier et faire valider le résultat.
- [ ] Finaliser l'accueil : présentation de la programmation, actualités, contact et footer selon les modèles retenus.
- [ ] Construire les pages Musée / À propos avec histoire, missions et contenus validés.
- [ ] Construire la liste complète des collections et les fiches objets/œuvres, avec images et notices.
- [ ] Construire les pages liste et fiche des expositions.
- [ ] Construire les pages liste et fiche des événements.
- [ ] Construire la page principale Bibliothèque : présentation, ressources et conditions de consultation.
- [ ] Compléter le catalogue selon le cahier des charges : filtres nécessaires, navigation dans les résultats et fiches détaillées des livres ; disponibilité et auteurs à documenter.
- [ ] Construire les pages Actualités et Article.
- [ ] Construire la page Visiter : localisation précise, accès, tarifs, groupes et visites scolaires, accessibilité et consignes confirmées.
- [ ] Construire Contact avec formulaire frontend, validation, états et coordonnées confirmées. Aucun envoi réel avant l'API.
- [ ] Évaluer et implémenter la recherche globale prévue, avec un périmètre et des résultats utiles.
- [ ] Ajouter les états loading/error/not found pertinents et vérifier les parcours complets.
- [ ] Valider toutes les pages publiques sur mobile, tablette, desktop, clavier, focus et contrastes ; mesurer les performances avant toute affirmation chiffrée.
- [ ] Finaliser le SEO après validation des contenus : métadonnées, Open Graph, sitemap, robots et données structurées pertinentes. Le prototype reste non indexable à ce stade.

## Tâches restantes — administration puis intégration

- [ ] Après validation du web, construire le layout admin, la navigation et le dashboard frontend.
- [ ] Construire les interfaces de gestion des collections/objets, livres/auteurs/catégories, expositions, événements et actualités.
- [ ] Construire la gestion des médias et des messages avec états, formulaires et actions frontend sur mocks typés.
- [ ] Préparer les écrans d'authentification et les états d'accès admin ; ne pas présenter les mocks comme une sécurité réelle.
- [ ] Valider les parcours admin, les formulaires, les tables et le responsive.
- [ ] **Après validation des deux frontends seulement :** décider l'architecture API, développer les contrats, la base de données, les migrations, l'authentification et les autorisations réelles.
- [ ] Remplacer les repositories mock par les adapters API ; intégrer les contenus réels, tester les opérations et les erreurs.
- [ ] Préparer le déploiement, la configuration de production, la sécurité, les sauvegardes et la recette finale avant publication.

À différer : PWA et internationalisation, gestion complète des prêts, réservations complexes, visite 3D, application mobile et autres évolutions non prioritaires du MVP.

## Contenus et décisions à conserver

- Photographies et contenus officiels du musée non encore fournis : histoire, missions, notices, catalogue réel, auteurs, programmation, adresse précise et contacts restent à obtenir.
- Les illustrations actuelles sont génériques ; elles ne documentent pas le musée réel. Les titres de démonstration ne sont pas des notices historiques.
- Les horaires sont validés par l'utilisateur pour le contenu du projet ; ils n'ont pas été confirmés par une source institutionnelle. Les tarifs, audioguides, équipements et services restent à confirmer.
- Ne pas inventer de faits historiques ou bibliographiques. Ne pas réintroduire automatiquement les badges « Contenu mock » supprimés à la demande de l'utilisateur.
- Ne pas modifier globalement le Design System sans validation. Ne pas développer d'API ou de base de données pendant la phase frontend.

## Vérifications et preuves

Types, lint et builds web/admin ont réussi lors de la dernière tâche de code. Six cartes et absence de débordement ont été vérifiées à 320, 768 et 1440 px pour les derniers ajustements. Des contrôles antérieurs couvrent aussi 430, 1024 et 1920 px. Le lien Explorer le patrimoine a été activé au clavier ; menu mobile, recherche et réinitialisation du catalogue ont été vérifiés lors des tâches correspondantes.

Aucun audit WCAG complet ni mesure Core Web Vitals n'est annoncé. Les documents de validation sont des comptes rendus datés : certaines mentions antérieures décrivent un état remplacé depuis.

Pour la tâche documentaire du 11 octobre : égalité des trois sources vérifiée par SHA-256, liens locaux du suivi contrôlés et `git diff --check` réussi. Aucun code applicatif modifié ; types, lint et build n'ont pas été relancés pour cette tâche.

Références : [socle](validation-socle.md), [accueil et catalogue](accueil-validation.md), [header et hero](header-hero-validation.md), [présentation](museum-introduction-validation.md), [collections](collections-validation.md), [collections permanentes et visite](permanent-collections-visit-validation.md). Captures récentes : [collections permanentes](permanent-collections-updated.jpg) et [visite](visit-information-updated.jpg).

## Démarrage local

Depuis la racine : `pnpm install`, puis `pnpm dev`. Web : `http://localhost:3000` ; admin : `http://localhost:3001`.

Si le port 3000 est occupé : `pnpm --filter @musee/web exec next dev --port 3010 --hostname 127.0.0.1`, puis ouvrir `http://127.0.0.1:3010`.

Validation : `pnpm lint`, `pnpm build`, puis `pnpm typecheck`. Lancer build et typecheck successivement pour éviter les conflits de fichiers de types générés par Next.js.

## Journal de reprise

| Date | Travail | État / suite |
| --- | --- | --- |
| 9–10 octobre 2026 | Socle, accueil, catalogue, header/hero et présentation | Implémentés ; voir les comptes rendus datés |
| 10 octobre 2026 | Grille collections, collections permanentes et visite | Implémentées et poussées jusqu'à `56bee3e` après accord |
| 11 octobre 2026 | Vérification des trois sources et création du suivi permanent | Documentation seule ; push autorisé par l'utilisateur dans sa demande |
| 14 octobre 2026 | Analyse des documents, de l'architecture et du code ; [rapport](analyse-projet-2026-10-14.md) | Analyse terminée, sans correction applicative. Lint réussi (2/3 tâches en cache), build web réussi après autorisation réseau et build admin en cache ; types réussis via cache. Pas de contrôle navigateur ni validation officielle. Focus du footer à 2,45:1 et catégorie catalogue inconnue à traiter. Commit documentaire séparé des travaux locaux ; push soumis à accord. |
| Prochaine tâche | Bibliothèque du Musée | Vérifier et faire valider le travail local, puis corriger les points prioritaires de l'analyse |

Après chaque tâche : mettre à jour les cases concernées, l'état réel, les décisions et les vérifications ; ajouter une ligne au journal et remplacer la prochaine étape. Ne pas cocher une fonctionnalité seulement parce qu'une section ou un état vide existe. En cas d'arrêt, noter le blocage concret et la commande ou l'action nécessaire pour reprendre.
