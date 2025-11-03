#!/bin/bash

# Restauration des fichiers de configuration

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_ROOT"

echo "  ⚙️  Création de package.json..."
cat > package.json << 'EOF'
{
    "name": "app",
    "version": "0.1.0",
    "private": true,
    "scripts": {
        "dev": "next dev --turbopack",
        "build": "next build",
        "start": "next start",
        "lint": "next lint"
    },
    "dependencies": {
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
    },
    "devDependencies": {
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
}
EOF

echo "  ⚙️  Création de tsconfig.json..."
cat > tsconfig.json << 'EOF'
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": [
    "node_modules"
  ]
}
EOF

echo "  ⚙️  Création de next.config.ts..."
cat > next.config.ts << 'EOF'
import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  outputFileTracingRoot: path.resolve(__dirname, '../../'),
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [LOADER]
      }
    }
  }
};

export default nextConfig;
EOF

echo "  ⚙️  Création de components.json..."
cat > components.json << 'EOF'
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {}
}
EOF

echo "  ⚙️  Création de postcss.config.mjs..."
cat > postcss.config.mjs << 'EOF'
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
EOF

echo "  ⚙️  Création de eslint.config.mjs..."
cat > eslint.config.mjs << 'EOF'
import { FlatCompat } from '@eslint/eslintrc'
 
const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
})
 
const eslintConfig = [
  ...compat.config({
    extends: ['next'],
    plugins: ['import'],
  }),
  {
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-img-element': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'import/no-unresolved': 'error',
      'import/named': 'error',
      'import/default': 'error',
      'import/namespace': 'error',
      'import/no-absolute-path': 'error',
      'import/no-dynamic-require': 'error',
      'import/no-self-import': 'error',
      'import/no-cycle': 'error',
      'import/no-useless-path-segments': 'error',
    },
  },
]
 
export default eslintConfig
EOF

echo "  ⚙️  Création de .gitignore..."
cat > .gitignore << 'EOF'
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
EOF

echo "  ✅ Fichiers de configuration créés"
