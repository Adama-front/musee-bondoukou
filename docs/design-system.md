# DESIGN SYSTEM
## Musée de Bondoukou & Bibliothèque

**Version :** 1.0  
**Applications concernées :**

```text
apps/web
apps/admin
```

**Priorité :** Absolue  
**Approche :** Mobile First  
**Style :** Culturel, patrimonial, éditorial, contemporain et accessible

---

# 1. Philosophie du Design System

Le Design System constitue la **source de vérité visuelle** du projet.

Toutes les interfaces devront respecter les mêmes fondations :

```text
Colors
Typography
Spacing
Radius
Borders
Shadows
Icons
Components
Layouts
Motion
Accessibility
Responsive
```

Aucune page ne devra inventer son propre système visuel.

---

# 2. Hiérarchie des priorités

Lorsqu'une décision UI doit être prise, l'ordre de priorité est :

```text
1. Design System
2. Accessibilité
3. UX
4. Responsive
5. Template fourni
6. Préférences visuelles ponctuelles
```

Le template fourni sert principalement de référence de :

- composition ;
- structure ;
- positionnement ;
- hiérarchie ;
- rythme visuel.

Il ne doit pas remplacer le Design System.

---

# 3. Direction artistique

L'identité visuelle du site devra transmettre :

```text
Patrimoine
Culture
Histoire
Transmission
Savoir
Élégance
Modernité
Sérénité
```

Le site ne devra pas ressembler :

- à un SaaS ;
- à une fintech ;
- à un e-commerce ;
- à un dashboard technologique générique.

L'expérience doit immédiatement évoquer un environnement culturel.

---

# 4. Palette principale

La palette proposée est inspirée de :

- la terre ;
- les matières naturelles ;
- les objets anciens ;
- le papier ;
- le bois ;
- le bronze ;
- les archives.

## Couleur principale — Terre cuite

```text
Primary 50   #FFF7F2
Primary 100  #FDEADE
Primary 200  #F8D2BC
Primary 300  #F1B18B
Primary 400  #E88958
Primary 500  #D96C34
Primary 600  #B95127
Primary 700  #933E23
Primary 800  #783521
Primary 900  #64301F
Primary 950  #35160D
```

Couleur principale recommandée :

```text
Primary = #B95127
```

Elle pourra être utilisée pour :

- CTA ;
- liens importants ;
- éléments actifs ;
- accent culturel ;
- indicateurs de navigation.

---

# 5. Couleur secondaire — Bronze

```text
Secondary 50   #FBF8EF
Secondary 100  #F5EED8
Secondary 200  #E9D9AD
Secondary 300  #DCC27F
Secondary 400  #C9A555
Secondary 500  #B48A3D
Secondary 600  #967032
Secondary 700  #77572B
Secondary 800  #624828
Secondary 900  #533E25
Secondary 950  #2F2112
```

Couleur recommandée :

```text
Secondary = #B48A3D
```

Usage :

- détails décoratifs ;
- badges ;
- séparateurs ;
- accents premium ;
- éléments patrimoniaux.

Ne pas l'utiliser massivement.

---

# 6. Couleurs neutres

## Fond principal

```text
Background = #F9F6F0
```

Un ivoire légèrement chaud est préférable à un blanc pur pour le site public.

## Surface

```text
Surface = #FFFFFF
```

## Surface secondaire

```text
Surface Muted = #F2EDE5
```

## Texte principal

```text
Foreground = #221B17
```

## Texte secondaire

```text
Muted Foreground = #6F655D
```

## Bordure

```text
Border = #DED7CF
```

## Bordure forte

```text
Border Strong = #BFB5AB
```

---

# 7. Couleur sombre

Pour les zones très institutionnelles ou éditoriales :

```text
Ink = #1E1916
```

Elle pourra notamment être utilisée pour :

- footer ;
- certains hero ;
- sections spéciales ;
- navigation sombre ;
- pages exposition.

Exemple :

```text
Background: #1E1916
Text: #F9F6F0
```

---

# 8. Couleurs fonctionnelles

## Success

```text
Success = #26734D
```

## Warning

```text
Warning = #B87918
```

## Error

```text
Error = #B83A32
```

## Info

```text
Info = #35658A
```

