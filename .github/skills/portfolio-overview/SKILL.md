---
name: portfolio-overview
description: "Generate a comprehensive documentation overview of Sean Galant's portfolio website. Use when: documenting the portfolio, onboarding contributors, summarizing the tech stack, listing projects and features, or creating a full project reference. Triggers: 'document portfolio', 'portfolio overview', 'project summary', 'tech stack summary'."
argument-hint: 'Optional: specify sections to focus on (e.g., "projects only", "tech stack", "full")'
---

# Portfolio Overview Generator

## Purpose

Produce a detailed, structured documentation file summarizing every aspect of Sean Galant's personal portfolio website. The output is saved to `documentations/PORTFOLIO_OVERVIEW.md`.

## When to Use

- Onboarding a new contributor to the project
- Creating or refreshing project documentation
- Summarizing the portfolio for a README or proposal
- Auditing the tech stack, features, or project listings
- Preparing a reference for future development

## Procedure

### Step 1 — Gather Context

Read the following files to collect up-to-date information:

| Category | Files to Read |
|----------|---------------|
| Owner & Bio | `src/components/Hero.jsx`, `src/components/About.jsx` |
| Navigation & Layout | `src/components/Navbar.jsx`, `src/App.jsx` |
| Projects | `src/components/Projects.jsx` |
| Skills & Tech | `src/components/Skills.jsx`, `src/utils/IconMapper.jsx` |
| Contact & Social | `src/components/Contact.jsx`, `src/components/Footer.jsx` |
| Dependencies | `package.json` |
| Build & Config | `vite.config.js`, `tailwind.config.js`, `postcss.config.js`, `eslint.config.js` |
| Styling | `src/index.css` |
| Entry Points | `index.html`, `src/main.jsx` |

### Step 2 — Extract Key Information

For each section below, extract the relevant details from the source files:

1. **Owner Profile** — Name, university, degree, bio, contact info, social links, resume link
2. **Site Sections** — Every section of the SPA (Navbar, Hero, Skills, About, Projects, Contact, Footer) with a summary of content and behavior
3. **Tech Stack** — All runtime dependencies, dev dependencies, build tools, CSS framework, animation libraries, UI component libraries
4. **Projects** — For each project: title, type (ML / Full-Stack / etc.), description, technologies used, links (live site, GitHub)
5. **Skills** — All technologies displayed in the skills carousel, grouped by category
6. **UI/UX Features** — Animations, responsive design patterns, glass morphism, gradient themes, scroll-triggered reveals, lazy loading
7. **Styling Architecture** — Tailwind config (custom colors, animations, keyframes), custom CSS classes, color palette, typography
8. **Build & Deployment** — Dev/build/lint commands, Vite config details, deployment platform, performance optimizations
9. **Utilities & Patterns** — Custom components (Reveal, IconMapper), code-splitting strategy, error boundaries

### Step 3 — Compile Documentation

Write the output to `documentations/PORTFOLIO_OVERVIEW.md` using the template in [./references/template.md](./references/template.md).

Ensure:
- Every project and skill is listed (cross-check against source)
- All dependency versions are current (from `package.json`)
- Links are accurate (verify against component source)
- Sections are complete — do not omit details

### Step 4 — Validate

- Confirm the documentation covers all 9 categories from Step 2
- Verify project count matches `Projects.jsx`
- Verify skill count matches `Skills.jsx`
- Check that the color palette matches `tailwind.config.js`
- Ensure no placeholder text remains

## Output

A single Markdown file at `documentations/PORTFOLIO_OVERVIEW.md` containing the full portfolio overview.
