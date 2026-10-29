# Sean Galant · Portfolio

Personal portfolio of Sean Galant, AI engineer. Built with Vite, React 18 and `motion`, with plain CSS and no UI framework.

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Updating content

Every fact on the site lives in **`src/data/content.js`**, and the instructions are at the top of that file. In short:

- **New job:** add it to the top of `roles` with `current: true`, and remove `current` from the old one. The hero plan's hubs update automatically.
- **New project:** add an object to `projects` and put its image in `public/images/projects/`. Set `featured: true` on the one that should lead. Use `imgFocus` (for example `"50% 60%"`) if the crop cuts off the subject.
- **New skill:** add it to a group in `skills`, spelled exactly as in a project's `tools`, so the skills map can link them.

Components never hardcode names, roles or counts, so the layout adapts to however many roles and projects there are.

## Code map

- `src/App.jsx`: page sections (navigation, hero, skills, about, work, contact).
- `src/Plan.jsx`: the animated hero plan (SVG).
- `src/styles.css`: all styles. Design tokens are custom properties at the top.
- `DESIGN.md` (local): the design system and its rules.