Ces couleurs ont une fonction.

Ne pas les utiliser simplement pour décorer l'interface.

---

# 9. Thème global

Le site public devra privilégier :

```text
Background chaud
+
Texte sombre
+
Terre cuite
+
Touches bronze
```

Ce système donnera une identité forte sans utiliser trop de couleurs.

---

# 10. Règle 60 / 30 / 10

Approximativement :

```text
60 % → couleurs neutres / background
30 % → surfaces et typographie
10 % → accent Primary + Secondary
```

Éviter de remplir toutes les sections avec la couleur principale.

---

# 11. Typographie

Le système typographique pourra combiner deux familles maximum.

## Typographie éditoriale

Pour :

```text
Hero
H1
H2
Titres d'expositions
Titres de collections
Citations
```

Utiliser une serif élégante.

Recommandations possibles :

```text
Cormorant Garamond
ou
DM Serif Display
ou
Lora
```

Choisir une seule famille.

Recommandation principale :

```text
Cormorant Garamond
```

---

# 12. Typographie fonctionnelle

Pour :

```text
Body
Navigation
Buttons
Forms
Dashboard
Metadata
```

utiliser une sans-serif très lisible.

Recommandation :

```text
Nunito
```

Le site pourra donc utiliser :

```text
Headings → Cormorant Garamond
UI / Body → Nunito
```

---

# 13. Échelle typographique

## Display XL

```text
Desktop : 72px
Mobile : 44px
Weight : 600
Line-height : 1
```

## Display

```text
Desktop : 60px
Mobile : 40px
```

## H1

```text
Desktop : 48px
Mobile : 36px
```

## H2

```text
Desktop : 40px
Mobile : 30px
```

## H3

```text
Desktop : 32px
Mobile : 26px
```

## H4

```text
Desktop : 24px
Mobile : 22px
```

## Body Large

```text
18px
Line-height : 1.7
```

## Body

```text
16px
Line-height : 1.65
```

## Body Small

```text
14px
```

## Caption

```text
12px
```

Éviter de créer de nouvelles tailles sans nécessité.

---

# 14. Largeur des textes

Pour les longs contenus éditoriaux :

```text
max-width ≈ 65–75 caractères
```

Éviter les paragraphes qui traversent tout l'écran desktop.

---

# 15. Spacing System

Échelle principale :

```text
4px
8px
12px
16px
20px
24px
32px
40px
48px
64px
80px
96px
120px
```

---

# 16. Espacement des sections

Sur desktop :

```text
Section compact : 64px
Section normale : 96px
Grande section : 120px
```

Sur mobile :

```text
Section compacte : 40px
Section normale : 56px
Grande section : 72px
```

---

# 17. Radius

Le musée devra avoir une interface légèrement plus éditoriale et moins « app mobile arrondie ».

Utiliser :

```text
sm = 4px
md = 8px
lg = 12px
xl = 16px
2xl = 24px
full = 9999px
```

Les cartes de collections pourront utiliser :

```text
8px – 16px
```

Éviter les cartes systématiquement en :

```text
32px / 40px
```

Cela donnerait un style trop SaaS.

---

# 18. Borders

Définir :

```text
border-subtle
border-default
border-strong
border-focus
border-error
```

Bordure standard :

```text
1px solid Border
```

---

# 19. Shadows

Le site public doit utiliser très peu d'ombres.

```text
xs
sm
md
```

Les ombres importantes doivent rester rares.

Les interfaces culturelles doivent principalement utiliser :

- espace ;
- contraste ;
- bordures ;
- photographie ;

plutôt que de lourdes ombres.

---

# 20. Container

Définir un container global.

Exemple :

```text
max-width : 1440px
```

Contenu éditorial classique :

```text
1200px – 1280px
```

Certaines sections photographiques pourront dépasser cette largeur.

---

# 21. Padding horizontal

Mobile :

```text
16px
```

Grand mobile :

```text
20px
```

Tablette :

```text
32px
```

Desktop :

```text
48px
```

Grand desktop :

```text
64px
```

---

# 22. Grid

Desktop :

```text
12 colonnes
```

Tablette :

```text
8 colonnes
```

Mobile :

```text
4 colonnes
```

Les composants ne sont pas obligés d'utiliser toute la grille.

