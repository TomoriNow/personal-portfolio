# Sean Galant — Portfolio Overview

> Comprehensive documentation of the portfolio website. Last updated: April 29, 2026

## Table of Contents

- [Owner Profile](#owner-profile)
- [Site Architecture](#site-architecture)
- [Tech Stack](#tech-stack)
- [Projects](#projects)
- [Skills](#skills)
- [UI/UX Features](#uiux-features)
- [Styling Architecture](#styling-architecture)
- [Build & Deployment](#build--deployment)
- [Utilities & Patterns](#utilities--patterns)

---

## Owner Profile

| Field | Value |
|-------|-------|
| **Name** | Sean Galant |
| **University** | Australian National University (ANU) |
| **Year** | Fourth-year student |
| **Focus** | Computer Science — Machine Learning & Software Engineering |
| **Bio** | Computing student passionate about building innovative solutions in Machine Learning and Software Engineering. Strives for continuous improvement in developing projects related to software engineering and machine learning, while refining organizational and leadership capabilities as a results-oriented individual. |
| **Email** | m.seangalant@gmail.com |
| **Phone** | +61 0439-520-353 |
| **LinkedIn** | [linkedin.com/in/sean-galant-365113b0](https://www.linkedin.com/in/sean-galant-365113b0/) |
| **GitHub** | [github.com/TomoriNow](https://github.com/TomoriNow) |
| **Resume** | Available via Google Drive (linked in Navbar and Hero) |
| **Live Site** | [sean-galant.vercel.app](https://sean-galant.vercel.app) |

---

## Site Architecture

> Single-page application built with React 18 + Vite 6, deployed on Vercel.

### Sections

| Section | Component | Description |
|---------|-----------|-------------|
| **Navbar** | `Navbar.jsx` | Fixed top navigation with logo/branding, section links (About, Projects, Contact), Resume download button, and a mobile slide-out hamburger menu. |
| **Hero** | `Hero.jsx` | Landing section with profile image, name, animated typewriter title cycling through "CS Student" → "Fullstack Dev" → "ML Enthusiast", bio paragraph, and CTA buttons (Contact Me, Resume). |
| **Skills** | `Skills.jsx` | Horizontally scrolling infinite marquee showcasing 12 technologies with hover-to-pause behavior and gradient edge masks. |
| **About** | `About.jsx` | Professional background section with a photo, descriptive bio text, and 6 key experience/position highlights. |
| **Projects** | `Projects.jsx` | Grid of 6 featured projects, each with a screenshot image, type badge (ML / Full-Stack), tech stack icons, title, description, and action buttons (GitHub, Live Site). |
| **Contact** | `Contact.jsx` | Contact form powered by Getform (endpoint: `getform.io/f/awnnvygb`) with Name, Email, and Message fields, all required. Icons from Feather icon set. |
| **Footer** | `Footer.jsx` | Social media links (LinkedIn, GitHub, Email), contact details, and copyright notice. |

### Navigation & Scroll Behavior

- Navbar is fixed at the top with a dark glass-morphism background (`dark-950`)
- Section links use anchor-based smooth scrolling to `#about`, `#projects`, `#contact`
- Mobile menu is a slide-out panel toggled by a hamburger icon
- Resume button opens a Google Drive link in a new tab

### Lazy Loading Strategy

- `Skills`, `About`, `Projects`, `Contact`, and `Footer` are lazy-loaded via `React.lazy()` + `Suspense`
- A `SectionLoader` component serves as the fallback during async loads
- `Navbar` and `Hero` load eagerly (above-the-fold content)

---

## Tech Stack

### Runtime Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | 18.3.1 | UI library |
| `react-dom` | 18.3.1 | DOM rendering |
| `framer-motion` | 12.6.3 | Declarative animations and gestures |
| `motion` | 12.6.3 | Newer motion primitives |
| `@heroui/react` | 2.7.5 | HeroUI component library |
| `@heroui/card` | 2.2.15 | Card component from HeroUI |
| `react-icons` | 5.3.0 | Icon library (Feather, AI icon sets) |
| `react-type-animation` | 3.2.0 | Typewriter text effect in Hero |
| `react-fast-marquee` | 1.6.5 | Infinite scrolling marquee for Skills |
| `@vercel/analytics` | 1.5.0 | Vercel traffic analytics |

### Dev Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `vite` | 6.2.5 | Build tool & dev server |
| `@vitejs/plugin-react` | 4.3.3 | React Fast Refresh + JSX transform |
| `tailwindcss` | 3.4.15 | Utility-first CSS framework |
| `postcss` | 8.4.49 | CSS post-processing pipeline |
| `autoprefixer` | 10.4.20 | Automatic vendor prefixes |
| `eslint` | 9.13.0 | JavaScript/JSX linting |
| `eslint-plugin-react` | 7.37.2 | React-specific lint rules |
| `eslint-plugin-react-hooks` | 5.0.0 | Hooks rules enforcement |
| `eslint-plugin-react-refresh` | 0.4.14 | Fast Refresh compatibility checks |
| `@types/react` | 18.3.12 | TypeScript type definitions for React |
| `@types/react-dom` | 18.3.1 | TypeScript type definitions for React DOM |

---

## Projects

### 1. Self-Supervised Image Segmentation with Pre-trained VGG19 and U-Net

- **Type:** Machine Learning
- **Description:** CNN-based image segmentation of the John Curtin School of Medical Research at ANU using self-supervised learning with pre-trained VGG19 and U-Net architectures.
- **Technologies:** Python, scikit-learn, NumPy, PyTorch, Seaborn, OpenCV
- **Links:** GitHub ✓ | Live Site: Disabled
- **Image:** `/public/images/projects/` (segmentation project screenshot)

### 2. Microsoft Stock Price Prediction using LSTM

- **Type:** Machine Learning
- **Description:** Deep learning time-series prediction of Microsoft stock prices using LSTM (Long Short-Term Memory) neural networks.
- **Technologies:** Python, scikit-learn, NumPy, TensorFlow, Seaborn, Pandas
- **Links:** GitHub ✓ | Live Site: Disabled
- **Image:** `/public/images/projects/` (stock prediction screenshot)

### 3. PowerPlate

- **Type:** Full-Stack
- **Description:** AI-powered preventative healthcare platform designed to combat demotivation and health goal abandonment through intelligent meal and fitness planning.
- **Technologies:** Tailwind CSS, React, Vue, Vite
- **Links:** GitHub ✓ | Live Site: Disabled
- **Image:** `/public/images/projects/` (PowerPlate screenshot)

### 4. ANUISA Website

- **Type:** Full-Stack
- **Description:** Platform connecting Indonesian talent at the Australian National University to industry opportunities, fostering employability and community engagement.
- **Technologies:** Next.js, Tailwind CSS, TypeScript
- **Links:** GitHub ✓ | Live Site ✓
- **Image:** `/public/images/projects/` (ANUISA screenshot)

### 5. Sean's Portfolio

- **Type:** Full-Stack
- **Description:** This portfolio website — a personal showcase of projects, skills, and professional background.
- **Technologies:** Tailwind CSS, React, Vue, Vite
- **Links:** GitHub ✓ | Live Site ✓ ([sean-galant.vercel.app](https://sean-galant.vercel.app))
- **Image:** `/public/images/projects/` (portfolio screenshot)

### 6. TIME Space

- **Type:** Machine Learning / Full-Stack
- **Description:** Interactive web platform for the TIME Lab research cluster featuring a space-themed interface for exploring research outputs and visualizations.
- **Technologies:** Next.js, Tailwind CSS, TypeScript, Python, scikit-learn, NumPy, TensorFlow, OpenCV
- **Links:** GitHub ✓ | Live Site ✓
- **Image:** `/public/images/projects/` (TIME Space screenshot)

---

## Skills

### By Category

| Category | Technologies |
|----------|-------------|
| **Frontend** | HTML, CSS, JavaScript, Tailwind CSS, React, Flutter |
| **Backend** | Python, Java, Go, Django, Spring Boot |
| **Data Science** | NumPy, Pandas, scikit-learn, TensorFlow |
| **Databases** | PostgreSQL |

### Display Method

Skills are presented in an infinite horizontal scrolling marquee powered by `react-fast-marquee`. Each skill appears as a card with the technology's icon and name. The carousel features:
- Continuous auto-scroll animation
- Pause-on-hover interaction
- Gradient mask on left/right edges for a fade-in/fade-out effect
- CSS custom properties (`--quantity`, `--position`) controlling the infinite loop

### Icon Components

21+ custom SVG icon components written in TypeScript (`.tsx`) located in `src/icons/`. Each exports a React component accepting standard SVG props. Icons include: React, Tailwind, TypeScript, Vite, Vue, Java, Python, PostgreSQL, NumPy, Pandas, PyTorch, TensorFlow, scikit-learn, Seaborn, OpenCV, GitHub, LinkedIn, Instagram, Spotify, WhatsApp, and Directus.

---

## UI/UX Features

### Animations

| Animation | Duration | Description |
|-----------|----------|-------------|
| **Float** | 6s ease-in-out | Vertical bobbing effect (translateY ±20px) used on hero image |
| **Glow** | 2s ease-in-out | Pulsing box-shadow glow effect on interactive elements |
| **Shimmer** | 2s linear | Background position shift for loading/skeleton effects |
| **Pulse Slow** | 4s cubic-bezier | Slower variant of the default pulse animation |
| **Gradient** | 8s linear | Background gradient position cycling for animated gradient backgrounds |
| **Scroll Reveal** | Configurable | Framer Motion entrance animations triggered by scroll (up/down/left/right) |
| **Typewriter** | Continuous | Cycling text animation in Hero ("CS Student" → "Fullstack Dev" → "ML Enthusiast") |

### Responsive Design

- **Approach:** Mobile-first with Tailwind responsive prefixes
- **Breakpoints:** Default Tailwind breakpoints (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)
- **Adaptive Typography:** Heading sizes scale from `text-4xl` (mobile) to `text-7xl` (desktop)
- **Grid Layouts:** Single column on mobile → multi-column on desktop (e.g., projects grid: 1 → 2 → 3 columns)
- **Mobile Navigation:** Hamburger menu with slide-out panel replacing horizontal nav links
- **Images:** Responsive sizing with `object-cover` for consistent aspect ratios

### Glass Morphism

- `.glass` — Semi-transparent white background (`rgba(255,255,255,0.05)`) with `backdrop-blur` and subtle border
- `.glass-dark` — Dark variant (`rgba(17,24,39,0.6)`) with backdrop blur
- `.glass-card` — Gradient glass effect with rounded corners, border, and shadow

### Scroll-Triggered Reveals

The `Reveal` utility component wraps content sections and animates them into view using Framer Motion's `useInView` hook. Supports four directional variants (up, down, left, right) with a 20% viewport threshold, triggering once per page load.

---

## Styling Architecture

### Color Palette

| Token | Shade | Hex | Usage |
|-------|-------|-----|-------|
| **Primary** | 50 | `#ecfeff` | Light tints |
| **Primary** | 500 | `#06b6d4` | Main CTAs, glows, borders, accents |
| **Primary** | 900 | `#164e63` | Dark primary |
| **Accent** | 50 | `#eff6ff` | Light tints |
| **Accent** | 500 | `#3b82f6` | Secondary highlights, gradients |
| **Accent** | 900 | `#1e3a8a` | Dark accent |
| **Dark** | 50 | `#f8fafc` | Lightest dark-mode surface |
| **Dark** | 800 | `#1e293b` | Card backgrounds |
| **Dark** | 900 | `#0f172a` | Section backgrounds |
| **Dark** | 950 | `#020617` | Main body & navbar background |

### Custom CSS Classes (from `index.css`)

| Class | Description |
|-------|-------------|
| `.primary-color` | Static gradient text (primary → cyan → accent) |
| `.text-gradient` | Gradient text using `bg-clip: text` |
| `.text-gradient-animated` | Animated gradient with `background-size` shift |
| `.glass` | White semi-transparent glass effect |
| `.glass-dark` | Dark semi-transparent glass effect |
| `.glass-card` | Gradient glass card with border and rounded corners |
| `.gradient-border` | Gradient border using CSS mask technique |
| `.btn-primary` | Gradient CTA button with hover scale and glow |
| `.btn-outline` | Outlined button with hover fill effect |

### Tailwind Extensions (`tailwind.config.js`)

- **Custom Colors:** Primary (cyan 50–900), Accent (blue 50–900), Dark (neutral 50–950)
- **Custom Animations:** `float`, `glow`, `shimmer`, `pulse-slow`, `gradient`
- **Custom Keyframes:** Defined for each animation above
- **Custom Box Shadows:** `glow` variants with cyan tint
- **Background Utilities:** Radial gradient support

### Dynamic Background

The main body uses two radial gradients (cyan and blue at 0.05–0.08 opacity) positioned at different offsets with `background-attachment: fixed` for a subtle parallax effect. The dark overlay (`dark-950`) ensures text legibility.

### Custom Scrollbar

- Width: 8px
- Track: Gradient from cyan to blue
- Thumb: Dark background with rounded corners

---

## Build & Deployment

### Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Vite dev server (default: `localhost:5173`) |
| `npm run build` | Production build with esbuild minification |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint across the codebase |

### Vite Configuration (`vite.config.js`)

- **React Plugin:** `@vitejs/plugin-react` with Fast Refresh
- **Minifier:** esbuild (faster than terser)
- **Manual Chunks:** `react-vendor` (react + react-dom), `motion` (framer-motion + motion)
- **Build Target:** ESNext (modern browsers only)
- **Source Maps:** Disabled in production
- **Dependency Pre-bundling:** React, React-DOM, Motion

### Deployment

- **Platform:** Vercel
- **URL:** [sean-galant.vercel.app](https://sean-galant.vercel.app)
- **Analytics:** `@vercel/analytics` integrated in `main.jsx`

---

## Utilities & Patterns

### Reveal Component (`src/utils/Reveal.jsx`)

A reusable scroll-triggered animation wrapper built with Framer Motion. Features:
- Uses `useInView` hook with a `0.2` (20%) viewport threshold
- Supports four animation directions: up, down, left, right
- Fires once per page load (`once: true`)
- Wraps any child content with configurable entrance animations
- Used throughout the portfolio for staggered section reveals

### IconMapper (`src/utils/IconMapper.jsx`)

A utility that maps technology name strings to their corresponding React icon components. Features:
- Centralized registry of 21+ technologies
- Maps to both custom SVG icons (`src/icons/*.tsx`) and `react-icons` components
- Used in `Projects.jsx` to render tech stack badges dynamically
- Returns `null` for unrecognized technology names

### Performance Optimizations

| Optimization | Implementation |
|-------------|----------------|
| **Code Splitting** | `React.lazy()` for below-the-fold sections |
| **Suspense Fallback** | `SectionLoader` component during async loads |
| **Chunk Strategy** | Manual vendor chunks for React and Motion libraries |
| **CSS Purging** | Tailwind's built-in purge removes unused utilities |
| **Asset Optimization** | esbuild minification, no source maps in production |
| **Dependency Pre-bundling** | Vite pre-bundles React, React-DOM, Motion for faster dev starts |

---

## Summary Statistics

| Metric | Count |
|--------|-------|
| React Components | 7 (Navbar, Hero, Skills, About, Projects, Contact, Footer) |
| Utility Modules | 2 (Reveal, IconMapper) |
| Custom Icon Components | 21+ (TypeScript SVG components) |
| Skills Displayed | 12 technologies across 4 categories |
| Projects Showcased | 6 (3 ML, 2 Full-Stack, 1 hybrid) |
| Runtime Dependencies | 10 packages |
| Dev Dependencies | 11 packages |
