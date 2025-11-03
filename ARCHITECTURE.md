# 🏗️ ARCHITECTURE COMPLÈTE DU PROJET ENTROPIE

## 📋 Table des Matières
1. [Vue d'ensemble](#vue-densemble)
2. [Structure des dossiers](#structure-des-dossiers)
3. [Dépendances fonctionnelles](#dépendances-fonctionnelles)
4. [Graphe de dépendances](#graphe-de-dépendances)
5. [Technologies utilisées](#technologies-utilisées)
6. [Modules et packages](#modules-et-packages)

---

## 🎯 Vue d'ensemble

**Type de projet:** Application web Next.js 15 (App Router)  
**Framework:** React 19 + TypeScript  
**Styling:** Tailwind CSS v4 + Shadcn/UI  
**Architecture:** Component-based avec Server/Client Components

---

## 📁 Structure des dossiers

```
projet-entropie/
├── 📂 .git/                          # Contrôle de version Git
├── 📂 .next/                         # Build Next.js (généré)
├── 📂 node_modules/                  # Dépendances npm (généré)
│
├── 📂 public/                        # Assets statiques publics
│
├── 📂 shell/                         # 🔧 Scripts d'automatisation
│   ├── README.md                     # Documentation des scripts
│   ├── restore-project.sh            # Script principal de restauration
│   ├── restore-config.sh             # Restauration des configs
│   ├── restore-app.sh                # Restauration src/app
│   ├── restore-sections.sh           # Orchestrateur des sections
│   ├── restore-lib.sh                # Restauration des utilitaires
│   ├── restore-misc.sh               # Fichiers divers
│   ├── restore-ui.sh                 # Info composants UI
│   └── 📂 sections/                  # Scripts par composant
│       ├── create-sidebar-navigation.sh
│       ├── create-main-header.sh
│       ├── create-news-feed.sh
│       ├── create-analytics-sidebar.sh
│       ├── create-mobile-header.sh
│       └── create-bottom-auth-bar.sh
│
├── 📂 src/                           # 🎯 Code source principal
│   │
│   ├── 📂 app/                       # 🚀 Next.js App Router
│   │   ├── favicon.ico               # Icône du site
│   │   ├── globals.css               # Styles globaux (Tailwind v4)
│   │   ├── layout.tsx                # Layout racine (Server Component)
│   │   ├── page.tsx                  # Page d'accueil (Server Component)
│   │   └── global-error.tsx          # Gestion erreurs globales
│   │
│   ├── 📂 components/                # 🧩 Composants React
│   │   │
│   │   ├── ErrorReporter.tsx         # Composant de rapport d'erreurs
│   │   │
│   │   ├── 📂 sections/              # 📄 Sections de page (Client Components)
│   │   │   ├── sidebar-navigation.tsx      # Navigation latérale gauche
│   │   │   ├── main-header.tsx             # En-tête principal
│   │   │   ├── news-feed.tsx               # Fil d'actualités
│   │   │   ├── analytics-sidebar.tsx       # Sidebar analytics (droite)
│   │   │   ├── mobile-header.tsx           # En-tête mobile
│   │   │   └── bottom-auth-bar.tsx         # Barre d'authentification
│   │   │
│   │   └── 📂 ui/                    # 🎨 Composants UI Shadcn (55+ composants)
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── alert.tsx
│   │       ├── aspect-ratio.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── breadcrumb.tsx
│   │       ├── button-group.tsx
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── chart.tsx
│   │       ├── checkbox.tsx
│   │       ├── collapsible.tsx
│   │       ├── command.tsx
│   │       ├── context-menu.tsx
│   │       ├── dialog.tsx
│   │       ├── drawer.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── empty.tsx
│   │       ├── field.tsx
│   │       ├── form.tsx
│   │       ├── hover-card.tsx
│   │       ├── input-group.tsx
│   │       ├── input-otp.tsx
│   │       ├── input.tsx
│   │       ├── item.tsx
│   │       ├── kbd.tsx
│   │       ├── label.tsx
│   │       ├── menubar.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── pagination.tsx
│   │       ├── popover.tsx
│   │       ├── progress.tsx
│   │       ├── radio-group.tsx
│   │       ├── resizable.tsx
│   │       ├── scroll-area.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   │       ├── skeleton.tsx
│   │       ├── slider.tsx
│   │       ├── sonner.tsx
│   │       ├── spinner.tsx
│   │       ├── switch.tsx
│   │       ├── table.tsx
│   │       ├── tabs.tsx
│   │       ├── textarea.tsx
│   │       ├── toggle-group.tsx
│   │       ├── toggle.tsx
│   │       └── tooltip.tsx
│   │
│   ├── 📂 hooks/                     # 🪝 Hooks React personnalisés
│   │   └── (vide - prêt pour ajouts futurs)
│   │
│   ├── 📂 lib/                       # 📚 Utilitaires et helpers
│   │   ├── utils.ts                  # Fonctions utilitaires (cn, etc.)
│   │   └── 📂 hooks/                 # Hooks partagés
│   │       └── use-mobile.tsx        # Hook détection mobile
│   │
│   └── 📂 visual-edits/              # 🎨 Édition visuelle (outil dev)
│       └── VisualEditsMessenger.tsx  # Communication iframe
│
├── 📄 .gitignore                     # Exclusions Git
├── 📄 README.md                      # Documentation projet
├── 📄 bun.lock                       # Lockfile Bun
├── 📄 components.json                # Config Shadcn
├── 📄 eslint.config.mjs              # Config ESLint
├── 📄 next-env.d.ts                  # Types Next.js
├── 📄 next.config.ts                 # Configuration Next.js
├── 📄 package-lock.json              # Lockfile npm
├── 📄 package.json                   # Dépendances et scripts
├── 📄 postcss.config.mjs             # Config PostCSS
├── 📄 tsconfig.json                  # Config TypeScript
└── 📄 website_design.md              # Guide de design

```

---

## 🔗 Dépendances fonctionnelles

### 🎯 Niveau 1 : Configuration de base

```
┌─────────────────────────────────────────────────────────────┐
│  CONFIGURATION DU PROJET                                     │
├─────────────────────────────────────────────────────────────┤
│  • package.json          → Définit toutes les dépendances   │
│  • tsconfig.json         → Configuration TypeScript          │
│  • next.config.ts        → Configuration Next.js             │
│  • components.json       → Configuration Shadcn              │
│  • eslint.config.mjs     → Règles de linting                │
│  • postcss.config.mjs    → Traitement CSS                   │
│  • tailwind.config       → Implicite dans globals.css       │
└─────────────────────────────────────────────────────────────┘
```

**Dépendances externes principales:**
- `next@15.3.5` - Framework
- `react@19.0.0` - Bibliothèque UI
- `typescript@5` - Typage statique
- `tailwindcss@4` - Framework CSS

---

### 🎨 Niveau 2 : Styles et Design System

```
┌─────────────────────────────────────────────────────────────┐
│  DESIGN SYSTEM                                               │
├─────────────────────────────────────────────────────────────┤
│  src/app/globals.css                                         │
│  ├─ @import "tailwindcss"                                   │
│  ├─ @import "tw-animate-css"                                │
│  ├─ @import Google Fonts (Inter)                            │
│  ├─ @theme { ... }         → Tokens de design               │
│  └─ @layer base { ... }    → Styles de base                 │
│                                                              │
│  DÉPEND DE:                                                  │
│  • tailwindcss (v4)                                          │
│  • tw-animate-css                                            │
│  • Google Fonts API                                          │
└─────────────────────────────────────────────────────────────┘
```

---

### 🧩 Niveau 3 : Composants UI de base (Shadcn)

```
┌─────────────────────────────────────────────────────────────┐
│  COMPOSANTS UI PRIMITIFS (src/components/ui/)               │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Chaque composant UI DÉPEND DE:                             │
│  ├─ React                                                    │
│  ├─ src/lib/utils.ts      → Fonction cn() pour classes     │
│  ├─ globals.css            → Variables CSS                  │
│  └─ @radix-ui/*            → Composants accessibles         │
│                                                              │
│  Exemples de dépendances Radix:                             │
│  • button.tsx         → @radix-ui/react-slot                │
│  • dialog.tsx         → @radix-ui/react-dialog              │
│  • dropdown-menu.tsx  → @radix-ui/react-dropdown-menu       │
│  • tooltip.tsx        → @radix-ui/react-tooltip             │
│  • sidebar.tsx        → Composition de primitives           │
│                                                              │
│  Utilitaires:                                                │
│  • lucide-react        → Icônes                             │
│  • class-variance-authority → Variants de composants        │
│  • tailwind-merge      → Fusion intelligente de classes     │
└─────────────────────────────────────────────────────────────┘
```

---

### 🪝 Niveau 4 : Hooks et utilitaires

```
┌─────────────────────────────────────────────────────────────┐
│  HOOKS ET UTILITAIRES                                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  src/lib/utils.ts                                            │
│  ├─ export function cn(...)    → Merge classes Tailwind     │
│  └─ DÉPEND DE: clsx, tailwind-merge                         │
│                                                              │
│  src/lib/hooks/use-mobile.tsx                                │
│  ├─ Hook pour détecter viewport mobile (< 768px)            │
│  ├─ DÉPEND DE: React (useState, useEffect)                  │
│  └─ UTILISÉ PAR: mobile-header.tsx                          │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

### 📄 Niveau 5 : Sections de page (Composants métier)

```
┌─────────────────────────────────────────────────────────────┐
│  COMPOSANTS SECTIONS (src/components/sections/)             │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  1️⃣  sidebar-navigation.tsx                                 │
│     ├─ "use client"                                          │
│     ├─ DÉPEND DE:                                            │
│     │  ├─ React (useState)                                   │
│     │  ├─ next/link                                          │
│     │  ├─ lucide-react (icônes)                             │
│     │  └─ globals.css (CSS variables)                       │
│     └─ FOURNIT: Navigation latérale gauche avec logo        │
│                                                              │
│  2️⃣  main-header.tsx                                         │
│     ├─ Client ou Server Component                           │
│     ├─ DÉPEND DE: globals.css                               │
│     └─ FOURNIT: En-tête "À la Une aujourd'hui"             │
│                                                              │
│  3️⃣  news-feed.tsx                                           │
│     ├─ "use client"                                          │
│     ├─ DÉPEND DE:                                            │
│     │  ├─ React                                              │
│     │  ├─ lucide-react (icônes)                             │
│     │  └─ src/components/ui/* (card, badge, etc.)          │
│     └─ FOURNIT: Liste d'articles avec ranking               │
│                                                              │
│  4️⃣  analytics-sidebar.tsx                                   │
│     ├─ "use client"                                          │
│     ├─ DÉPEND DE:                                            │
│     │  ├─ recharts (graphiques)                             │
│     │  └─ src/components/ui/card.tsx                        │
│     └─ FOURNIT: Widget analytics droite                     │
│                                                              │
│  5️⃣  mobile-header.tsx                                       │
│     ├─ "use client"                                          │
│     ├─ DÉPEND DE:                                            │
│     │  ├─ src/lib/hooks/use-mobile.tsx                      │
│     │  ├─ src/components/ui/sheet.tsx                       │
│     │  └─ lucide-react                                      │
│     └─ FOURNIT: Header mobile avec menu hamburger           │
│                                                              │
│  6️⃣  bottom-auth-bar.tsx                                     │
│     ├─ Client Component                                      │
│     ├─ DÉPEND DE: src/components/ui/button.tsx             │
│     └─ FOURNIT: Boutons Inscription/Connexion               │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

### 🚀 Niveau 6 : Pages Next.js (App Router)

```
┌─────────────────────────────────────────────────────────────┐
│  APP ROUTER (src/app/)                                       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  layout.tsx (Root Layout - Server Component)                │
│  ├─ DÉPEND DE:                                               │
│  │  ├─ ./globals.css                                         │
│  │  ├─ src/components/ErrorReporter.tsx                     │
│  │  ├─ src/visual-edits/VisualEditsMessenger.tsx           │
│  │  └─ next/script                                          │
│  ├─ FOURNIT: Structure HTML de base                         │
│  └─ ENVELOPPE: Tous les enfants (pages)                     │
│                                                              │
│  page.tsx (Homepage - Server Component)                     │
│  ├─ DÉPEND DE:                                               │
│  │  ├─ src/components/sections/sidebar-navigation.tsx       │
│  │  ├─ src/components/sections/main-header.tsx             │
│  │  ├─ src/components/sections/news-feed.tsx               │
│  │  ├─ src/components/sections/analytics-sidebar.tsx       │
│  │  └─ src/components/sections/mobile-header.tsx           │
│  └─ FOURNIT: Page d'accueil complète                        │
│                                                              │
│  global-error.tsx                                            │
│  ├─ DÉPEND DE: React                                         │
│  └─ FOURNIT: Gestion erreurs au niveau global               │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

### 🔧 Niveau 7 : Outils d'automatisation (Shell)

```
┌─────────────────────────────────────────────────────────────┐
│  SCRIPTS SHELL (shell/)                                      │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  restore-project.sh (Script principal)                      │
│  ├─ APPELLE:                                                 │
│  │  ├─ restore-config.sh                                     │
│  │  ├─ restore-app.sh                                        │
│  │  ├─ restore-sections.sh                                   │
│  │  ├─ restore-lib.sh                                        │
│  │  └─ restore-misc.sh                                       │
│  └─ FONCTION: Recréer tout le projet                        │
│                                                              │
│  restore-sections.sh                                         │
│  ├─ APPELLE:                                                 │
│  │  ├─ sections/create-sidebar-navigation.sh                │
│  │  ├─ sections/create-main-header.sh                       │
│  │  ├─ sections/create-news-feed.sh                         │
│  │  ├─ sections/create-analytics-sidebar.sh                │
│  │  ├─ sections/create-mobile-header.sh                     │
│  │  └─ sections/create-bottom-auth-bar.sh                   │
│  └─ FONCTION: Recréer tous les composants sections          │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 📊 Graphe de dépendances

### Vue hiérarchique complète

```
package.json (racine)
│
├── Configuration
│   ├── tsconfig.json
│   ├── next.config.ts
│   ├── eslint.config.mjs
│   ├── postcss.config.mjs
│   └── components.json
│
└── src/
    │
    ├── app/
    │   ├── globals.css ⭐ (Base de tout le styling)
    │   │   ├── Tailwind CSS v4
    │   │   ├── Google Fonts (Inter)
    │   │   └── Design tokens (@theme)
    │   │
    │   ├── layout.tsx
    │   │   ├── globals.css
    │   │   ├── components/ErrorReporter.tsx
    │   │   └── visual-edits/VisualEditsMessenger.tsx
    │   │
    │   └── page.tsx
    │       ├── components/sections/sidebar-navigation.tsx
    │       ├── components/sections/main-header.tsx
    │       ├── components/sections/news-feed.tsx
    │       ├── components/sections/analytics-sidebar.tsx
    │       └── components/sections/mobile-header.tsx
    │
    ├── components/
    │   │
    │   ├── ui/ (55+ composants Shadcn)
    │   │   ├── button.tsx
    │   │   │   ├── lib/utils.ts (cn)
    │   │   │   ├── @radix-ui/react-slot
    │   │   │   └── class-variance-authority
    │   │   │
    │   │   ├── card.tsx
    │   │   │   └── lib/utils.ts
    │   │   │
    │   │   ├── sidebar.tsx
    │   │   │   ├── lib/utils.ts
    │   │   │   ├── @radix-ui/react-*
    │   │   │   └── lucide-react
    │   │   │
    │   │   └── [50+ autres composants...]
    │   │       └── Même structure de dépendances
    │   │
    │   └── sections/
    │       ├── sidebar-navigation.tsx
    │       │   ├── React (useState)
    │       │   ├── next/link
    │       │   └── lucide-react
    │       │
    │       ├── main-header.tsx
    │       │   └── globals.css
    │       │
    │       ├── news-feed.tsx
    │       │   ├── lucide-react
    │       │   ├── components/ui/card.tsx
    │       │   └── components/ui/badge.tsx
    │       │
    │       ├── analytics-sidebar.tsx
    │       │   ├── recharts
    │       │   └── components/ui/card.tsx
    │       │
    │       ├── mobile-header.tsx
    │       │   ├── lib/hooks/use-mobile.tsx
    │       │   ├── components/ui/sheet.tsx
    │       │   └── lucide-react
    │       │
    │       └── bottom-auth-bar.tsx
    │           └── components/ui/button.tsx
    │
    └── lib/
        ├── utils.ts ⭐ (Utilisé par TOUS les composants UI)
        │   ├── clsx
        │   └── tailwind-merge
        │
        └── hooks/
            └── use-mobile.tsx
                └── React (useState, useEffect)
```

---

## 🛠️ Technologies utilisées

### Frontend Core
| Technologie | Version | Rôle |
|------------|---------|------|
| **Next.js** | 15.3.5 | Framework React avec App Router |
| **React** | 19.0.0 | Bibliothèque UI |
| **TypeScript** | 5.x | Typage statique |
| **Tailwind CSS** | 4.x | Framework CSS utilitaire |

### UI/UX
| Package | Description |
|---------|-------------|
| `@radix-ui/*` | Composants accessibles (20+ packages) |
| `lucide-react` | Icônes SVG |
| `framer-motion` | Animations |
| `recharts` | Graphiques et visualisations |
| `sonner` | Notifications toast |
| `vaul` | Drawer mobile |

### Utilitaires
| Package | Description |
|---------|-------------|
| `clsx` | Gestion conditionnelle des classes |
| `tailwind-merge` | Fusion intelligente classes Tailwind |
| `class-variance-authority` | Variants de composants |
| `zod` | Validation de schémas |
| `date-fns` | Manipulation de dates |

### Formulaires
| Package | Description |
|---------|-------------|
| `react-hook-form` | Gestion de formulaires |
| `@hookform/resolvers` | Résolveurs de validation |

### Authentification & Paiements (Préparés mais non utilisés)
| Package | Description |
|---------|-------------|
| `better-auth` | Système d'authentification |
| `stripe` | Paiements |
| `autumn-js` / `atmn` | Gestion abonnements |
| `bcrypt` | Hachage de mots de passe |

### Base de données (Préparée mais non utilisée)
| Package | Description |
|---------|-------------|
| `drizzle-orm` | ORM TypeScript |
| `drizzle-kit` | Migrations |
| `@libsql/client` | Client Turso/LibSQL |

### Dev Tools
| Package | Description |
|---------|-------------|
| `eslint` | Linting |
| `@tailwindcss/postcss` | Processing Tailwind |
| `tw-animate-css` | Animations Tailwind |

---

## 📦 Modules et packages détaillés

### Dépendances de production (dependencies)

<details>
<summary><strong>Voir les 80+ dépendances</strong></summary>

```json
{
  "@babel/parser": "^7.28.5",
  "@headlessui/react": "^2.2.9",
  "@heroicons/react": "^2.2.0",
  "@hookform/resolvers": "^5.1.1",
  "@libsql/client": "^0.15.15",
  "@number-flow/react": "^0.5.10",
  "@radix-ui/react-accordion": "^1.2.11",
  "@radix-ui/react-alert-dialog": "^1.1.14",
  "@radix-ui/react-aspect-ratio": "^1.1.7",
  "@radix-ui/react-avatar": "^1.1.10",
  "@radix-ui/react-checkbox": "^1.3.2",
  "@radix-ui/react-collapsible": "^1.1.11",
  "@radix-ui/react-context-menu": "^2.2.15",
  "@radix-ui/react-dialog": "^1.1.14",
  "@radix-ui/react-dropdown-menu": "^2.1.15",
  "@radix-ui/react-hover-card": "^1.1.14",
  "@radix-ui/react-label": "^2.1.7",
  "@radix-ui/react-menubar": "^1.1.15",
  "@radix-ui/react-navigation-menu": "^1.2.13",
  "@radix-ui/react-popover": "^1.1.14",
  "@radix-ui/react-progress": "^1.1.7",
  "@radix-ui/react-radio-group": "^1.3.7",
  "@radix-ui/react-scroll-area": "^1.2.9",
  "@radix-ui/react-select": "^2.2.5",
  "@radix-ui/react-separator": "^1.1.7",
  "@radix-ui/react-slider": "^1.3.5",
  "@radix-ui/react-slot": "^1.2.3",
  "@radix-ui/react-switch": "^1.2.5",
  "@radix-ui/react-tabs": "^1.1.12",
  "@radix-ui/react-toggle": "^1.1.9",
  "@radix-ui/react-toggle-group": "^1.1.10",
  "@radix-ui/react-tooltip": "^1.2.7",
  "@react-three/drei": "^10.4.4",
  "@react-three/fiber": "^9.0.0-alpha.8",
  "@tabler/icons-react": "^3.35.0",
  "@tailwindcss/typography": "^0.5.19",
  "@tsparticles/engine": "^3.8.1",
  "@tsparticles/react": "^3.0.0",
  "@tsparticles/slim": "^3.8.1",
  "atmn": "^0.0.28",
  "autumn-js": "^0.1.43",
  "bcrypt": "^6.0.0",
  "better-auth": "1.3.10",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "cmdk": "^1.1.1",
  "cobe": "^0.6.5",
  "date-fns": "^4.1.0",
  "dotted-map": "^2.2.3",
  "drizzle-kit": "^0.31.6",
  "drizzle-orm": "^0.44.7",
  "embla-carousel-auto-scroll": "^8.6.0",
  "embla-carousel-autoplay": "^8.6.0",
  "embla-carousel-react": "^8.6.0",
  "estree-walker": "2.0.2",
  "framer-motion": "^12.23.24",
  "input-otp": "^1.4.2",
  "lucide-react": "^0.552.0",
  "mini-svg-data-uri": "^1.4.4",
  "motion": "^12.23.24",
  "motion-dom": "^12.23.23",
  "next": "15.3.5",
  "next-themes": "^0.4.6",
  "qss": "^3.0.0",
  "react": "^19.0.0",
  "react-day-picker": "^9.8.0",
  "react-dom": "^19.0.0",
  "react-dropzone": "^14.3.8",
  "react-fast-marquee": "^1.6.5",
  "react-hook-form": "^7.60.0",
  "react-icons": "^5.5.0",
  "react-intersection-observer": "^10.0.0",
  "react-resizable-panels": "^3.0.3",
  "react-responsive-masonry": "^2.7.1",
  "react-syntax-highlighter": "^15.6.1",
  "react-wrap-balancer": "^1.1.1",
  "recharts": "^3.0.2",
  "simplex-noise": "^4.0.3",
  "sonner": "^2.0.6",
  "stripe": "^19.2.0",
  "swiper": "^12.0.3",
  "tailwind-merge": "^3.3.1",
  "tailwindcss-animate": "^1.0.7",
  "three": "^0.178.0",
  "three-globe": "^2.43.0",
  "vaul": "^1.1.2",
  "zod": "^4.1.12"
}
```

</details>

### Dépendances de développement (devDependencies)

```json
{
  "@eslint/eslintrc": "^3.3.1",
  "@tailwindcss/postcss": "^4",
  "@types/node": "^20",
  "@types/react": "^19",
  "@types/react-dom": "^19",
  "@types/react-syntax-highlighter": "^15.5.13",
  "@types/three": "^0.178.0",
  "eslint": "^9.38.0",
  "eslint-config-next": "^16.0.1",
  "tailwindcss": "^4",
  "tw-animate-css": "^1.4.0",
  "typescript": "^5"
}
```

---

## 🔄 Flux de données

### Rendu de la page d'accueil

```
1. Requête utilisateur: GET /
   │
   ↓
2. Next.js Router: Route vers src/app/page.tsx
   │
   ↓
3. layout.tsx (Server Component)
   ├─ Charge globals.css
   ├─ Insère ErrorReporter
   ├─ Insère VisualEditsMessenger
   └─ Charge Script externe
   │
   ↓
4. page.tsx (Server Component)
   ├─ Importe 5 composants sections
   └─ Structure layout responsive
   │
   ↓
5. Hydratation côté client des composants "use client"
   ├─ sidebar-navigation.tsx (état collapse)
   ├─ news-feed.tsx (articles)
   ├─ analytics-sidebar.tsx (graphiques)
   ├─ mobile-header.tsx (menu mobile)
   └─ bottom-auth-bar.tsx (boutons auth)
   │
   ↓
6. Rendu final dans le navigateur
```

---

## 🎨 Flux de styling

```
globals.css
├─ Import Tailwind CSS v4 base
├─ Import tw-animate-css
├─ Import Google Fonts (Inter)
├─ Définition @theme (design tokens)
│  ├─ --color-*
│  ├─ --radius-*
│  ├─ --animate-*
│  └─ --font-*
└─ Application @layer base

                ↓

Composants UI (src/components/ui/*)
├─ Utilisent className avec Tailwind
└─ Utilisent cn() de lib/utils.ts
   ├─ clsx (conditions)
   └─ tailwind-merge (fusion)

                ↓

Composants Sections (src/components/sections/*)
├─ Appliquent classes Tailwind
├─ Utilisent variables CSS (var(--color-*))
└─ Responsive breakpoints (md:, lg:)

                ↓

Page finale avec styling cohérent
```

---

## 🧪 Environnement de développement

### Scripts disponibles

```bash
# Développement avec Turbopack
npm run dev

# Build de production
npm run build

# Serveur de production
npm run start

# Linting
npm run lint
```

### Ports utilisés
- **Dev server:** http://localhost:3000 (par défaut)
- **Next.js:** Port configurable dans `next.config.ts`

---

## 🔐 Sécurité et bonnes pratiques

### Composants Server vs Client

**Server Components (par défaut):**
- `src/app/layout.tsx`
- `src/app/page.tsx`
- Optimisés pour SEO et performance

**Client Components ("use client"):**
- `src/components/sections/sidebar-navigation.tsx` (useState)
- `src/components/sections/news-feed.tsx` (interactivité)
- `src/components/sections/analytics-sidebar.tsx` (graphiques)
- `src/components/sections/mobile-header.tsx` (responsive)
- Tous les composants UI Shadcn

### TypeScript strict
- Mode strict activé dans `tsconfig.json`
- Typage complet de tous les composants
- Interfaces pour les props

---

## 📊 Métriques du projet

| Métrique | Valeur |
|----------|--------|
| **Composants UI** | 55+ |
| **Sections** | 6 |
| **Hooks custom** | 1 (use-mobile) |
| **Pages** | 1 (extensible) |
| **Scripts shell** | 12 |
| **Dépendances npm** | 85+ |
| **Taille estimée** | ~500MB (avec node_modules) |

---

## 🚀 Prochaines étapes suggérées

1. **Authentification:** Activer better-auth (déjà installé)
2. **Base de données:** Configurer Drizzle ORM + Turso
3. **API Routes:** Ajouter `/api/*` dans `src/app/api/`
4. **Pages additionnelles:** Créer routes dynamiques
5. **Tests:** Ajouter Jest/Vitest
6. **CI/CD:** Configurer déploiement automatique

---

## 📚 Ressources

- **Documentation Next.js:** https://nextjs.org/docs
- **Shadcn/UI:** https://ui.shadcn.com
- **Tailwind CSS v4:** https://tailwindcss.com
- **Radix UI:** https://radix-ui.com

---

## 👨‍💻 Maintenance

**Scripts de restauration disponibles dans `shell/`:**
- Permet de recréer tout le projet à partir de zéro
- Utile pour récupération en cas d'erreur
- Documentation complète dans `shell/README.md`

**Commande rapide:**
```bash
cd shell && bash restore-project.sh
```

---

*Document généré automatiquement - Architecture du projet Entropie*  
*Dernière mise à jour: 2025*
