const translations = {
    en: {
        "nav-about": "About",
        "nav-projects": "Projects",
        "nav-resume": "Resume",
        "nav-certificates": "Certificates",
        "nav-softskills": "Soft Skills",
        "nav-languages": "Languages",
        "nav-contact": "Contact",

        "hero-subtitle": "Web Developer",
        "hero-cta": "Hire Me",

        "about-title": "About Me",
        "about-p1": "I'm Ali Armani, an aspiring Front-End Developer, open to remote collaboration with teams and clients worldwide. I build <strong>clean</strong>, <strong>responsive</strong>, and <strong>user-focused</strong> websites with attention to both functionality and visual detail.",
        "about-p2": "Before transitioning into web development, I spent two years in retail, where I learned to perform under pressure, collaborate effectively, and solve problems with a positive mindset. Today, I apply those skills to software development.",
        "about-p3": "I've built projects such as <a href=\"https://ali-armani.github.io/taskflow-todo/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"taskflow-intext-link\"><strong>TaskFlow</strong></a>, a fully-responsive and interactive <a href=\"https://ali-armani.github.io/taskflow-todo/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"taskflow-intext-link\"><strong>To-Do App</strong></a> that emphasizes premium <strong>design</strong> and <strong>UX</strong>, while strengthening my skills in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>Git</strong>, and <strong>Figma</strong>. I'm also completing a degree in English Language Teaching, which has strengthened my communication skills for working with international teams.",
        "about-p4": "I'm currently open to <strong>freelance</strong> and <strong>part-time remote</strong> opportunities, and I'd be happy to connect.",

        "skills-title": "Skills & Expertise",
        "certs-subtitle": "Completed Certifications:",
        "learning-subtitle": "Currently learning:",
        "softskills-subtitle": "Soft Skills:",
        "softskills-text": "Critical thinking, teamwork, problem-solving, a curious mindset, solution-oriented approach (rather than blame-focused), and a strong commitment to continuous learning and staying up-to-date with the latest technologies.",
        "languages-subtitle": "Languages:",
        "lang-english": "English (B2)",
        "lang-german": "German (A2)",

        "projects-title": "Projects:",

        "project-weather-forecast-title": "Weather Forecast App",
        "project-weather-forecast-desc": "A <strong>weather forecast</strong> web app that fetches real-time data through a custom <strong>serverless backend</strong> (Vercel <strong>API</strong> route), keeping the weather API key secure on the server instead of exposing it in the browser. Built with <strong>HTML, CSS, and JavaScript</strong>, using <strong>async/await</strong> and the <strong>Fetch API</strong> to retrieve and display temperature, humidity, wind speed, and a dynamic weather icon based on current conditions, with proper error handling for invalid city names.", 

        "project-4kids-title": "4Kids Store — Full-Stack E-Commerce Platform:",
        "project-4kids-desc": " Overview <br><br> 4Kids is a production e-commerce storefront that I designed and built for a real client: a children's gift and accessories shop with a catalogue of roughly 300 products. The project began as a static website and was later re-engineered as a type-safe, data-driven single-page application backed by a relational database. The interface is fully localized in Persian and built right-to-left (RTL) from the ground up. <br><br> Technology Stack: <br> - Front end: React, TypeScript, Vite, CSS Modules <br> - Back end and data: Supabase (PostgreSQL), Row Level Security (RLS), Supabase Storage <br> - Deployment and tooling: Vercel (continuous deployment), Git and GitHub, Conventional Commits <br><br> Key Contributions <br> - Architecture: Migrated a hard-coded product list to a PostgreSQL schema consumed through a typed data-access layer. Database rows are mapped to strongly typed domain models in TypeScript, and the catalogue is loaded once and shared through React Context. <br> - Data modelling and integrity: Designed the products schema with constraints, nullable ranking fields, and a deterministic ordering strategy (manual category rank, then newest first, with a stable tie-breaker). <br> - Security by design: Enabled Row Level Security on every table. Public clients have read-only access to products, while order tables are not directly accessible to anonymous users. Image uploads are restricted by file type and size at the storage-bucket level. Security headers are configured at the hosting layer. <br> - Category-driven home page: Built a section-based home page that groups products by category, with configurable category visibility and a responsive grid that adapts its layout across mobile, tablet, and desktop breakpoints. <br> - Pagination and routing: Implemented URL-based pagination with strict input validation, so malformed or out-of-range page parameters degrade gracefully. Page state is shareable, works with the browser's Back button, and updates the document title. <br> - Performance and accessibility: Lazy-loaded images, a mobile-first responsive layout, keyboard-navigable controls, and visible focus states. <br> - Search visibility: Per-page metadata management and sitemap planning for search engine indexing. <br> - Order system design: Designed and migrated the order and order-item schema with versioned SQL migrations. Order items store a price and name snapshot at purchase time, and guest checkout is supported through unguessable tracking tokens. <br> - Payment integration (in progress): Currently implementing a server-side payment flow with the ZarinPal gateway using Supabase Edge Functions. Prices and totals are calculated exclusively on the server, and payment verification is idempotent. <br><br> Engineering Practices <br> I follow an incremental, reviewable workflow: each change is a small, independently testable commit written in the Conventional Commits format. Changes are verified through a production build and manual testing across multiple viewport sizes before release. <br><br> What I Learned <br> This project taught me to treat the client as untrusted, to design the database before the interface, and to make deliberate trade-offs between simplicity and scalability, such as in-memory pagination for the current catalogue size versus server-side pagination as it grows.",

        "project-taskflow-title": "To-Do App (TaskFlow)",
        "project-taskflow-desc": "A <strong>fully responsive</strong> to-do list app built with HTML, CSS, and JavaScript, with a focus on <strong>clean UI/UX</strong> and task management that just makes sense. Throughout the build I leaned on solid HTML/CSS/JS fundamentals to debug issues, structure the logic, and make sure everything held up across different devices. I also used AI-assisted development — something I trained specifically through a <strong>prompt engineering</strong> course — to speed up iteration, while still staying fully in control of code quality and design decisions. UI/UX consistency was a <strong>priority at every step</strong>, from the layout down to the small interaction details.",

        "project-vocab-bridge-title": "Vocab Bridge App",
        "project-vocab-bridge-desc": "A <strong>fully-responsive</strong> bilingual Persian–English vocabulary flashcard app. Features flip-card <strong>animation</strong>, native pronunciation via the <strong>Web Speech API</strong>, <strong>RTL/LTR language switching</strong>, progress tracking with a <strong>mistake-review system</strong>, and <strong>WCAG-conscious accessibility</strong>.",
        
        "project-rock-title": "Rock Paper Scissors Game",
        "project-rock-desc": "An <strong>interactive</strong> front-end application built with HTML, CSS, and JavaScript. I developed a <strong>responsive</strong> game with a <strong>clean interface, dynamic interactions, and functional game logic</strong>. Through this project, I focused on writing <strong>organized code</strong>, improving <strong>user experience</strong>, and transforming a simple idea into an engaging web application.",

        "btn-view-project": "👉 View Project",

        "resume-title": "Resume",
        "resume-highlights-title": "Quick Highlights:",
        "resume-highlight-1": "5+ front-end projects built from scratch (HTML, CSS, JavaScript)",
        "resume-highlight-2": "Self-taught developer with certifications in Linux, Python, and ICDL",
        "resume-highlight-3": "Strong communication skills — currently completing a degree in English Language Teaching",
        "resume-highlight-4": "Open to freelance and part-time remote opportunities",
        "btn-download-resume": "👉 Download Resume (PDF)",

        "contact-title": "Contact",
        "contact-intro": "Ready to bring ideas to life? Let's create something amazing together! <br> <br> Reach out anytime, I'd love to hear from you:",
        "contact-email-label": "Email"
    },

    de: {
        "nav-about": "Über mich",
        "nav-projects": "Projekte",
        "nav-resume": "Lebenslauf",
        "nav-certificates": "Zertifikate",
        "nav-softskills": "Soft Skills",
        "nav-languages": "Sprachen",
        "nav-contact": "Kontakt",

        "hero-subtitle": "Web-Entwickler",
        "hero-cta": "Kontaktieren",

        "about-title": "Über mich",
        "about-p1": "Ich bin Ali Armani, ein angehender Frontend-Entwickler, offen für die Remote-Zusammenarbeit mit Teams und Kunden weltweit. Ich entwickle <strong>saubere</strong>, <strong>responsive</strong> und <strong>nutzerorientierte</strong> Websites mit Liebe zum Detail, sowohl funktional als auch visuell.",
        "about-p2": "Bevor ich in die Webentwicklung wechselte, habe ich zwei Jahre im Einzelhandel gearbeitet. Dort habe ich gelernt, unter Druck zu arbeiten, effektiv im Team zu agieren und Probleme mit einer positiven Einstellung zu lösen. Diese Fähigkeiten wende ich heute in der Softwareentwicklung an.",
        "about-p3": "Ich habe Projekte wie <a href=\"https://ali-armani.github.io/taskflow-todo/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"taskflow-intext-link\"><strong>TaskFlow</strong></a> entwickelt, eine vollständig responsive und interaktive <a href=\"https://ali-armani.github.io/taskflow-todo/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"taskflow-intext-link\"><strong>To-Do-App</strong></a>, die Wert auf hochwertiges <strong>Design</strong> und <strong>UX</strong> legt. Dabei habe ich meine Kenntnisse in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>Git</strong> und <strong>Figma</strong> vertieft. Außerdem absolviere ich ein Studium im Bereich Englischunterricht, das meine Kommunikationsfähigkeiten für die Arbeit mit internationalen Teams gestärkt hat.",
        "about-p4": "Ich bin derzeit offen für <strong>freiberufliche</strong> und <strong>Teilzeit-Remote</strong>-Möglichkeiten und freue mich über eine Kontaktaufnahme.",

        "skills-title": "Fähigkeiten & Expertise",
        "certs-subtitle": "Abgeschlossene Zertifikate:",
        "learning-subtitle": "Aktuell am Lernen:",
        "softskills-subtitle": "Soft Skills:",
        "softskills-text": "Kritisches Denken, Teamarbeit, Problemlösungskompetenz, eine neugierige Denkweise, ein lösungsorientierter Ansatz (statt Schuldzuweisungen) sowie ein starkes Engagement für kontinuierliches Lernen und den Anschluss an aktuelle Technologien.",
        "languages-subtitle": "Sprachen:",
        "lang-english": "Englisch (B2)",
        "lang-german": "Deutsch (A2)",

        "projects-title": "Projekte:",

        "project-weather-forecast-title": "Wettervorhersage-App",
        "project-weather-forecast-desc": "Eine <strong>Wettervorhersage</strong>-Webanwendung, die Echtzeitdaten über ein eigenes <strong>serverloses Backend</strong> (Vercel-<strong>API</strong>-Route) abruft und so den Wetter-API-Schlüssel serverseitig schützt, anstatt ihn im Browser offenzulegen. Entwickelt mit <strong>HTML, CSS und JavaScript</strong>, unter Verwendung von <strong>async/await</strong> und der <strong>Fetch-API</strong>, um Temperatur, Luftfeuchtigkeit, Windgeschwindigkeit und ein dynamisches Wettersymbol je nach aktuellen Bedingungen anzuzeigen, inklusive Fehlerbehandlung bei ungültigen Städtenamen.",

        "project-4kids-title": "4Kids Store Website:",
        "project-4kids-desc": "Entwicklung einer <strong>responsiven</strong> Frontend-Website für 4KIDS, ein echtes Geschäft für Puppen und Haaraccessoires. Das Projekt verwandelt ein traditionelles lokales Unternehmen in ein modernes digitales Erlebnis mit Fokus auf Markenidentität, Produktpräsentation, <strong>benutzerfreundliches</strong> Design und wartbare Codestruktur. <strong>Von Grund auf</strong> mit HTML, CSS und JavaScript entwickelt, mit responsivem Design und strukturierter Projektarchitektur.",

        "project-taskflow-title": "To-Do-App (TaskFlow)",
        "project-taskflow-desc": "Eine <strong>vollständig responsive</strong> To-Do-Listen-App, entwickelt mit HTML, CSS und JavaScript, mit Fokus auf <strong>sauberes UI/UX</strong> und sinnvolles Aufgabenmanagement. Während der Entwicklung nutzte ich solide HTML/CSS/JS-Grundlagen, um Fehler zu beheben, die Logik zu strukturieren und die Funktionalität auf verschiedenen Geräten sicherzustellen. Zudem setzte ich KI-unterstützte Entwicklung ein — eine Fähigkeit, die ich gezielt durch einen <strong>Prompt-Engineering</strong>-Kurs trainiert habe —, um die Iteration zu beschleunigen, während ich die volle Kontrolle über Codequalität und Designentscheidungen behielt. Konsistenz im UI/UX hatte bei jedem Schritt <strong>Priorität</strong>, von Layout bis zu kleinen Interaktionsdetails.",

        "project-vocab-bridge-title": "Vocab-Bridge-App",
        "project-vocab-bridge-desc" : "Eine <strong>vollständig responsive</strong> zweisprachige Persisch–Englisch-Vokabelkarten-App. Sie bietet eine Flipkarten-<strong>Animation</strong>, native Aussprache über die <strong>Web Speech API</strong>, eine <strong>RTL-/LTR-Sprachumschaltung</strong>, eine Fortschrittsverfolgung mit einem <strong>Fehler-Review-System</strong> sowie eine <strong>WCAG-bewusste Barrierefreiheit</strong>.",
        
        "project-rock-title": "Schere, Stein, Papier – Spiel",
        "project-rock-desc": "Eine <strong>interaktive</strong> Frontend-Anwendung, entwickelt mit HTML, CSS und JavaScript. Ich habe ein <strong>responsives</strong> Spiel mit <strong>übersichtlicher Oberfläche, dynamischen Interaktionen und funktionaler Spiellogik</strong> entwickelt. Bei diesem Projekt lag mein Fokus auf <strong>strukturiertem Code</strong>, verbesserter <strong>Nutzererfahrung</strong> und der Umsetzung einer einfachen Idee in eine ansprechende Webanwendung.",

        "btn-view-project": "👉 Projekt ansehen",

        "resume-title": "Lebenslauf",
        "resume-highlights-title": "Kurzüberblick:",
        "resume-highlight-1": "5+ Frontend-Projekte von Grund auf entwickelt (HTML, CSS, JavaScript)",
        "resume-highlight-2": "Autodidaktischer Entwickler mit Zertifikaten in Linux, Python und ICDL",
        "resume-highlight-3": "Ausgeprägte Kommunikationsfähigkeiten — derzeit Studium im Bereich Englischunterricht",
        "resume-highlight-4": "Offen für freiberufliche und Teilzeit-Remote-Möglichkeiten",
        "btn-download-resume": "👉 Lebenslauf herunterladen (PDF)",

        "contact-title": "Kontakt",
        "contact-intro": "Bereit, Ideen zum Leben zu erwecken? Lass uns gemeinsam etwas Großartiges erschaffen! <br> <br> Melde dich jederzeit, ich freue mich von dir zu hören:",
        "contact-email-label": "E-Mail"
    }
};

