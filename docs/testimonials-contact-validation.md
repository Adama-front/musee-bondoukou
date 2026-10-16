# Témoignages et Contact & localisation — 15–16 octobre 2026

Les deux dernières sections demandées pour l'accueil sont implémentées d'après les captures fournies le 15 octobre : témoignage centré avec navigation, puis formulaire à gauche et coordonnées/carte à droite. Elles suivent la galerie et précèdent le footer. La composition reprend les modèles ; couleurs, polices et espacements utilisent le Design System existant.

## Implémentation

- Feature `testimonials` : repository typé, trois exemples explicitement fictifs et carrousel client limité à son interaction. Flèches circulaires, sélection directe, position sélectionnée et annonce polie du texte. Aucun défilement automatique. État vide prévu et contrôles masqués pour un seul avis.
- Feature `contact` : coordonnées derrière un repository typé, formulaire client, validation séparée du JSX avec Zod 4.6.5 et état local minimal. Nom de 2 à 100 caractères, e-mail valide limité à 254 caractères, message de 10 à 2 000 caractères ; espaces extérieurs supprimés avant validation.
- Champs obligatoires avec labels, limites de saisie, erreurs reliées par `aria-describedby`, résumé d'erreurs et focus sur le premier champ invalide. Pendant la vérification, saisie désactivée ; retour du focus au bouton après le résultat. Confirmation effacée dès une nouvelle saisie.
- Le formulaire reste désactivé avant hydratation JavaScript. Le repository de démonstration ne fait aucun appel réseau et ne persiste aucune saisie. Sa réponse indique explicitement qu'aucun message n'a été envoyé.
- Trois icônes ajoutées à la famille SVG partagée existante. Aucun token ni style global du Design System modifié. Le lien « Localisation & contact » du footer cible maintenant `/#contact`.
- Zod était déjà verrouillé transitivement ; il est déclaré directement dans le package web pour la validation du formulaire. Aucun changement des versions des autres dépendances. Après des erreurs réseau lors des résolutions initiales, l'installation avec le lockfile conservé a réussi ; les politiques de chaîne d'approvisionnement ont été vérifiées par pnpm.

## Vérifications effectuées

- `pnpm run lint` : réussi après la dernière modification du formulaire ; web exécuté, UI/admin en cache.
- `pnpm run build` : réussi après la dernière modification ; web exécuté, admin en cache. Les quatre routes publiques existantes sont conservées.
- `pnpm run typecheck` : réussi après le build ; trois tâches exécutées.
- Carrousel : précédent depuis le premier avis vers le troisième, suivant du troisième au premier, sélection du deuxième avec Espace. Position annoncée et un seul bouton sélectionné. Focus visible après activation clavier.
- Formulaire vide : trois erreurs, focus sur le nom. Nom constitué d'espaces, e-mail invalide et message trop court également rejetés.
- Formulaire valide : erreurs effacées, valeurs conservées, confirmation « aucun message n'a été envoyé » et retour du focus au bouton. Nouvelle saisie : confirmation effacée. Tab depuis le nom : focus sur l'e-mail, contour solide de 2 px.
- Absence de débordement horizontal aux largeurs 320, 430, 768, 1024, 1440 et 1920 px. Grille Contact à une colonne sous 1024 px, deux à partir de 1024 px. Composition inspectée visuellement à 1440 et 320 px.
- Boutons du carrousel : cibles de 44 × 44 px pour les sélecteurs, 48 × 48 px pour les flèches.
- Contrastes calculés à partir des couleurs effectivement rendues : texte secondaire, bordures des champs et points inactifs sur blanc 5,68:1 ; primaire sur blanc 4,92:1 ; primaire sur ivoire 4,56:1 ; focus sur blanc 7,11:1 ; erreur sur blanc 5,69:1. Icônes et guillemet sont décoratifs.
- Carte Google chargée dans le navigateur et lisible comme carte générale de Bondoukou. Iframe titrée, chargement différé et lien externe explicite fourni en complément.
- Les trois documents sources sont inchangés ; `git diff --check` contrôlé avant préparation du commit.

## Limites et statut

Les citations sont fictives et leurs profils sont des exemples, sans témoignage réel ni nom de personne inventé. Adresse précise, téléphone et e-mail officiels restent à fournir. La carte montre la ville, sans prétendre localiser le musée. Le formulaire n'est pas un service d'envoi : aucun backend, API, stockage ou e-mail réel n'est ajouté.

Les états vide/un seul avis et l'échec du repository sont prévus dans le code mais n'ont pas été injectés dans le navigateur. Le blocage avant hydratation est présent dans le rendu serveur ; aucun parcours complet avec JavaScript désactivé n'a été réalisé. Pas de lecteur d'écran, audit WCAG exhaustif, mesure Core Web Vitals ou recette d'envoi réel. La carte dépend d'un service externe et de sa disponibilité réseau.

Implémentation locale terminée ; validation visuelle utilisateur et contenus institutionnels encore en attente. Commit à préparer avec le suivi. Push soumis à un nouvel accord explicite ; aucun déploiement du site.

## Captures

- [Témoignages desktop](screenshots/testimonials-desktop.png)
- [Contact desktop](screenshots/contact-desktop.png)
- [Contact mobile à 320 px](screenshots/contact-mobile.png)
