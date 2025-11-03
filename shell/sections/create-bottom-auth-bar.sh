#!/bin/bash

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$(dirname "$SCRIPT_DIR")")"

cd "$PROJECT_ROOT"

mkdir -p src/components/sections

cat > src/components/sections/bottom-auth-bar.tsx << 'EOF'
const BottomAuthBar = () => {
  return (
    <div className="p-4 group-data-[collapsible=icon]:hidden">
      <div className="flex flex-col gap-2">
        <a
          href="#"
          className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary py-3 px-6 text-sm font-medium text-primary-foreground transition-colors duration-200 ease-in-out hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        >
          Inscription
        </a>
        <a
          href="#"
          className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-lg border border-input bg-transparent py-3 px-6 text-sm font-medium text-foreground transition-colors duration-200 ease-in-out hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        >
          Connexion
        </a>
      </div>
    </div>
  );
};

export default BottomAuthBar;
EOF