function setLanguage(lang) {
    // Update all elements that have data-i18n
    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        if (translations[lang] && translations[lang][key] !== undefined) {
            // Use innerHTML so that <strong>, <a>, <br> etc. are preserved
            element.innerHTML = translations[lang][key];
        }
    });

    // Update the language toggle button text + aria-label
    const langToggle = document.getElementById("lang-toggle");
    if (langToggle) {
        if (lang === "de") {
            langToggle.textContent = "EN";
            langToggle.setAttribute("aria-label", "Switch language to English");
        } else {
            langToggle.textContent = "DE";
            langToggle.setAttribute("aria-label", "Switch language to German");
        }
    }

    // Persist the choice
    localStorage.setItem("language", lang);
}

// ----- Language toggle logic -----
const langToggle = document.getElementById("lang-toggle");
let currentLang = localStorage.getItem("language") || "en";

// Apply saved (or default) language on page load
setLanguage(currentLang);

if (langToggle) {
    langToggle.addEventListener("click", () => {
        // Toggle between en ↔ de
        currentLang = currentLang === "en" ? "de" : "en";
        setLanguage(currentLang);
    });
}

// ----- Mobile menu -----
const btn = document.getElementById("menu-button");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("mobile-menu");

if (btn && overlay && menu) {
    btn.addEventListener("click", navToggle);
}

function navToggle() {
    btn.classList.toggle("open");
    overlay.classList.toggle("overlay-show");
    document.body.classList.toggle("stop-scrolling");
    menu.classList.toggle("show-menu");
}

// Automatically set the footer copyright year
const footerYear = document.getElementById("footer-year");
if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}
