# Vandit Shastri — Portfolio & Academic Dossier

A modern, interactive portfolio and academic dossier for **Vandit Shastri** (Machine Learning Engineer at Rootle, BTech Computer Science graduate from LJ University).

---

## 🚀 GitHub Pages Deployment ("Deploy from a branch")

This repository is configured for static hosting on GitHub Pages with full client routing and pre-rendered pages.

### Option A: Automatic Deployment via GitHub Actions (Recommended)
1. Push your changes to the `main` (or `master`) branch on GitHub.
2. The included GitHub Actions workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) will automatically build the static site and push the output to the **`gh-pages`** branch.
3. In your GitHub repository:
   - Go to **Settings** → **Pages**.
   - Under **Build and deployment**:
     - **Source**: Select **"Deploy from a branch"**.
     - **Branch**: Select **`gh-pages`** / folder **`/(root)`**.
   - Click **Save**.
4. Your portfolio will be live at `https://<your-username>.github.io/<repo-name>/`!

---

### Option B: Manual One-Command Deploy via CLI
If you want to deploy directly from your local terminal:

```sh
# 1. Build and push to gh-pages branch
npm run deploy
```

`npm run deploy` will automatically:
- Run `npm run build:static` (Vite build + static pre-rendering of all TanStack routes).
- Generate `.nojekyll` and `404.html` (SPA fallback).
- Publish the `./dist` folder to the `gh-pages` branch on GitHub.

---

## 💻 Local Development

```sh
# Install dependencies
npm install

# Start local development server
npm run dev

# Test static build export
npm run build:static
```

---

## 🛠️ Tech Stack & Features
- **Framework**: React 19, TanStack Router, TanStack Start
- **Styling**: Tailwind CSS v4, Vanilla design system, Frosted Glassmorphism
- **Animations**: Motion (Framer Motion), Interactive Neural Canvas, On-scroll Video & Frame Player
- **Interactive AI Shell**: Floating CLI terminal supporting quick reviewer queries (`research`, `skills`, `projects`, etc.)
- **GitHub API Integration**: Real-time project fetching from `@Technically1dit`
