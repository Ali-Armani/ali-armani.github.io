# Ali Armani — Web Developer Portfolio

[![Live Site](https://img.shields.io/badge/live-site-2E8B57?style=flat-square)](https://ali-armani.github.io)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/license-MIT-lightgrey?style=flat-square)](LICENSE)

A personal portfolio site built from scratch with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools. Designed to showcase real, working projects and to double as a living record of front-end fundamentals: semantic markup, responsive layout, accessibility, and progressive enhancement.

**🔗 Live site:** [ali-armani.github.io](https://ali-armani.github.io)

---

## ✨ Overview

This repository contains the full source for my personal developer portfolio — a single-page site covering my background, skills, certifications, projects, resume, and contact information.

The project is intentionally framework-free. Every interaction (mobile navigation, language switching, smooth scroll, dynamic footer year) is implemented with plain JavaScript, which keeps the codebase small, fast, and easy to audit.

## 🧩 Features

- **Fully responsive layout** — tested and tuned across desktop, tablet, and mobile breakpoints
- **Accessible markup** — semantic HTML5, proper heading hierarchy, `aria-label`s on icon-only controls, `rel="noopener noreferrer"` on all external links
- **Bilingual UI (English / German)** — content is tagged with `data-i18n` keys and swapped at runtime via a small translation engine, with the selected language persisted in `localStorage`
- **Certificate verification links** — each completed certification links both to its original issuing platform and to a locally-hosted backup image, so credentials stay verifiable even if the issuing platform goes down
- **Smooth in-page navigation** — anchor-based routing with `scroll-behavior: smooth` and a floating back-to-top control
- **Mobile slide-out menu** — custom hamburger navigation with an overlay and scroll lock, no dependencies
- **Dark / light mode** *(in progress)*

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic structure, no framework) |
| Styling | CSS3 (custom properties / CSS variables, Flexbox, Grid, media queries) |
| Behavior | Vanilla JavaScript (ES6+, no dependencies) |
| Icons | Inline SVG (Simple Icons / Feather Icons, styled with `currentColor`) |
| Hosting | GitHub Pages |
| Version Control | Git |

No CSS or JS frameworks are used by design — the goal of this project is to demonstrate a solid grasp of core web fundamentals before reaching for abstractions.

## 📂 Project Structure

```
.
├── index.html              # Main page markup
├── assets/
│   ├── css/
│   │   └── style.css       # All styling, organized by section
│   ├── js/
│   │   └── script.js       # Mobile nav, i18n engine, footer year
│   ├── images/              # Logos, photos, certification badges
│   └── certificates/         # Backup certificate images
└── README.md
```

## 🚀 Getting Started

This is a static site with no build step or dependencies — clone it and open it directly.

```bash
git clone https://github.com/Ali-Armani/Ali-Armani.github.io.git
cd Ali-Armani.github.io
```

Then either:

- Open `index.html` directly in a browser, **or**
- Serve it locally for a closer-to-production experience:

```bash
npx serve .
```

## 📄 Sections

| Section | Description |
|---|---|
| **Hero** | Name, title, and primary call-to-action |
| **About** | Background, career transition story, and current focus |
| **Skills & Expertise** | Completed certifications (with verifiable links), skills currently being learned, soft skills, and spoken languages |
| **Projects** | Real, deployed projects — including a live e-commerce site built for an actual client |
| **Resume** | Downloadable PDF with quick highlights |
| **Contact** | Email, LinkedIn, GitHub, and Telegram |

## 🎯 Featured Projects

- **[4Kids Doll Shop](https://4kids-shop.pages.dev)** — A responsive e-commerce site built from scratch for a real retail client, with optimized image loading and UX-focused design.
- **[TaskFlow](https://ali-armani.github.io/taskflow-todo/)** — A fully responsive task management app with drag-and-drop, keyboard shortcuts, a command palette, and bilingual (EN/DE) UI.
- **Rock Paper Scissors** — An interactive browser game focused on clean state logic and UI feedback.

## 👤 About Me

I'm Ali Armani, a self-taught front-end developer based in Iran, currently completing a degree in English Language Teaching. Before moving into web development, I spent two years in retail — an experience that shaped how I approach problem-solving, communication, and working under pressure today.

I'm open to freelance work and part-time remote opportunities.

- 📧 [armani.ali@proton.me](mailto:armani.ali@proton.me)
- 💼 [LinkedIn](https://linkedin.com/in/aliarmani)
- 🐙 [GitHub](https://github.com/Ali-Armani)

## 📜 License

This project is open to viewing and learning from. If you'd like to reuse significant portions, please reach out first.

---

<p align="center">Built with HTML, CSS & JavaScript — no frameworks, no shortcuts.</p>
