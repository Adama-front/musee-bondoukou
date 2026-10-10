# CAHIER DES CHARGES

## Site web du Musée de Bondoukou et de sa Bibliothèque

**Version :** 1.0  
**Localisation :** Bondoukou, Région du Gontougo, Côte d’Ivoire  
**Type de produit :** Site institutionnel, culturel et documentaire  
**Architecture envisagée :** Monorepo  
**Approche :** Frontend First + données mockées, puis API  
**Méthodologie frontend :** Feature First  
**Priorité absolue :** Design System  
**Responsive :** Mobile First  
**Mode de collaboration :** IA autonome sous contraintes du cahier des charges et des Skills installés

---

# 1. Présentation du projet

Le projet consiste à concevoir le site web officiel du Musée de Bondoukou.

Le musée dispose également d’une bibliothèque.

La plateforme devra donc mettre en valeur deux dimensions complémentaires :

```text
MUSÉE
+
BIBLIOTHÈQUE
```

Le site ne doit pas être uniquement une vitrine présentant quelques informations.

Il devra devenir progressivement une véritable porte d’entrée numérique vers :

- le musée ;
- son histoire ;
- ses collections ;
- ses œuvres et objets ;
- ses expositions ;
- ses activités ;
- ses événements ;
- sa bibliothèque ;
- ses livres et documents ;
- son patrimoine culturel ;
- ses contenus éducatifs.

---

# 2. Vision

La plateforme devra permettre à une personne qui ne connaît pas encore le musée de comprendre rapidement :

> Qu'est-ce que le Musée de Bondoukou ?

> Que peut-on y découvrir ?

> Comment le visiter ?

> Quels événements sont prévus ?

> Que contient sa bibliothèque ?

> Quels ouvrages peut-on y consulter ?

Elle devra également contribuer à la valorisation numérique du patrimoine culturel de Bondoukou et du Gontougo.

---

# 3. Objectifs principaux

Le projet poursuit plusieurs objectifs.

## 3.1 Valoriser le musée

Présenter :

- son identité ;
- son histoire ;
- ses missions ;
- son patrimoine ;
- ses collections ;
- ses activités.

## 3.2 Valoriser la bibliothèque

Permettre aux visiteurs de découvrir :

- les ouvrages ;
- les catégories ;
- les nouveautés ;
- les documents disponibles ;
- les conditions d'accès à la bibliothèque.

## 3.3 Informer les visiteurs

Permettre de trouver facilement :

- horaires ;
- localisation ;
- tarifs si applicables ;
- contacts ;
- règles de visite ;
- événements ;
- informations pratiques.

## 3.4 Préserver et transmettre

Créer progressivement une présence numérique permettant de documenter et transmettre certains éléments du patrimoine culturel.

---

# 4. Public cible

Le site pourra être consulté par :

- habitants de Bondoukou ;
- élèves ;
- étudiants ;
- enseignants ;
- chercheurs ;
- touristes ;
- visiteurs de passage ;
- passionnés de culture ;
- diaspora ;
- institutions ;
- associations ;
- établissements scolaires.

---

# 5. Principes UX fondamentaux

L'interface devra être :

```text
Simple
Culturelle
Moderne
Élégante
Accessible
Rapide
Immersive
Responsive
```

Le site doit transmettre une identité culturelle forte sans devenir difficile à utiliser.

L'esthétique ne devra jamais prendre le dessus sur la compréhension.

---

# 6. Priorité Mobile First

Une part importante des utilisateurs accédera au site depuis un téléphone.

Le développement devra donc suivre :

```text
Mobile
↓
Tablette
↓
Laptop
↓
Desktop
↓
Grand écran
```

Chaque page devra être vérifiée sur toutes ces tailles.

---

# 7. Architecture produit

Pour le MVP, le projet comportera deux applications principales.

```text
apps/
├── web/
├── admin/
└── api/
```

Cependant, nous commencerons uniquement par :

```text
apps/web
apps/admin
```

L'API viendra après validation complète des frontends.

---

# 8. Architecture globale

```text
                       MONOREPO
                           │
              ┌────────────┴────────────┐
              │                         │
              ▼                         ▼

         SITE PUBLIC                  ADMIN
           Next.js                   Next.js

              │                         │
              └────────────┬────────────┘
                           │
                      API CENTRALE
                           │
                      BASE DE DONNÉES
```

---

