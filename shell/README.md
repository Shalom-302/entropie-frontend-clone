# Scripts d'Automatisation - Restauration du Projet Entropie

Ce dossier contient des scripts shell pour recréer automatiquement tous les fichiers du projet avec leur code source complet.

## 📋 Vue d'ensemble

Les scripts permettent de restaurer l'intégralité du projet en cas d'erreur ou de modification accidentelle. Ils recréent tous les fichiers de configuration, composants, et code source.

## 🚀 Utilisation Rapide

### Restaurer tout le projet

```bash
cd shell
bash restore-project.sh
```

Ce script principal exécute tous les sous-scripts dans le bon ordre pour recréer:
- Les fichiers de configuration (package.json, tsconfig.json, etc.)
- Les fichiers de l'application (src/app/*)
- Les composants sections (src/components/sections/*)
- Les utilitaires (src/lib/*)
- Les fichiers divers (README.md, .gitignore, etc.)

### Restaurer des parties spécifiques

Vous pouvez aussi exécuter les scripts individuellement:

```bash
# Restaurer uniquement les fichiers de configuration
bash restore-config.sh

# Restaurer uniquement les fichiers de l'application
bash restore-app.sh

# Restaurer uniquement les composants sections
bash restore-sections.sh

# Restaurer uniquement les utilitaires
bash restore-lib.sh

# Restaurer uniquement les fichiers divers
bash restore-misc.sh
```

## 📁 Structure des Scripts

```
shell/
├── README.md                      # Ce fichier
├── restore-project.sh             # Script principal
├── restore-config.sh              # Configuration (package.json, tsconfig, etc.)
├── restore-app.sh                 # Fichiers src/app/*
├── restore-sections.sh            # Composants sections
├── restore-lib.sh                 # Utilitaires
├── restore-misc.sh                # Fichiers divers
├── restore-ui.sh                  # Info sur les composants UI
└── sections/                      # Scripts pour chaque composant section
    ├── create-sidebar-navigation.sh
    ├── create-main-header.sh
    ├── create-news-feed.sh
    ├── create-analytics-sidebar.sh
    ├── create-mobile-header.sh
    └── create-bottom-auth-bar.sh
```

## 🔧 Après la Restauration

Une fois les scripts exécutés, suivez ces étapes:

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev
```

## ⚠️ Notes Importantes

1. **Composants UI**: Les composants UI (src/components/ui/*) ne sont pas automatiquement recréés par ces scripts. Utilisez shadcn pour les réinstaller si nécessaire:
   ```bash
   npx shadcn@latest add [component-name]
   ```

2. **Sauvegarde**: Ces scripts écrasent les fichiers existants. Faites une sauvegarde si nécessaire avant de les exécuter.

3. **Permissions**: Assurez-vous que les scripts ont les permissions d'exécution:
   ```bash
   chmod +x *.sh
   chmod +x sections/*.sh
   ```

4. **Environnement**: Les scripts sont testés sous Linux/macOS. Sous Windows, utilisez Git Bash ou WSL.

## 📝 Personnalisation

Vous pouvez modifier les scripts pour:
- Ajouter de nouveaux fichiers à restaurer
- Modifier le contenu des fichiers existants
- Créer des variantes du projet

Chaque script utilise des heredocs (`<< 'EOF'`) pour définir le contenu des fichiers, ce qui facilite la modification.

## 🐛 Dépannage

**Erreur de permissions**:
```bash
chmod +x shell/*.sh
chmod +x shell/sections/*.sh
```

**Script non trouvé**:
Assurez-vous d'être dans le bon répertoire:
```bash
cd shell
pwd  # Devrait afficher: /chemin/vers/projet/shell
```

**Fichiers non créés**:
Vérifiez les messages d'erreur dans le terminal. Les scripts utilisent `set -e` pour s'arrêter en cas d'erreur.

## 📞 Support

Pour toute question ou problème, référez-vous à la documentation du projet principal ou consultez les logs d'exécution des scripts.

---

**Version**: 1.0.0  
**Dernière mise à jour**: 2025
