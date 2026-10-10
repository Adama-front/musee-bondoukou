# Musée de Bondoukou & Bibliothèque

GitHub : dépôt origin https://github.com/Adama-front/musee-bondoukou.git. Après chaque section ou tâche terminée, préparer le commit et demander l'accord explicite de l'utilisateur avant de pousser sur GitHub. Ne pas interpréter l'accord pour un push comme une autorisation permanente pour les suivants.

Lire les documents dans docs avant toute tâche importante : cahier-des-charges.md, design-system.md et instructions-projet.md. Ils sont les sources fournies par l'utilisateur et n'ont pas été réécrits.

Priorité : cahier des charges, Design System officiel, skills applicables, architecture existante, accessibilité, UX, responsive, template.

Frontend First : développer web puis admin avec des mocks typés derrière des repositories. Aucun backend, API ou base de données avant validation des frontends. Organiser par features ; app compose les routes, packages/ui contient les primitives génériques et les tokens. Ajouter les packages uniquement lorsqu'ils ont une responsabilité concrète.

Respecter les skills adama-stack-guard, frontend-design-system et vercel-react-best-practices. Conserver Next.js App Router, React, TypeScript strict, Tailwind v4, pnpm. Server Components par défaut. Ne pas installer SWR, même si un guide de performance le recommande.

Ne jamais inventer du contenu historique, institutionnel ou bibliographique. Identifier les mocks explicitement. Ne jamais modifier globalement le Design System sans validation utilisateur.

Tester types, lint et build après une feature significative. Vérifier clavier, focus, contrastes, responsive et états pertinents ; distinguer vérifications effectuées et vérifications impossibles. Le site public comporte l'accueil et le catalogue mock ; la page de référence est conservée à /design-system. L'administration reste au stade des fondations.
