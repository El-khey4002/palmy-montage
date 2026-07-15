# Yanis Laval — Site vitrine

Site one-page pour Yanis Laval, monteur vidéo & community manager.
Stack : **Vite + React + Tailwind CSS v4**.

## Lancer en local

```bash
npm install      # une seule fois
npm run dev      # → http://localhost:5173
```

## Modifier le contenu

Tout le texte (services, contacts, créations, chiffres) est regroupé en haut de
[`src/App.jsx`](src/App.jsx), dans les tableaux `CONTACT`, `SERVICES`, `STATS`,
`CREATIONS`. Tu changes le texte là, tu sauvegardes, ça se met à jour tout seul.

Les images et icônes sont dans [`src/assets/`](src/assets/).

## Mettre en ligne

```bash
npm run build    # génère le dossier dist/
```

Le dossier `dist/` est un site statique déployable partout :

- **Le plus simple — Netlify / Vercel** : crée un compte, connecte ce dépôt
  (ou glisse-dépose le dossier `dist/`). Déploiement automatique à chaque push.
- **GitHub Pages** : pousse le projet sur un dépôt GitHub, puis déploie le
  contenu de `dist/` sur la branche `gh-pages`.

> `base: './'` dans `vite.config.js` fait que le site marche quel que soit
> l'hébergeur, sans configuration de chemin.

## À finaliser

- Remplacer les 2 images du portfolio par de vraies captures des vidéos
  (`src/assets/inspiration.webp` et `src/assets/monteur.jpg`).
- Mettre les vraies URLs des vidéos TikTok (variable `CONTACT.tiktok` +
  liens des créations dans `src/App.jsx`).
