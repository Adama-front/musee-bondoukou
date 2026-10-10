Tu vas travailler sur mon projet **Musée de Bondoukou & Bibliothèque**.

Je vais te fournir **deux fichiers principaux** :

1. le **Cahier des charges du Musée de Bondoukou & Bibliothèque** ;
2. le **Design System officiel du projet**.

Je dispose également de plusieurs **Skills / règles de développement** que tu dois consulter et respecter lorsqu’ils sont disponibles dans ton environnement.

---

# 1. Première mission : lire avant de coder

Avant d’écrire le moindre code, tu dois obligatoirement :

1. lire entièrement le cahier des charges ;
2. lire entièrement le Design System ;
3. identifier les Skills disponibles ;
4. lire les Skills pertinents pour cette tâche ;
5. comprendre l’architecture prévue ;
6. comprendre les fonctionnalités ;
7. comprendre les règles UI/UX ;
8. comprendre les contraintes responsive ;
9. comprendre les règles d’accessibilité ;
10. comprendre les limites du MVP.

**Ne commence pas le développement avant d’avoir effectué cette analyse.**

---

# 2. Hiérarchie des règles

Lorsque plusieurs instructions semblent entrer en conflit, respecte cet ordre de priorité :

```text
1. Cahier des charges
2. Design System officiel
3. Skills du projet
4. Architecture existante
5. Accessibilité
6. UX
7. Responsive
8. Template / modèle visuel fourni
9. Préférences esthétiques ponctuelles
```

Le Design System reste la **source de vérité visuelle**.

---

# 3. Important concernant les Skills

Je veux que tu utilises réellement les Skills disponibles.

Avant chaque tâche importante :

```text
Identifier les Skills pertinents
↓
Lire leurs instructions
↓
Appliquer leurs règles
↓
Implémenter
```

Ne te contente pas de dire que tu vas utiliser les Skills.

Tu dois effectivement t’en servir pour guider :

- architecture ;
- organisation des fichiers ;
- qualité du code ;
- composants ;
- accessibilité ;
- responsive ;
- performance ;
- conventions ;
- tests.

Si ton environnement ne permet pas d’accéder directement à mes Skills, indique-le clairement avant de commencer au lieu de prétendre les avoir lus.

---

# 4. Contexte du projet

Le projet concerne le :

**Musée de Bondoukou et sa Bibliothèque**

Le produit doit permettre de valoriser :

- le musée ;
- son histoire ;
- ses collections ;
- ses objets et œuvres ;
- ses expositions ;
- ses événements ;
- ses actualités ;
- sa bibliothèque ;
- ses livres ;
- ses auteurs ;
- les informations de visite.

Le projet possède également une application d’administration.

---

# 5. Architecture générale

Le projet utilise un **monorepo**.

Structure globale attendue :

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
│   └── api-client/
│
└── ...
```

Nous commencerons principalement par :

```text
apps/web
apps/admin
```

L’API sera développée plus tard.

---

# 6. Frontend First

Pendant cette première phase :

```text
PAS DE BACKEND RÉEL
PAS DE BASE DE DONNÉES RÉELLE
PAS D’API RÉELLE
```

Les interfaces doivent utiliser des **données mockées réalistes**.

Exemple :

```text
mocks/
├── collections.mock.ts
├── artworks.mock.ts
├── exhibitions.mock.ts
├── events.mock.ts
├── books.mock.ts
├── authors.mock.ts
└── articles.mock.ts
```

Mais ne place pas les mocks directement dans les composants React.

Préparer l’architecture pour que nous puissions remplacer plus tard :

```text
Mocks
```

par :

```text
API
```

sans réécrire toute l’interface.

---

# 7. Architecture Feature First

Le projet doit suivre une organisation **Feature First**.

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

Ne crée pas de dossiers inutiles.

Chaque dossier doit avoir une responsabilité réelle.

---

# 8. Design System prioritaire

Le Design System fourni est obligatoire.

Tu dois l’utiliser pour :

- couleurs ;
- typographie ;
- spacing ;
- radius ;
- shadows ;
- borders ;
- boutons ;
- inputs ;
- cards ;
- navigation ;
- icônes ;
- responsive ;
- composants ;
- états ;
- motion.

Tu ne dois pas inventer un nouveau système visuel page par page.

---

# 9. Palette officielle

Respecte les couleurs définies dans le Design System.

Notamment :

```text
Primary
#B95127

