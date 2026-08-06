# Android by Doing

A static, exercise-first learning website for modern Android development with Kotlin and Jetpack Compose.

## Features

- 35 guided exercises across 10 levels
- Official Android, Kotlin, and Retrofit learning resources
- Search and level filters
- Incomplete-only filter
- Browser-based progress tracking with `localStorage`
- Light and dark themes
- 10 independent build challenges
- Responsive design for desktop and mobile

## Run locally

No build tools are required. Open `index.html` directly, or serve the folder locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a GitHub repository.
2. Upload `index.html`, `styles.css`, and `app.js` to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select your default branch and `/ (root)`, then save.

## Customize

Exercises and resources are stored near the top of `app.js`. Add or edit entries there; the page renders them automatically.


## Challenge pages

Each no-tutorial challenge links to a dedicated `challenge.html?id=...` brief with requirements, engineering guidance, and a visual product mockup.
