# Jaffna Food Guide

A complete, responsive, mobile-first static website for discovering restaurants, cafes, street food, reviews and food blogs in Jaffna, Sri Lanka. Built with plain HTML5, CSS3 and vanilla JavaScript — no frameworks, no build step.

## Project Structure

```
Jaffna-Food-Guide/
├── index.html               # Home page
├── restaurants.html         # Restaurant listing page (search + filter)
├── restaurant-detail.html   # Restaurant detail page (menu, map, contact)
├── cafes.html                # Cafe listing page
├── street-food.html          # Street food page
├── reviews.html               # Reviews page + review form
├── blogs.html                  # Food blog page
├── css/
│   └── style.css             # All styles (design tokens, components, responsive)
├── js/
│   └── script.js             # Data, navigation, search, filtering, forms
├── images/                   # Placeholder SVG images (swap with real photos)
└── README.md
```

## Features

- Mobile-first responsive layout (works from 320px phones to large desktops)
- Sticky, collapsible navigation with active-page highlighting
- Home page hero with search bar, categories, featured restaurants/cafes, street food, reviews and blog previews
- Restaurant listing with live search and category filter chips
- Restaurant detail page with menu tabs, star ratings, image gallery, Google Maps button and WhatsApp contact button
- Cafe page with menu and reviews
- Street food page with price ranges and tag filtering
- Reviews page with an interactive star-rating submission form
- Food blog page with featured article and article grid
- Smooth hover animations, rounded cards, and a floating WhatsApp button
- No external frameworks — only Google Fonts (Fraunces + Work Sans) loaded via CDN

## Run Locally

You don't need a build step, but browsers restrict `fetch`/module features on `file://`, so serve the folder with any simple local server:

**Option 1 — Python (built into most systems):**
```bash
cd Jaffna-Food-Guide
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

**Option 2 — VS Code:**
Install the "Live Server" extension, right-click `index.html`, and choose "Open with Live Server".

**Option 3 — Just open the file:**
Double-clicking `index.html` also works for browsing, since the site uses no server-side code.

## Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `jaffna-food-guide`).
2. Push this project to the repository root:
   ```bash
   cd Jaffna-Food-Guide
   git init
   git add .
   git commit -m "Initial commit: Jaffna Food Guide"
   git branch -M main
   git remote add origin https://github.com/<your-username>/jaffna-food-guide.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch".
5. Set **Branch** to `main` and folder to `/ (root)`, then click **Save**.
6. After a minute, your site will be live at:
   `https://<your-username>.github.io/jaffna-food-guide/`

## Customizing

- **Real photos:** replace the SVG placeholders in `images/` with real JPG/PNG/WebP photos (keep the same filenames, or update the `src`/data references in the HTML and `js/script.js`).
- **Restaurant data:** all restaurant, cafe and street food info lives in the `RESTAURANTS`, `CAFES` and `STREET_FOODS` arrays at the top of `js/script.js` — edit these to add real listings.
- **Contact numbers:** update the WhatsApp numbers (`phone` fields in `js/script.js`, and the floating WhatsApp button `href` in each HTML file).
- **Colors/fonts:** all design tokens (colors, radius, shadows) are CSS custom properties at the top of `css/style.css` under `:root`.
