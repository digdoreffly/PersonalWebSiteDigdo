# Digdo Reffly Nugroho — Portfolio

Personal portfolio website built with Vue 3, Vite, Vue Router, and plain CSS.

## Run

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Editing content

All text content (name, roles, about, skills, education, experience, projects,
certificates, contact links) lives in **`src/data/portfolio.js`**. Update that
file to change what's shown on the site — components only render this data.

## Replacing placeholder assets

- `public/cv.pdf` — placeholder CV, replace with the real PDF (keep the same filename, or update `personal.cvFile` in `src/data/portfolio.js`).
- `public/images/project-*.svg` — placeholder project thumbnails, replace with real screenshots (keep the same filenames, or update `image` in each project entry in `src/data/portfolio.js`).

## Structure

```
src/
├── components/     Navbar, Hero, Profile, Skills, Education, Experience,
│                   Projects, ProjectCard, Certificates, Contact, Footer
├── data/           portfolio.js — single source of truth for all content
├── directives/     reveal.js — IntersectionObserver-based scroll-reveal (v-reveal)
├── router/         index.js — single route + smooth-scroll to section hashes
├── views/          Home.vue — assembles all sections
├── App.vue
├── main.js
└── style.css       design tokens, layout, animation system
```