# 9. Organisation du monorepo

Architecture initiale :

```text
musee-bondoukou/
│
├── apps/
│   ├── web/
│   ├── admin/
│   └── api/
│
├── packages/
│   ├── ui/
│   ├── types/
│   ├── validators/
│   ├── utils/
│   ├── config/
│   ├── api-client/
│   ├── eslint-config/
│   └── typescript-config/
│
├── pnpm-workspace.yaml
├── turbo.json
└── package.json
```

---

# 10. Première phase : Frontend First

Le projet commencera exclusivement par le frontend.

Ordre de travail :

```text
1. Design System
2. Frontend public
3. Frontend administration
4. Responsive complet
5. Tests frontend
6. Validation
7. API
8. Base de données
9. Connexion à l'API
```

L'API ne devra pas être développée prématurément.

---

# 11. Données mockées

Pendant la phase frontend, utiliser des données mockées réalistes.

Exemple :

```text
mocks/
├── collections.mock.ts
├── artworks.mock.ts
├── exhibitions.mock.ts
├── events.mock.ts
├── books.mock.ts
├── categories.mock.ts
├── authors.mock.ts
├── news.mock.ts
└── testimonials.mock.ts
```

Le frontend doit pouvoir être entièrement testé avec ces mocks.

---

# 12. Règle concernant les données historiques

L'IA ne doit jamais inventer des informations historiques.

Sont notamment concernés :

- dates ;
- personnages ;
- objets ;
- traditions ;
- œuvres ;
- auteurs ;
- événements historiques ;
- descriptions patrimoniales ;
- biographies ;
- informations bibliographiques.

Si une donnée officielle n'est pas disponible, utiliser explicitement :

```text
Contenu temporaire
```

ou une donnée mock identifiable.

Ne jamais présenter une information inventée comme une information historique réelle.

---

# 13. Design System

Le projet devra posséder son propre Design System.

Il constituera la source de vérité pour les trois dimensions suivantes :

```text
Identité
Cohérence
Réutilisation
```

Il sera défini avant le développement massif des pages.

---

# 14. Priorité du Design System

L'ordre de priorité sera :

```text
1. Design System
2. Accessibilité
3. UX
4. Responsive
5. Template fourni
6. Préférences ponctuelles
```

Lorsque je fournis un template, son organisation et sa composition doivent être respectées.

Cependant :

- les couleurs ;
- les typographies ;
- les boutons ;
- les inputs ;
- les espacements ;
- les rayons ;
- les ombres ;
- les icônes

doivent rester conformes au Design System.

---

# 15. Utilisation des templates

Je fournirai progressivement des modèles visuels.

Un modèle pourra provenir :

- d'une capture d'écran ;
- d'un site ;
- d'une maquette ;
- d'une image ;
- d'une référence UI.

L'IA devra analyser :

- structure ;
- disposition ;
- hiérarchie ;
- proportions ;
- rythme ;
- responsive probable ;
- composants réutilisables.

Puis adapter le modèle au Design System du Musée de Bondoukou.

---

# 16. Autorité de l'IA sur le projet

Pour ce projet, l'IA agira comme :

```text
Lead Product Designer
+
Lead UI/UX
+
Lead Frontend Engineer
+
Architecte logiciel
```

L'utilisateur fournira principalement :

- le cahier des charges ;
- les templates ;
- les contenus officiels lorsqu'ils sont disponibles ;
- les contraintes particulières.

Pour le reste, l'IA pourra prendre les décisions techniques nécessaires.

---

# 17. Autonomie de l'IA

L'IA est autorisée à décider notamment :

- organisation des composants ;
- découpage des features ;
- responsive ;
- réutilisation des composants ;
- noms techniques ;
- structure des dossiers ;
- états UI ;
- choix d'abstraction ;
- découpage d'une page ;
- optimisation ;
- accessibilité ;
- organisation des mocks.

Elle ne devra pas demander une validation pour chaque détail technique mineur.

---

# 18. Limites de l'autonomie

L'IA ne doit pas modifier arbitrairement :

- l'identité du projet ;
- le Design System validé ;
- les fonctionnalités principales ;
- les contenus historiques ;
- les informations institutionnelles ;
- les templates imposés ;
- les règles métier.

Lorsqu'une décision importante dépasse ces limites, elle devra l'indiquer.

---

# 19. Principe « minimum d'intervention »

