# Accueil et catalogue — 9 octobre 2026

## Implémentation

- Accueil éditorial avec header, menu mobile natif, hero, présentation, collections, bibliothèque, agenda et visite.
- Catalogue GET avec recherche normalisée (casse et accents), catégorie, filtres dans l'URL et réinitialisation.
- Trois fiches mock explicitement identifiées, sans données bibliographiques présentées comme réelles.
- Collections et agenda vides en attente des contenus officiels.
- Repository typé pour remplacer ultérieurement les mocks par l'API.
- Page de référence web conservée à /design-system.
- Le script optionnel unrs-resolver reste explicitement désactivé via allowBuilds pour pnpm 11.

## Vérifications

- Installation terminée, lockfile conservé.
- TypeScript et lint passent sur web, admin et ui.
- Les deux applications ont compilé et généré leurs pages.
- Dans le navigateur : menu mobile, recherche archives (un résultat), recherche introuvable (aucun résultat), réinitialisation (trois résultats), activation clavier du lien d'évitement.
- Contrôle du débordement horizontal de l'accueil à 320, 430, 768, 1024, 1440 et 1920 px : aucun détecté.
- Inspection visuelle mobile 320/430 et desktop. Polices déclarées et chargement vérifiés. Pas de mesure Core Web Vitals ni d'audit WCAG complet.

## Visuel

Image temporaire : apps/web/public/images/library-illustration.webp, générée avec l'outil image_gen puis convertie en WebP. Prompt : photographie éditoriale générique de livres unis en toile sur une table ivoire, lumière naturelle, tons terre cuite et brun, sans texte, personnes, objets historiques ou intérieur de musée identifiable. Aucun lien documentaire avec la collection du musée ; la légende visible le précise.

## Informations manquantes

Photographies officielles, histoire et missions validées, notices des collections, catalogue réel, programmation, adresse précise, horaires, tarifs et contacts. Le prototype reste non indexable avant validation.