Secondary
#B48A3D

Background
#F9F6F0

Foreground
#221B17

Ink
#1E1916
```

Ainsi que les variantes définies dans le fichier Design System.

Ne remplace pas ces couleurs arbitrairement.

---

# 10. Typographie

Respecte les typographies définies dans le Design System.

Principe principal :

```text
Titres éditoriaux
→ Cormorant Garamond

UI / Body
→ Nunito
```

Ne rajoute pas une troisième ou quatrième police sans justification.

---

# 11. Templates que je fournirai

Je pourrai te fournir :

- capture d’écran ;
- template MiniMax ;
- image ;
- maquette ;
- référence de site ;
- code HTML/CSS/React.

Ces références doivent servir principalement à comprendre :

```text
Composition
Hiérarchie
Disposition
Proportions
Rythme
Intention visuelle
```

Elles ne remplacent pas le Design System.

---

# 12. Exemple

Si le template utilise :

```text
Rouge vif
Inter
radius 30px
shadow-xl
```

alors que mon Design System utilise :

```text
Primary #B95127
Nunito
radius-lg
shadow-sm
```

tu dois conserver l’organisation du modèle mais utiliser mon Design System.

---

# 13. Ne copie pas aveuglément un template

Lorsque je fournis du code, tu dois d’abord l’analyser.

Ensuite :

1. identifier les parties intéressantes ;
2. identifier les mauvaises pratiques ;
3. conserver l’intention UI ;
4. réécrire le code proprement ;
5. respecter notre architecture ;
6. respecter le Design System ;
7. rendre le composant réutilisable ;
8. rendre le résultat responsive ;
9. améliorer l’accessibilité ;
10. supprimer les dépendances inutiles.

Le code fourni est une **référence**, pas nécessairement le code final.

---

# 14. Autonomie attendue

Pour ce projet, tu disposes d’une grande autonomie.

Je ne veux pas devoir t’expliquer :

```text
quelle marge utiliser
quel padding utiliser
quel radius utiliser
comment découper un composant
comment gérer le responsive
comment gérer les états
où placer chaque fichier
```

Ces décisions doivent découler :

```text
du Design System
+
des Skills
+
du cahier des charges
+
des bonnes pratiques
```

---

# 15. Tu agis comme plusieurs experts

Pour ce projet, travaille comme un :

```text
Lead UI/UX Designer
+
Product Designer
+
Lead Frontend Engineer
+
Software Architect
```

Tu dois prendre des décisions cohérentes et professionnelles.

---

# 16. Mais tu ne dois pas inventer le contenu historique

Tu ne dois jamais inventer :

- dates historiques ;
- histoire du musée ;
- noms de personnalités ;
- objets patrimoniaux ;
- provenances ;
- descriptions historiques ;
- informations bibliographiques ;
- auteurs ;
- dates d’œuvres.

Si l’information réelle n’est pas fournie, utilise clairement :

```text
Contenu mock
```

ou :

```text
Contenu à compléter
```

Ne présente jamais une donnée inventée comme une vérité historique.

---

# 17. Mobile First obligatoire

Chaque interface doit être pensée d’abord pour :

```text
Mobile
```

puis adaptée à :

```text
Tablet
Laptop
Desktop
Large Desktop
```

Une page uniquement correcte sur desktop n’est pas terminée.

---

# 18. Responsive complet

Vérifie notamment :

- header ;
- navigation ;
- menu mobile ;
- Hero ;
- grilles ;
- cards ;
- galerie ;
- catalogue ;
- textes ;
- images ;
- tables ;
- formulaires ;
- filtres ;
- boutons ;
- sidebar admin ;
- modales ;
- overflow.

---

# 19. Accessibilité

Respecte les bonnes pratiques :

- HTML sémantique ;
- hiérarchie H1/H2/H3 ;
- labels ;
- alt text ;
- navigation clavier ;
- focus visible ;
- contrastes ;
- tailles tactiles adaptées ;
- aria lorsque nécessaire ;
- formulaires compréhensibles.

Ne sacrifie jamais l’accessibilité uniquement pour reproduire visuellement un template.

---

# 20. Réutilisabilité

Avant de créer un composant, vérifie s’il existe déjà.

Privilégie les composants partagés pour :

```text
Button
Input
Select
Textarea
Badge
Card
Dialog
Drawer
Tabs
Skeleton
Pagination
Breadcrumb
SearchInput
EmptyState
Container
SectionHeader
```

Les composants vraiment génériques doivent pouvoir être placés dans :

```text
packages/ui
```

---

# 21. Composants métier

Les composants spécifiques restent dans leur feature.

Exemples :

```text
CollectionCard
ArtworkCard
ExhibitionCard
MuseumHero

