# Michigan Nature Sounds

A lightweight static web app that showcases Michigan wildlife with a simple sound-sampler interface. It is designed to run in GitHub Codespaces and deploy cleanly to GitHub Pages.

## Features

- Browse species by category
- Explore Michigan mammals, birds, and insects
- Read short educational descriptions for each animal
- Trigger browser-based, synthetic wildlife-inspired sound previews
- Deploy as a fully static site with no backend required

## Tech stack

- HTML
- CSS
- JavaScript

## Run locally

From the project root:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## GitHub Pages deployment

This repository is configured for GitHub Pages deployment from the repository root.

1. Push the project to GitHub.
2. Open the repository settings.
3. Enable GitHub Pages.
4. Set the source to GitHub Actions.
5. The workflow in [.github/workflows/pages.yml](.github/workflows/pages.yml) will publish the site automatically.

## GitHub Codespaces

The devcontainer configuration in [.devcontainer/devcontainer.json](.devcontainer/devcontainer.json) exposes port 8000 and launches a local static web server automatically, making it easy to preview the app in a browser while working in Codespaces.

## Project files

- [index.html](index.html) — page structure and content
- [styles.css](styles.css) — layout, theme, and responsive styling
- [app.js](app.js) — species list and sound playback logic
- [.devcontainer/devcontainer.json](.devcontainer/devcontainer.json) — Codespaces setup
- [.github/workflows/pages.yml](.github/workflows/pages.yml) — Pages publish workflow