---

# 23. Images

Les images jouent un rôle essentiel.

Formats principaux :

```text
Hero → 16:9 / large
Collection → 4:5
Book → 2:3
Event → 4:3
Article → 16:9
Gallery → proportions adaptées
```

Les images devront avoir :

- dimensions connues ;
- alt text ;
- lazy loading lorsque possible ;
- compression ;
- responsive sizing.

---

# 24. Image de collection

Exemple :

```text
aspect-ratio: 4 / 5
object-fit: cover
```

Le design doit donner beaucoup de place aux objets et œuvres.

---

# 25. Couverture des livres

Ratio recommandé :

```text
2 / 3
```

Ne pas forcer une couverture de livre dans un format carré.

---

# 26. Buttons

Variants :

```text
primary
secondary
outline
ghost
danger
link
```

---

# 27. Primary Button

Utilisation :

- action principale ;
- réserver une visite future ;
- découvrir une exposition importante ;
- envoyer un formulaire.

Style conceptuel :

```text
Background → Primary
Text → white
Radius → md
```

---

# 28. Secondary Button

```text
Background → Secondary ou neutre
```

À utiliser avec modération.

---

# 29. Outline Button

Très utile pour le site public.

Exemple :

```text
Découvrir la collection
Voir tous les événements
Explorer la bibliothèque
```

---

# 30. Button sizes

```text
sm
md
lg
```

Ne pas créer des tailles différentes pour chaque page.

---

# 31. Inputs

Tous les champs doivent partager :

```text
height
padding
radius
font
border
focus
error
disabled
```

États :

```text
Default
Hover
Focus
Filled
Disabled
Error
Success
```

---

# 32. Search Input

Composant important pour :

```text
Catalogue bibliothèque
Collections
Actualités
Événements
```

Il doit être simple et très visible.

---

# 33. Cards

Créer plusieurs variantes métier sans casser les fondations.

## CollectionCard

```text
Image
Catégorie
Titre
Description courte
```

## BookCard

```text
Cover
Titre
Auteur
Disponibilité
```

## EventCard

```text
Image
Date
Titre
Lieu
```

## ExhibitionCard

```text
Image
Statut
Titre
Dates
```

## ArticleCard

```text
Image
Date
Titre
Excerpt
```

---

# 34. États des cartes

Les cartes cliquables doivent gérer :

```text
Default
Hover
Focus
Active
```

Les transitions doivent rester discrètes.

---

# 35. Badge

Variants possibles :

```text
default
primary
secondary
success
warning
error
outline
```

Exemples :

```text
Disponible
Indisponible
À venir
En cours
Terminé
Nouvelle exposition
```

---

# 36. Navigation

Le Header public doit être :

```text
sobre
clair
respirant
```

Desktop :

```text
Logo
Navigation
Actions
```

Mobile :

```text
Logo
Menu
```

Éviter les headers trop chargés.

---

# 37. Footer

Le Footer pourra utiliser :

```text
Ink #1E1916
```

avec :

```text
texte clair
liens secondaires
accent terre cuite / bronze
```

---

# 38. Breadcrumb

Important pour :

```text
Collections
Œuvres
Livres
Articles
Expositions
```

Exemple :

```text
Accueil / Bibliothèque / Histoire / Titre du livre
```

---

# 39. Tabs

Utiles pour :

```text
Expositions
Événements
Catalogue
```

Exemple :

```text
En cours
À venir
Passées
```

---

# 40. Empty States

Ne jamais afficher simplement :

```text
No data
```

Préférer :

```text
Aucune exposition programmée pour le moment.
```

ou :

```text
Aucun ouvrage ne correspond à votre recherche.
```

---

# 41. Skeletons

Prévoir pour :

- cartes ;
- collections ;
- catalogue ;
- actualités ;
- dashboard.

Ils doivent respecter la structure réelle des composants.

---

# 42. Dialog / Modal

Utiliser uniquement lorsqu'une action nécessite réellement de garder le contexte actuel.

Éviter les modales pour présenter de longs contenus culturels.

Préférer une page dédiée.

---

# 43. Motion

Animations :

```text
150–300ms
```

Utiliser principalement :

- fade ;
- translate subtil ;
- scale très léger ;
- apparition d'images ;
- transitions de menu.

