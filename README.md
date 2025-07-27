# Modern Construction Portfolio Website

A professional, animated portfolio website for a construction business built with Astro, Tailwind CSS, and Framer Motion.

## 🏗️ Features

- **Modern Design**: Clean, professional construction-themed design
- **Mobile-First**: Fully responsive across all devices
- **Animated**: Smooth animations powered by Framer Motion
- **Fast**: Static site generation with Astro for optimal performance
- **SEO Optimized**: Built-in SEO best practices
- **Accessibility**: ARIA-compliant and keyboard navigation ready

## 🎨 Design System

- **Primary Colors**: Yellow (#FBBF24, #F59E0B)
- **Secondary Colors**: Dark Gray (#374151, #1F2937)
- **Accent**: Black (#000000)
- **Typography**: Inter & Poppins fonts
- **Components**: Modular, reusable component architecture

## 🚀 Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navigation.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Services.astro
│   │   ├── Projects.astro
│   │   └── Contact.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🛠️ Tech Stack

- **[Astro](https://astro.build/)** - Static site generator
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[React](https://reactjs.org/)** - Interactive components

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
