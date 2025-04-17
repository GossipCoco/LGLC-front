# front-app-v3

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Stratégie de branches Git pour le projet

### Branches principales
### main 
-> Contient le code stable.
-> Utilisée pour les releases en production.
-> Proposée en lecture seule (push interdits, uniquement via Pull Request).

### dev
-> Branche de développement active.
-> Intègre les nouvelles fonctionnalités, les corrections avant d'être testées globalement.
-> Base pour les branches feature/* et bugfix/*.

### Branches secondaires

feature/*

Pour développer une nouvelle fonctionnalité.

Exemple : feature/login-form, feature/puzzle-game

Part de dev, merge dans dev.

bugfix/*

Pour corriger un bug trouvé en dev.

Exemple : bugfix/fix-login-redirect

Part de dev, merge dans dev.

hotfix/*

Pour corriger un bug urgent en production.

Part de main, merge dans main puis dans dev.

release/*

### Optionnel : pour préparer une version stable (ex : tests finaux, docs).

Part de dev, merge dans main et dev.

Nommage des branches

Toujours utiliser le pattern : type/nom-court-expressif

Exemple :

feature/generation-fichier-texte

bugfix/upload-image-avatar

hotfix/reparation-page-dashboard

### Règles de merge

Pas de push direct sur main ou dev

Toujours créer une Pull Request

PR relue et validée par 1 personne (ou toi-même si tu es seule, mais toujours tester)

Ajouter une description claire à la PR

### Recommandations GitHub

Activer la protection des branches main et dev

Requérir la PR avec validation (settings GitHub > Branches)

### Outils recommandés

GitHub Desktop ou VS Code Git intégré

GitFlow (en ligne de commande si tu veux automatiser ces processus)