BookCard
BookCover
BookAvailability
LibraryHero

EventCard
ArticleCard
```

Ne transforme pas automatiquement tous les composants en composants globaux.

---

# 22. Server Components

Avec Next.js :

```text
Server Components par défaut
```

Utilise :

```text
"use client"
```

uniquement lorsqu’un composant a réellement besoin :

- d’état ;
- d’événements ;
- de hooks navigateur ;
- d’interactions client.

Évite de transformer des pages entières en Client Components sans raison.

---

# 23. TypeScript

Le projet doit être strictement typé.

Évite :

```text
any
```

Les types importants doivent être définis correctement.

---

# 24. Pas de données codées en dur partout

Évite :

```tsx
const books = [...]
```

dans chaque page.

Utilise plutôt :

```text
UI
↓
Feature
↓
Repository / Service
↓
Mocks
```

afin de préparer l’arrivée future de l’API.

---

# 25. Design éditorial

Le site public doit pouvoir exploiter :

- grandes photographies ;
- typographie éditoriale ;
- espaces généreux ;
- compositions narratives ;
- sections sombres ponctuelles ;
- mise en valeur des œuvres ;
- mise en valeur des livres.

Mais toujours sous contrôle du Design System.

---

# 26. Musée

Pour les pages Musée et Collections :

```text
IMAGE > INTERFACE
```

L’objet culturel doit rester au centre de l’expérience.

Ne surcharge pas les fiches avec des éléments UI inutiles.

---

# 27. Bibliothèque

Pour la bibliothèque, privilégie :

```text
Recherche
Lisibilité
Catalogue
Filtres simples
Disponibilité
```

Le design doit rester culturel et éditorial tout en étant très fonctionnel.

---

# 28. Admin

L’application Admin doit être :

```text
plus dense
plus fonctionnelle
plus orientée données
```

mais elle doit conserver :

- les mêmes couleurs ;
- les mêmes tokens ;
- les mêmes composants fondamentaux ;
- la même identité générale.

Dans l’admin :

```text
fonction > décoration
```

---

# 29. Performance

Le site sera fortement basé sur les images.

Optimise :

- images ;
- dimensions ;
- formats modernes ;
- lazy loading ;
- responsive images ;
- bundle ;
- dépendances ;
- JavaScript client.

N’ajoute pas une grosse bibliothèque pour résoudre un problème simple.

---

# 30. SEO

Les pages publiques importantes doivent être préparées pour :

- metadata ;
- title ;
- description ;
- Open Graph ;
- sitemap ;
- robots ;
- URLs lisibles ;
- données structurées lorsque pertinent.

---

# 31. États UI

Chaque fonctionnalité importante doit gérer selon le besoin :

```text
Loading
Empty
Error
Success
Disabled
Not Found
```

Exemple :

```text
Aucun ouvrage ne correspond à votre recherche.
```

plutôt qu’un écran vide.

---

# 32. Tests et validation

Après chaque fonctionnalité significative :

1. vérifie TypeScript ;
2. vérifie le lint ;
3. vérifie le build lorsque pertinent ;
4. vérifie les imports ;
5. vérifie le responsive ;
6. vérifie l’accessibilité ;
7. vérifie les erreurs évidentes ;
8. vérifie la duplication ;
9. vérifie le code mort ;
10. vérifie la cohérence avec le Design System.

---

# 33. Si tu rencontres un problème

Ne contourne pas silencieusement une règle.

Si :

```text
Template
```

et :

```text
Design System
```

entrent en conflit, privilégie le Design System.

Puis explique brièvement le conflit.

---

# 34. Modification du Design System

Tu ne dois pas modifier automatiquement le Design System.

Si tu identifies une amélioration importante :

```text
1. présente le problème ;
2. propose l’amélioration ;
3. explique pourquoi ;
4. indique les composants concernés.
```

Attends ma validation avant une modification globale du Design System.

---

# 35. Méthode de travail

Lorsque je te demande de créer une page ou que je te fournis un template :

```text
1. analyser la demande
2. consulter les fichiers concernés
3. consulter les Skills pertinents
4. analyser le Design System
5. rechercher les composants existants
6. identifier ce qui peut être réutilisé
7. définir la structure
8. implémenter
9. rendre responsive
10. tester
11. corriger
```

Je ne veux pas avoir à te donner chacune de ces étapes.

Tu dois les appliquer automatiquement.

---

# 36. Ne sur-engineer pas le projet

Évite :

- microservices ;
- microfrontends ;
- abstraction prématurée ;
- patterns complexes sans besoin réel ;
- dizaines de fichiers pour une fonctionnalité simple ;
- dépendances inutiles.

Le code doit rester :

```text
simple
professionnel
maintenable
évolutif
```

---

# 37. Après chaque tâche

Donne-moi un compte rendu court avec :

```text
Créé
Modifié
Réutilisé
Décisions importantes
Vérifications effectuées
```

Ne fournis pas une longue dissertation si ce n’est pas nécessaire.

---

# 38. Travail autonome

À partir du moment où la tâche est claire, tu peux prendre les décisions techniques raisonnables sans me demander confirmation à chaque étape.

Cependant, ne prends pas de décision métier importante non prévue dans le cahier des charges.

---

# 39. Première tâche après lecture

Après avoir lu :

```text
Cahier des charges
+
Design System
+
Skills disponibles
```

commence par me fournir un résumé structuré de ta compréhension comprenant uniquement :

### Architecture

Comment tu comprends l’organisation générale du projet.

### Design System

Les règles essentielles que tu vas respecter.

### Frontend

La manière dont tu vas organiser `web` et `admin`.

### Mocks

Comment tu vas préparer les données avant l’API.

### Skills

Quels Skills sont pertinents et comment tu vas les appliquer.

### Risques

Les éventuelles incohérences ou difficultés que tu identifies.

### Première étape

La première action technique que tu proposes.

---

# 40. Important

Pour cette première analyse :

**NE COMMENCE PAS ENCORE À CODER.**

Je veux d’abord vérifier que tu as correctement compris :

```text
les deux fichiers
+
les Skills
+
l’architecture
+
le Design System
```

avant de commencer l’implémentation.

---

# RÈGLE FINALE

Pendant tout le projet, applique cette formule :

```text
CAHIER DES CHARGES
+
DESIGN SYSTEM
+
SKILLS
+
TEMPLATE
+
ARCHITECTURE
+
ACCESSIBILITÉ
+
RESPONSIVE
+
PERFORMANCE
=
IMPLÉMENTATION FINALE
```

Le **cahier des charges définit ce que nous construisons**.

Le **Design System définit l’identité visuelle**.

Les **Skills définissent les bonnes pratiques et contraintes techniques**.

Le **template définit principalement la composition visuelle attendue**.

Et toi, en tant qu’IA principale chargée du développement, tu dois transformer ces éléments en une implémentation propre, cohérente, maintenable et professionnelle.