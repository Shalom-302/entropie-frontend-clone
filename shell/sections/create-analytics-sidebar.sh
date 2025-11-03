#!/bin/bash

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$(dirname "$SCRIPT_DIR")")"

cd "$PROJECT_ROOT"

mkdir -p src/components/sections

cat > src/components/sections/analytics-sidebar.tsx << 'EOF'
import React from 'react';

const AnalyticsChart = () => {
  const width = 252;
  const height = 120;

  return (
    <div style={{ width, height }}>
      <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`}>
        <defs>
          <pattern id="light-grid" width="100%" height="24" patternUnits="userSpaceOnUse">
            <line
              x1="0"
              y1="24"
              x2={width}
              y2="24"
              stroke="hsl(var(--border))"
              strokeWidth="0.5"
              strokeOpacity="0.5"
            />
          </pattern>

          <linearGradient id="cyanBlue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-accent-cyan)" />
            <stop offset="100%" stopColor="var(--color-chart-1)" />
          </linearGradient>
          <linearGradient id="violetPink" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-accent-violet)" />
            <stop offset="100%" stopColor="var(--color-accent-pink)" />
          </linearGradient>

          <linearGradient id="cyanBlueArea" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-accent-cyan)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="var(--color-chart-1)" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="violetPinkArea" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-accent-violet)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="var(--color-accent-pink)" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        <rect width="100%" height="100%" fill="url(#light-grid)" />

        <path
          d={`M0,80 Q${width * 0.16},50 ${width * 0.33},65 T${width * 0.66},85 T${width},70`}
          fill="none"
          stroke="url(#cyanBlue)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d={`M0,80 Q${width * 0.16},50 ${width * 0.33},65 T${width * 0.66},85 T${width},70 L${width},${height} L0,${height} Z`}
          fill="url(#cyanBlueArea)"
        />

        <path
          d={`M0,70 Q${width * 0.16},90 ${width * 0.33},75 T${width * 0.66},55 T${width},60`}
          fill="none"
          stroke="url(#violetPink)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d={`M0,70 Q${width * 0.16},90 ${width * 0.33},75 T${width * 0.66},55 T${width},60 L${width},${height} L0,${height} Z`}
          fill="url(#violetPinkArea)"
        />
      </svg>
    </div>
  );
};

const AnalyticsSidebar = () => {
  return (
    <aside className="hidden xl:block fixed top-1/2 right-16 -translate-y-1/2 z-10 animate-in fade-in duration-500">
      <div className="w-[300px] rounded-2xl border bg-card p-6 shadow-sm">
        <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Articles analysés
        </h3>
        <p className="mt-2 text-5xl font-bold text-foreground">1999</p>
        <div className="mt-6">
          <AnalyticsChart />
        </div>
      </div>
    </aside>
  );
};

export default AnalyticsSidebar;
EOF