---

# 44. Interdictions Motion

Éviter :

- parallaxe agressive ;
- animations permanentes ;
- zooms excessifs ;
- textes animés illisibles ;
- animations bloquant la navigation.

---

# 45. Icônes

Une seule famille d'icônes.

Priorité :

```text
Iconsax
```

ou :

```text
Lucide
```

Ne pas mélanger arbitrairement les deux.

---

# 46. Taille des icônes

```text
xs = 14
sm = 16
md = 20
lg = 24
xl = 32
```

Les grandes icônes décoratives peuvent être traitées séparément.

---

# 47. Design System public vs Admin

Les deux interfaces utilisent les mêmes foundations.

Mais :

```text
WEB
→ éditorial
→ photographique
→ immersif
→ espaces généreux
```

```text
ADMIN
→ fonctionnel
→ dense
→ rapide
→ orienté gestion
```

---

# 48. Application Admin

L'admin pourra privilégier :

```text
Background = #F7F5F2
Surface = white
Primary = #B95127
Foreground = #221B17
```

Il utilisera moins la typographie serif.

Pour l'administration :

```text
Nunito
```

sera la police principale.

La serif pourra rester réservée aux titres institutionnels éventuels.

---

# 49. Sidebar Admin

La Sidebar doit rester simple.

Exemple :

```text
Dashboard
Collections
Œuvres
Bibliothèque
Livres
Auteurs
Expositions
Événements
Actualités
Médias
Messages
Paramètres
```

---

# 50. Tables Admin

Les tables doivent supporter :

```text
Search
Filter
Sort
Pagination
Status
Actions
Empty state
Loading
```

Sur mobile, ne pas simplement réduire un tableau desktop.

Transformer lorsque nécessaire en :

```text
Cards
Listes
Scrollable table
```

selon le contexte.

---

# 51. Responsive

Chaque composant doit être réfléchi pour :

```text
Mobile
Tablet
Laptop
Desktop
Large Desktop
```

Le responsive ne consiste pas seulement à changer la taille du texte.

Il faut adapter :

- colonnes ;
- ordre ;
- navigation ;
- images ;
- actions ;
- densité ;
- espaces.

---

# 52. Mobile First

Commencer par :

```text
320px – 430px
```

puis élargir progressivement.

Le site doit rester utilisable sur des téléphones modestes.

---

# 53. Breakpoints

Suivre principalement les breakpoints Tailwind.

Exemple :

```text
sm
md
lg
xl
2xl
```

Ne créer un breakpoint personnalisé que si un besoin réel le justifie.

---

# 54. Accessibility

Objectif :

```text
WCAG AA
```

autant que raisonnablement possible.

Vérifier :

- contraste ;
- navigation clavier ;
- focus visible ;
- alt images ;
- labels ;
- titres ;
- formulaires ;
- messages d'erreur ;
- zones tactiles.

---

# 55. Focus

Tous les composants interactifs doivent avoir un focus clairement visible.

Ne jamais faire :

```css
outline: none;
```

sans fournir une alternative accessible.

---

# 56. Touch Target

Taille tactile minimale recommandée :

```text
44 × 44px
```

pour les actions importantes sur mobile.

---

# 57. Design Tokens

Organisation recommandée :

```text
packages/ui/
│
├── tokens/
│   ├── colors.ts
│   ├── typography.ts
│   ├── spacing.ts
│   ├── radius.ts
│   ├── shadows.ts
│   ├── breakpoints.ts
│   ├── motion.ts
│   └── z-index.ts
│
├── components/
├── styles/
└── index.ts
```

L'implémentation exacte pourra suivre les conventions du projet et des Skills installés.

---

# 58. CSS Variables

Créer des variables sémantiques.

Exemple conceptuel :

```css
--background
--foreground

--primary
--primary-foreground

--secondary
--secondary-foreground

--muted
--muted-foreground

--surface

--border
--ring

--success
--warning
--error
--info
```

Les composants doivent dépendre des tokens sémantiques plutôt que de valeurs hexadécimales répétées.

---

# 59. Tailwind

Privilégier :

```text
bg-background
text-foreground
bg-primary
text-primary-foreground
border-border
text-muted-foreground
```

Éviter :