Le projet doit pouvoir avancer avec un minimum d'interventions utilisateur.

Le fonctionnement idéal sera :

```text
Utilisateur
    ↓
fournit un modèle

IA
    ↓
analyse
    ↓
identifie les composants
    ↓
applique le Design System
    ↓
implémente
    ↓
rend responsive
    ↓
teste
    ↓
corrige
```

---

# 20. Feature First

L'architecture frontend sera organisée par fonctionnalité.

Exemple :

```text
src/
├── features/
│   ├── museum/
│   ├── collections/
│   ├── exhibitions/
│   ├── events/
│   ├── library/
│   ├── books/
│   ├── authors/
│   ├── visit/
│   ├── news/
│   └── contact/
│
├── shared/
├── components/
├── config/
├── lib/
└── app/
```

Ne pas créer des dossiers inutiles simplement pour respecter un schéma.

---

# 21. Site public

Le site public constituera l'interface principale.

Exemple :

```text
https://museebondoukou.ci
```

Il devra présenter à la fois le musée et la bibliothèque.

---

# 22. Navigation principale

Une proposition initiale :

```text
Accueil
Musée
Collections
Expositions
Bibliothèque
Événements
Actualités
Visiter
À propos
```

La navigation exacte pourra évoluer selon les modèles choisis.

---

# 23. Page Accueil

La page d'accueil devra donner immédiatement une identité forte au musée.

Sections possibles :

```text
Header
↓
Hero
↓
Présentation du musée
↓
Collections à découvrir
↓
Exposition actuelle
↓
Bibliothèque
↓
Événements à venir
↓
Actualités
↓
Informations de visite
↓
CTA
↓
Footer
```

---

# 24. Hero

Le Hero devra notamment permettre :

- d'identifier immédiatement le musée ;
- de comprendre sa mission ;
- de découvrir une image forte ;
- d'accéder aux informations essentielles.

CTA possibles :

```text
Découvrir le musée
Préparer ma visite
Explorer les collections
```

---

# 25. Page Musée

Cette page pourra présenter :

- histoire ;
- mission ;
- vision ;
- patrimoine ;
- bâtiment ;
- équipe ;
- rôle culturel ;
- engagements.

Les informations devront être fournies ou validées par le musée.

---

# 26. Collections

Créer une véritable section Collections.

Elle pourra permettre de découvrir les éléments patrimoniaux conservés ou exposés.

Exemple :

```text
Collections
├── Arts
├── Objets traditionnels
├── Histoire
├── Patrimoine
├── Photographies
└── Archives
```

Les catégories définitives devront provenir des données réelles du musée.

---

# 27. Liste des collections

Prévoir :

- image ;
- titre ;
- catégorie ;
- courte description ;
- période si disponible ;
- bouton Découvrir.

---

# 28. Fiche d'un objet ou d'une œuvre

URL possible :

```text
/collections/[slug]
```

La page pourra afficher :

- galerie ;
- titre ;
- description ;
- origine ;
- époque ;
- matériau ;
- dimensions ;
- contexte ;
- histoire ;
- catégorie ;
- objets associés.

Uniquement lorsque ces informations sont officiellement disponibles.

---

# 29. Expositions

Créer une section permettant de présenter :

```text
Exposition actuelle
Expositions à venir
Expositions passées
```

---

# 30. Fiche exposition

Une exposition pourra contenir :

- titre ;
- image ;
- description ;
- dates ;
- localisation ;
- horaires ;
- objets présentés ;
- galerie.

---

# 31. Événements

Le musée pourra annoncer :

- conférences ;
- ateliers ;
- visites guidées ;
- activités scolaires ;
- événements culturels ;
- rencontres ;
- journées spéciales.

---

# 32. Page événements

Prévoir :

```text
À venir
Aujourd'hui
Ce mois
Passés
```

selon les besoins réels.

---

# 33. Fiche événement

Contenu :

- titre ;
- description ;
- date ;
- heure ;
- lieu ;
- image ;
- public concerné ;
- conditions de participation ;
- contact.

---

# 34. Bibliothèque

La bibliothèque devra disposer d'un véritable espace dans le site.

Elle ne doit pas être réduite à un simple paragraphe de présentation.

---

# 35. Page principale Bibliothèque

Sections possibles :

```text
Hero Bibliothèque

Présentation

Recherche d'ouvrage

Catégories

Nouveautés

Livres populaires

Informations pratiques
```

