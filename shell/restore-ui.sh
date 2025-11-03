#!/bin/bash

# Restauration des composants UI (src/components/ui)
# Note: Ce script liste les composants UI mais ne les recrée pas car ils sont nombreux
# Vous pouvez les recréer via: npx shadcn@latest add [component-name]

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_ROOT"

echo "  🎨 Composants UI détectés:"
echo "     - accordion, alert-dialog, alert, aspect-ratio, avatar"
echo "     - badge, breadcrumb, button-group, button, calendar"
echo "     - card, carousel, chart, checkbox, collapsible"
echo "     - command, context-menu, dialog, drawer, dropdown-menu"
echo "     - empty, field, form, hover-card, input-group"
echo "     - input-otp, input, item, kbd, label"
echo "     - menubar, navigation-menu, pagination, popover, progress"
echo "     - radio-group, resizable, scroll-area, select, separator"
echo "     - sheet, sidebar, skeleton, slider, sonner"
echo "     - spinner, switch, table, tabs, textarea"
echo "     - toggle-group, toggle, tooltip"
echo ""
echo "  💡 Pour recréer les composants UI manuellement:"
echo "     npx shadcn@latest add [component-name]"
echo ""
echo "  ✅ Liste des composants UI affichée"