```text
bg-[#B95127]
text-[#221B17]
```

répétés dans toutes les pages.

---

# 60. Composants partagés

Dans :

```text
packages/ui
```

on pourra progressivement avoir :

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
Badge
Avatar
Card
Dialog
Drawer
Tabs
Accordion
Tooltip
Popover
Toast
Alert
Skeleton
Pagination
Breadcrumb
Table
EmptyState
SectionHeader
Container
```

---

# 61. Composants spécifiques au musée

Ces composants resteront plutôt dans les features concernées :

```text
ArtworkCard
CollectionCard
ExhibitionCard
MuseumHero
Timeline
ArtifactDetails
Gallery
```

---

# 62. Composants spécifiques à la bibliothèque

```text
BookCard
BookCover
BookAvailability
AuthorCard
LibraryHero
BookFilters
CatalogueSearch
```

---

# 63. Pas de duplication

Avant de créer un composant, vérifier :

```text
Existe-t-il déjà ?
Peut-il être étendu ?
Une variante suffit-elle ?
Est-il réellement partagé ?
```

Ne pas dupliquer un Button ou un Card uniquement parce qu'un template présente une différence mineure.

---

# 64. Utilisation d'un template

Lorsqu'un template est fourni :

```text
TEMPLATE
   ↓
Analyse structurelle
   ↓
Mapping vers Design System
   ↓
Réutilisation des composants
   ↓
Responsive
   ↓
Accessibilité
   ↓
Implémentation finale
```

---

# 65. Exemple concret

Le template utilise :

```text
#FF5722
Inter
border-radius: 28px
shadow-xl
```

Notre Design System utilise :

```text
Primary = #B95127
Nunito
radius-lg
shadow-sm
```

Alors :

- conserver la structure ;
- conserver l'organisation ;
- conserver le rythme général ;
- remplacer les styles du template par ceux du Design System.

---

# 66. Si le template apporte une meilleure idée

L'IA ne doit pas modifier silencieusement le Design System.

Elle devra expliquer :

```text
Le template propose un comportement qui pourrait améliorer le Design System.
```

Puis préciser :

```text
Modification proposée
Pourquoi
Composants impactés
Conséquences
```

La modification globale nécessite validation.

---

# 67. Mode IA autonome

L'IA peut prendre seule les décisions qui respectent ce Design System.

Elle n'a pas besoin de demander :

```text
Quelle marge ?
Quel radius ?
Quelle taille de bouton ?
Quelle ombre ?
```

si le Design System répond déjà à la question.

---

# 68. Rôle des Skills

Avant les décisions importantes :

```text
1. consulter les Skills pertinents ;
2. respecter leurs contraintes ;
3. appliquer le Design System ;
4. respecter le cahier des charges.
```

---

# 69. Documentation

Chaque composant important devra être suffisamment clair concernant :

```text
Purpose
Variants
Sizes
States
Usage
Do
Don't
Accessibility
```

---

# 70. Règles « Do »

Faire :

- utiliser les tokens ;
- utiliser les composants existants ;
- conserver de l'espace ;
- favoriser les images de qualité ;
- utiliser une hiérarchie typographique forte ;
- garder une UX simple ;
- optimiser le mobile ;
- utiliser des couleurs avec intention.

---

# 71. Règles « Don't »

Ne pas :

- utiliser des couleurs arbitraires ;
- créer un nouveau bouton pour chaque page ;
- surcharger les pages ;
- abuser des gradients ;
- multiplier les fonts ;
- multiplier les radius ;
- utiliser trop d'ombres ;
- transformer le musée en interface SaaS ;
- surcharger l'identité avec des motifs décoratifs ;
- sacrifier la lisibilité au profit de l'esthétique.

---

# 72. Design de la Bibliothèque

La bibliothèque doit appartenir au même produit.

Elle ne doit pas avoir une palette complètement différente.

Elle pourra néanmoins utiliser davantage :

```text
Ivoire
Brun
Bronze
Surfaces papier
```

afin d'avoir une ambiance légèrement plus éditoriale.

Mais :

```text
Primary
Typography
Spacing
Components
```

resteront ceux du Design System global.

---

# 73. Design des Expositions

Les pages d'expositions pourront être plus immersives :

```text
grandes images
layouts éditoriaux
fonds sombres ponctuels
typographie expressive
```

mais toujours avec les mêmes foundations.

---

# 74. Design des Collections

Priorité :

```text
Objet
↓
Image
↓
Titre
↓
Contexte
```

L'interface ne doit pas prendre plus d'importance visuelle que l'œuvre présentée.

---

# 75. Design du Catalogue

Pour la bibliothèque :

```text
Recherche rapide
Filtres simples
Résultats lisibles
Disponibilité visible
```

La couverture et le titre doivent être immédiatement identifiables.

---

# 76. Design Admin

Dans l'administration :

```text
fonction > décoration
```

Les actions importantes doivent être évidentes.

Exemple :

```text
Publier
Archiver
Modifier
Enregistrer
Annuler
```

---

# 77. Z-index

Définir une échelle plutôt que des valeurs aléatoires.

Exemple :

```text
base
dropdown
sticky
overlay
modal
toast
```

Éviter :

```text
z-[999999]
```

---

# 78. Content Density

Site public :

```text
densité faible à moyenne
```

Admin :

```text
densité moyenne
```

Ne pas appliquer exactement la même densité visuelle aux deux interfaces.

---

# 79. Formulaires

Les formulaires doivent :

- afficher clairement le label ;
- expliquer les champs complexes ;
- afficher les erreurs près du champ ;
- conserver les saisies après une erreur ;
- avoir une action principale claire.

---

# 80. Messages système

Exemple réussi :

```text
Le livre a été ajouté au catalogue.
```

et non :

```text
Success operation completed.
```

---

# 81. États de disponibilité des livres

Utiliser :

```text
Disponible → Success
Indisponible → Muted/Error léger
Consultation sur place → Info
```

---

# 82. États des événements

```text
À venir
Aujourd'hui
Terminé
Annulé
```

avec des styles cohérents.

---

# 83. Dark Sections

Le site n'a pas besoin d'un Dark Mode complet dans le MVP.

Cependant, des sections sombres peuvent utiliser :

```text
Ink
```

pour renforcer l'aspect éditorial.

---

# 84. Pas de Dark Mode obligatoire

Ne pas développer un dark mode complet uniquement parce qu'il est courant.

Cela ajouterait de la complexité sans répondre à un besoin prioritaire.

---

# 85. Identité Musée / Bibliothèque

La cohérence globale peut être représentée ainsi :

```text
MUSÉE
→ Image
→ Patrimoine
→ Immersion