---

# 36. Catalogue des livres

Créer un catalogue permettant de rechercher et parcourir les ouvrages.

URL :

```text
/bibliotheque/catalogue
```

---

# 37. Recherche de livres

Permettre notamment la recherche par :

```text
Titre
Auteur
Catégorie
Mot-clé
```

Des filtres supplémentaires pourront être ajoutés plus tard.

---

# 38. Carte d'un livre

Une carte pourra contenir :

- couverture ;
- titre ;
- auteur ;
- catégorie ;
- année ;
- disponibilité.

---

# 39. Fiche livre

URL :

```text
/bibliotheque/livres/[slug]
```

Contenu possible :

```text
Couverture

Titre

Auteur

Description

Catégorie

Année

Éditeur

Langue

Nombre de pages

Disponibilité

Localisation dans la bibliothèque
```

Seulement lorsque ces données existent.

---

# 40. Disponibilité d'un ouvrage

Prévoir des statuts simples :

```text
Disponible
Indisponible
Consultation sur place
```

Le système pourra évoluer ultérieurement.

---

# 41. Réservation d'un livre

Je déconseille de mettre immédiatement en place un système complexe de prêt en ligne.

Pour le MVP, nous pouvons commencer avec :

```text
Voir disponibilité
+
Contacter la bibliothèque
```

Puis ajouter plus tard :

```text
Réserver
Emprunter
Retour
Historique
```

si le musée en a réellement besoin.

---

# 42. Page Visiter

Une page importante devra centraliser :

- localisation ;
- horaires ;
- jours d'ouverture ;
- tarifs ;
- moyens de contact ;
- règles ;
- accessibilité ;
- informations pratiques.

---

# 43. Localisation

La page pourra intégrer :

- adresse ;
- carte ;
- indications ;
- points de repère.

Les informations officielles devront être validées avant publication.

---

# 44. Visites scolaires

Une section pourra être prévue pour :

- établissements scolaires ;
- enseignants ;
- groupes ;
- associations.

Fonctionnalité future :

```text
Demander une visite de groupe
```

---

# 45. Actualités

Le musée pourra publier :

- annonces ;
- nouvelles collections ;
- activités ;
- événements ;
- partenariats ;
- informations importantes.

---

# 46. Article

URL :

```text
/actualites/[slug]
```

Contenu :

- titre ;
- image ;
- date ;
- auteur ;
- contenu ;
- galerie éventuelle.

---

# 47. Page À propos

Elle pourra présenter :

- musée ;
- mission ;
- équipe ;
- partenaires ;
- contacts institutionnels.

---

# 48. Contact

Prévoir :

- téléphone ;
- e-mail ;
- adresse ;
- formulaire ;
- réseaux sociaux.

---

# 49. Footer

Le Footer pourra contenir :

```text
Musée de Bondoukou

Navigation

Bibliothèque

Informations pratiques

Contact

Réseaux sociaux

Mentions légales
```

---

# 50. Recherche globale

À terme, une recherche globale pourra permettre de rechercher :

```text
Œuvres
Collections
Livres
Expositions
Événements
Articles
```

Cette fonctionnalité n'est pas obligatoire dans le tout premier MVP.

---

# 51. Administration

Une application séparée sera consacrée à l'administration.

Exemple :

```text
admin.museebondoukou.ci
```

---

# 52. Dashboard Admin

Le dashboard pourra afficher :

```text
Collections
Livres
Expositions
Événements
Articles
Messages
```

ainsi que quelques statistiques.

---

# 53. Gestion des collections

L'administrateur pourra :

- ajouter ;
- modifier ;
- publier ;
- dépublier ;
- archiver.

---

# 54. Gestion des livres

L'administrateur pourra :

- ajouter un livre ;
- modifier ;
- ajouter une couverture ;
- associer un auteur ;
- associer une catégorie ;
- définir la disponibilité ;
- archiver.

---

# 55. Gestion des expositions

Administration de :

- exposition actuelle ;
- future ;
- passée.

---

# 56. Gestion des événements

Permettre :

- création ;
- modification ;
- programmation ;
- publication ;
- archivage.

---

# 57. Gestion des actualités

Prévoir un éditeur permettant de gérer les articles.

---

# 58. Médias

Prévoir progressivement une médiathèque centralisée pour :

- photos ;
- documents ;
- couvertures ;
- images des collections ;
- images d'événements.

