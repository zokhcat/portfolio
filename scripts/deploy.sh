#!/usr/bin/env bash
# Usage: bun run deploy "commit message"
# Steps: commit (if dirty) + push + build + deploy to Cloudflare Pages.
set -euo pipefail

PROJECT_NAME="portfolio"
BRANCH="$(git rev-parse --abbrev-ref HEAD)"

# 1. Commit any local changes
if [ -n "$(git status --porcelain)" ]; then
  MSG="${1:-update $(date +%Y-%m-%d)}"
  echo "→ committing: $MSG"
  git add -A
  git commit -m "$MSG"
else
  echo "→ nothing to commit, working tree clean"
fi

# 2. Push to GitHub
echo "→ pushing to origin/$BRANCH"
git push origin "$BRANCH"

# 3. Build
echo "→ building"
bun run build

# 4. Deploy to Cloudflare Pages
echo "→ deploying to Cloudflare Pages ($PROJECT_NAME)"
bunx wrangler pages deploy dist --project-name="$PROJECT_NAME" --branch="$BRANCH"

echo "✓ done"
