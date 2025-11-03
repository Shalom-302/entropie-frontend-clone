#!/bin/bash

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$(dirname "$SCRIPT_DIR")")"

cd "$PROJECT_ROOT"

mkdir -p src/components/sections

cat > src/components/sections/main-header.tsx << 'EOF'
import React from 'react';

const MainHeader = () => {
  return (
    <header className="bg-background p-4 md:py-6 md:px-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold leading-tight text-foreground md:text-[28px] md:leading-[36px]">
          À la Une aujourd'hui
        </h1>
        <p className="text-xs text-muted-foreground md:text-sm">
          Actualités principales des 24 dernières heures.
        </p>
      </div>
    </header>
  );
};

export default MainHeader;
EOF