---

# 59. Authentification Admin

Seuls les utilisateurs autorisés devront accéder à :

```text
/admin
```

L'API sera responsable du contrôle réel des autorisations.

---

# 60. Rôles futurs

Le système pourra éventuellement évoluer vers :

```text
SUPER_ADMIN
ADMIN
LIBRARIAN
EDITOR
```

Par exemple :

`LIBRARIAN` :

gestion des livres.

`EDITOR` :

actualités et événements.

`SUPER_ADMIN` :

toute la plateforme.

Ces rôles ne doivent être implémentés que lorsqu'ils deviennent nécessaires.

---

# 61. Design System partagé

Le même Design System sera utilisé par :

```text
WEB
+
ADMIN
```

avec des compositions adaptées à leurs usages.

---

# 62. Foundations

Le Design System devra définir :

```text
Colors
Typography
Spacing
Radius
Borders
Shadows
Grid
Containers
Breakpoints
Icons
Motion
Z-index
```

---

# 63. Composants primitifs

Créer progressivement :

```text
Button
IconButton
Input
Textarea
Select
SearchInput
Checkbox
Radio
Switch
Card
Badge
Avatar
Dialog
Drawer
Popover
Tooltip
Tabs
Accordion
Toast
Alert
Skeleton
Pagination
Breadcrumb
Table
EmptyState
```

Ne pas créer tout immédiatement.

Créer les composants en fonction des besoins réels.

---

# 64. Composants métier possibles

Exemples :

```text
CollectionCard
ArtworkCard
BookCard
ExhibitionCard
EventCard
ArticleCard
OpeningHours
VisitInformation
MuseumHero
LibraryHero
```

Ces composants pourront rester dans leurs features respectives.

---

# 65. Responsive Design

Chaque composant devra être vérifié sur :

```text
Téléphone
Tablette
Laptop
Desktop
Large Desktop
```

Une page uniquement correcte sur desktop n'est pas terminée.

---

# 66. Accessibilité

Le projet devra respecter notamment :

- HTML sémantique ;
- navigation clavier ;
- focus visible ;
- contrastes ;
- labels ;
- texte alternatif des images ;
- boutons suffisamment grands ;
- bonne hiérarchie des titres ;
- formulaires compréhensibles.

---

# 67. Performance

Le site étant très visuel, la gestion des images sera particulièrement importante.

Prévoir :

- compression ;
- formats modernes ;
- lazy loading ;
- dimensions adaptées ;
- responsive images ;
- placeholders ;
- cache.

Il ne faudra pas charger des images gigantesques sur mobile.

---

# 68. SEO

Le musée devra pouvoir être correctement référencé.

Prévoir :

- metadata ;
- titres ;
- descriptions ;
- URLs lisibles ;
- sitemap ;
- robots ;
- Open Graph ;
- données structurées lorsque pertinentes.

---

# 69. Internationalisation

Le MVP pourra commencer en français.

L'architecture devra toutefois éviter de rendre impossible l'ajout futur de langues.

Évolution possible :

```text
FR
EN
```

ou éventuellement d'autres langues pertinentes.

---

# 70. PWA

La transformation en PWA pourra être envisagée ultérieurement.

Elle n'est pas une priorité absolue du premier MVP.

---

# 71. Stack frontend

Stack recommandée :

```text
Next.js
React
TypeScript
Tailwind CSS
shadcn/ui
Zod
TanStack Query lorsque nécessaire
Iconsax ou Lucide
```

---

# 72. Server Components

Avec Next.js :

```text
Server Components par défaut
```

Utiliser :

```text
"use client"
```

uniquement lorsqu'une interaction côté client le nécessite réellement.

---

# 73. Pas de données dans les composants

Éviter :

```tsx
const books = [...]
```

directement dans les composants de présentation.

Préférer :

```text
Presentation
↓
Feature
↓
Repository
↓
Mock
```

Puis plus tard :

```text
Presentation
↓
Feature
↓
Repository
↓
API
```

---

# 74. API future

Lorsque les frontends seront terminés :

```text
apps/api
```

sera développée.

Elle sera utilisée par :

```text
WEB
+
ADMIN
```

---

# 75. API envisagée

Exemple :

```text
/api/v1/collections
/api/v1/artworks
/api/v1/exhibitions
/api/v1/events
/api/v1/books
/api/v1/authors
/api/v1/categories
/api/v1/articles
/api/v1/contact
```