BIBLIOTHÈQUE
→ Lecture
→ Recherche
→ Transmission

ADMIN
→ Gestion
→ Efficacité

            ↓

       DESIGN SYSTEM
          COMMUN
```

---

# 86. Règle finale concernant les templates

Un template ne décide jamais :

```text
des couleurs
des fonts
des spacing
des composants
des radius
des shadows
```

si ces éléments existent déjà dans le Design System.

Il décide principalement :

```text
de la composition
du rythme
du placement
de la hiérarchie
de l'inspiration
```

---

# 87. Formule générale

Pour chaque écran :

```text
TEMPLATE
+
DESIGN SYSTEM
+
CONTENU RÉEL
+
UX
+
ACCESSIBILITÉ
+
RESPONSIVE
=
INTERFACE FINALE
```

---

# 88. Première mission de Codex

Avant de commencer les pages :

1. lire ce Design System ;
2. lire le cahier des charges ;
3. consulter les Skills installés ;
4. analyser le monorepo ;
5. créer les tokens ;
6. configurer les fonts ;
7. configurer les couleurs ;
8. configurer les variables CSS ;
9. préparer `packages/ui` ;
10. créer uniquement les primitives nécessaires au démarrage ;
11. vérifier le responsive ;
12. vérifier l'accessibilité.

Ne pas développer immédiatement toute la bibliothèque de composants.

Créer les composants progressivement en fonction des besoins.

---

# 89. Source de vérité

À partir de sa validation :

> Ce Design System devient la référence UI/UX officielle du Musée de Bondoukou et de sa Bibliothèque.

Toute nouvelle page, fonctionnalité, composant ou template devra être interprété en fonction de ce système.

En cas de contradiction, le Design System est prioritaire, sauf modification explicitement validée.