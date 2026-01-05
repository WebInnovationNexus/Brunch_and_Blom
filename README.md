# Brunch & Blom — Website

**A small events & gallery site built with Vite, React, TypeScript and shadcn-ui.**

---

## 🚀 Project overview

This repository contains the frontend for the Brunch & Blom site — a simple event listing, event detail and gallery site. The project uses Vite for bundling, React + TypeScript for the app, Tailwind CSS for styling, and shadcn-ui components for the UI primitives.

---

## 📁 Folder structure

```
/ (project root)
├─ public/
│  ├─ robots.txt
│  └─ site.webmanifest
├─ src/
│  ├─ assets/                # static images and media
│  ├─ components/            # shared components (Header, Footer, EventCard, NavLink...)
│  ├─ components/ui/         # shadcn-style UI primitives
│  ├─ data/                  # seed data (events, gallery)
│  ├─ hooks/                 # custom hooks (e.g., use-mobile, use-toast)
│  ├─ lib/                   # utilities
│  └─ pages/                 # route pages (Home, Events, About, Booking...)
├─ index.html
├─ package.json
├─ tailwind.config.ts
├─ vite.config.ts
└─ README.md
```

> The most important code is in `src/` — add pages under `src/pages` and reusable UI in `src/components`.

---

## 💻 Requirements

- Node.js (recommended v18+)
- npm (or yarn/pnpm) — this project uses standard npm scripts (see `package.json`)
- (Optional) Bun can be used if you prefer — there is a `bun.lockb` file in the repo

---

## 🔧 Quick start

Clone the repository and run the development server:

```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_DIR>
npm install
npm run dev
```

Open http://localhost:5173 (or the address shown in your terminal).

### Available scripts (from `package.json`)

- `npm run dev` — start dev server (Vite)
- `npm run build` — create a production build
- `npm run build:dev` — build using development mode
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint

---

## 🧭 Development notes

- Routes are handled via `react-router-dom`. Add new pages in `src/pages` and register routes where appropriate.
- Event and gallery seed data live in `src/data/` (e.g. `events.ts`, `gallery.ts`) — update those to change content.
- Reusable UI components and shadcn-style primitives are under `src/components/ui/`.
- Tailwind is configured in `tailwind.config.ts` and styles are included via `index.css`.

---

## ✅ Linting & formatting

- ESLint config is included (`eslint.config.js`). Run `npm run lint` to check for issues.
- Add Prettier if desired — not included by default.

---

## 📦 Deployment

You can deploy the built `dist/` output to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc.):

```bash
npm run build
# then upload the produced `dist` folder to your host of choice
```

If deploying to Vercel, simply connect the repo and set the build command to `npm run build` and the output directory to `dist`.

---

## 🤝 Contributing

Contributions are welcome. Typical contribution flow:

1. Fork the repository
2. Create a branch for your feature (e.g., `feature/add-events-page`)
3. Implement changes and add tests where applicable
4. Run `npm run lint` and `npm run dev` to test locally
5. Open a pull request describing the change

Please add a `LICENSE` file to this repository if you intend to make the project open source.

---

## 🧑‍💻 Authors

**Shaun Makgopa** — powered by **Web Innovation Nexus**

Website: https://www.webinnovationnexus.com

---

## ❗ Troubleshooting & Tips

- If the dev server doesn't start: ensure another process isn't using the default port (5173). Change the port by setting the `PORT` env var (`PORT=3000 npm run dev`).
- If you get TypeScript errors: check `tsconfig.json` and ensure your editor/IDE is using the workspace TypeScript version.

---

## Acknowledgements

Built with Vite, React, TypeScript, Tailwind CSS and shadcn-ui component primitives.

---

If you'd like me to add a `LICENSE`, CI pipeline, or deployment workflow (e.g., Vercel/GitHub Actions), tell me which one and I can add it.