Administration :

```text
/api/v1/admin/...
```

---

# 76. Base de données

Pour ce produit, une base relationnelle est adaptée.

Recommandation :

```text
PostgreSQL
+
Prisma
```

---

# 77. Entités principales

Exemples :

```text
User
MuseumCollection
Artwork
Exhibition
Event
Book
Author
BookCategory
Article
Media
ContactMessage
```

---

# 78. MVP public

Le premier MVP devra principalement permettre :

```text
Accueil

Présentation du musée

Collections

Expositions

Bibliothèque

Catalogue

Fiches livres

Événements

Actualités

Visiter

Contact
```

---

# 79. MVP administration

Le premier back-office devra permettre de gérer :

```text
Collections
Livres
Expositions
Événements
Actualités
Médias
Messages
```

---

# 80. Fonctionnalités à ne pas mettre immédiatement

Ne pas commencer par :

- intelligence artificielle pour les visiteurs ;
- réalité virtuelle ;
- visite 3D ;
- NFT ;
- application mobile native ;
- chat temps réel ;
- système complexe de réservation ;
- système complet de gestion des prêts ;
- moteur de recommandation ;
- microservices ;
- microfrontends.

Ces fonctionnalités augmenteraient fortement la complexité sans être nécessaires pour valider le produit.

---

# 81. Développement page par page

Nous travaillerons progressivement.

Pour chaque page, je pourrai fournir un template.

Exemple :

```text
Accueil
```

Puis nous travaillerons :

```text
Header
↓
Hero
↓
Collections
↓
Exposition
↓
Bibliothèque
↓
Événements
↓
Footer
```

Cependant, contrairement au projet précédent, l'IA disposera ici de davantage d'autonomie.

---

# 82. Mode IA autonome

Lorsque je fournis une référence, l'IA devra pouvoir poursuivre le travail sans attendre une instruction pour chaque petit élément.

Elle devra :

```text
Analyser
↓
Planifier
↓
Implémenter
↓
Tester
↓
Corriger
↓
Optimiser
```

dans les limites du cahier des charges.

---

# 83. Templates MiniMax / code fourni

Lorsque je fournis un template ou du code provenant d'un outil tel que MiniMax, celui-ci doit être considéré comme :

```text
une référence de composition
```

et non comme l'architecture finale du projet.

L'IA devra :

1. analyser le code ;
2. comprendre le design ;
3. identifier les parties utiles ;
4. éliminer les mauvaises pratiques éventuelles ;
5. le réadapter à l'architecture du projet ;
6. utiliser les composants du Design System ;
7. rendre l'interface responsive ;
8. respecter Feature First ;
9. respecter les Skills installés.

Ne jamais copier aveuglément le code généré par le template.

---

# 84. Si le template est mauvais

Si le modèle fourni présente :

- une mauvaise accessibilité ;
- une mauvaise UX ;
- une structure HTML incorrecte ;
- une mauvaise architecture ;
- des composants gigantesques ;
- trop de dépendances ;
- du CSS arbitraire ;
- une mauvaise gestion responsive ;

l'IA devra conserver l'intention visuelle mais corriger l'implémentation.

---

# 85. Skills Codex

Avant toute implémentation importante :

1. identifier les Skills disponibles ;
2. lire les Skills pertinents ;
3. respecter leurs instructions ;
4. utiliser leurs conventions.

Les Skills installés font partie des contraintes techniques du projet.

---

# 86. Qualité du code

Le code devra être :

```text
Lisible
Typé
Maintenable
Testable
Réutilisable
Simple
Cohérent
```

Éviter :

- `any` ;
- duplication ;
- composants gigantesques ;
- logique métier dans l'UI ;
- URLs API en dur ;
- dépendances inutiles ;
- abstraction excessive.

---

# 87. Vérification automatique après développement

Après chaque fonctionnalité significative, l'IA devra vérifier :

```text
TypeScript
Lint
Build
Responsive
Accessibilité
Imports
Code mort
Duplication
Erreurs évidentes
```

Lorsque des tests existent, elle devra également les exécuter.

---

# 88. Gestion des erreurs

Prévoir selon les besoins :

```text
Loading
Empty
Error
Success
Disabled
Not found
```

Une interface ne doit pas uniquement fonctionner dans le cas idéal.

---

# 89. Pages 404 et erreurs

Prévoir des pages adaptées pour :

```text
404
Erreur
Contenu indisponible
```

avec une UX cohérente avec le musée.

---

# 90. Sécurité

Lorsque l'API sera développée :

- mots de passe hashés ;
- sessions sécurisées ;
- contrôle des rôles ;
- validation des entrées ;
- protection des endpoints ;
- aucune donnée sensible exposée côté client.

---

# 91. Sauvegarde du contenu

L'administration devra être conçue avec prudence.

Les suppressions importantes pourront utiliser :

```text
archivage
```

plutôt qu'une suppression définitive immédiate.

Cela sera particulièrement pertinent pour :

- œuvres ;
- collections ;
- livres ;
- articles.

---

# 92. Identité visuelle

Le site devra transmettre une image :

```text
Culturelle
Patrimoniale
Contemporaine
Élégante
Institutionnelle
Chaleureuse
```

Il faudra éviter les clichés graphiques ou une surcharge de motifs africains simplement décoratifs.

L'identité culturelle devra être utilisée avec intention et respect.

---

# 93. Photographie

Les photographies devront occuper une place importante.

Elles pourront mettre en valeur :

- musée ;
- objets ;
- œuvres ;
- bibliothèque ;
- livres ;
- activités ;
- visiteurs ;
- patrimoine.

La qualité des images aura un impact majeur sur la perception du site.

---

# 94. Design éditorial

Le site pourra adopter certains principes de design éditorial :

- grandes images ;
- typographie forte ;
- espaces généreux ;
- mise en page narrative ;
- alternance textes/images ;
- compositions immersives.

Toujours sous contrôle du Design System.

---

# 95. KPI futurs

Une fois le site publié, il sera utile de suivre :

- nombre de visiteurs ;
- pages les plus consultées ;
- collections les plus consultées ;
- recherches de livres ;
- fiches livres consultées ;
- événements consultés ;
- clics vers les contacts ;
- demandes envoyées.

---

# 96. Roadmap

## Phase 1

Analyse du cahier des charges.

## Phase 2

Design System.

## Phase 3

Architecture du monorepo.

## Phase 4

Frontend public avec mocks.

## Phase 5

Frontend administration avec mocks.

## Phase 6

Tests UI/UX et responsive.

## Phase 7

API.

## Phase 8

Base de données.

## Phase 9

Connexion API.

## Phase 10

Administration réelle.

## Phase 11

SEO, performance et sécurité.

## Phase 12

Mise en production.

---

# 97. Principe de conception

Pour chaque fonctionnalité :

```text
Besoin utilisateur
       +
Design System
       +
Template
       +
Accessibilité
       +
Responsive
       +
Architecture
       ↓
Solution finale
```

---

# 98. Principe d'autonomie

L'utilisateur ne doit pas avoir à expliquer chaque détail technique.

L'IA doit prendre les décisions professionnelles raisonnables nécessaires à l'avancement du projet.

Cependant :

```text
Autonomie ≠ liberté de modifier les exigences
```

L'IA reste tenue par :

- ce cahier des charges ;
- le Design System ;
- les Skills ;
- les modèles fournis ;
- les données officielles.

---

# 99. Première mission de l'IA

Après réception de ce cahier des charges, l'IA devra :

1. lire l'intégralité du document ;
2. consulter les Skills Codex disponibles ;
3. analyser la stack ;
4. identifier les fonctionnalités ;
5. proposer l'architecture du monorepo ;
6. proposer l'architecture Feature First ;
7. créer une stratégie de mocks ;
8. concevoir le Design System initial ;
9. définir les design tokens ;
10. définir les composants primitifs ;
11. déterminer les composants partagés ;
12. définir les règles responsive ;
13. préparer la structure initiale du projet.

Elle ne devra pas attendre que l'utilisateur lui indique chaque dossier ou chaque composant.

---

# 100. Règle finale

Le projet doit respecter en permanence :

> Le Design System définit l'identité.

> Le template définit l'inspiration et la composition.

> Le cahier des charges définit le produit.

> Les Skills définissent les bonnes pratiques.

> L'IA organise et exécute le développement.

> Les contenus officiels définissent la vérité historique.

L'objectif final est de créer un site du Musée de Bondoukou qui soit à la fois moderne, culturel, accessible, performant et suffisamment structuré pour évoluer progressivement vers une véritable plateforme numérique patrimoniale et documentaire.