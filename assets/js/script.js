const translations = {
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

        "project-4kids-title": "4Kids Store Website:",
        "project-4kids-desc": "Entwicklung einer <strong>responsiven</strong> Frontend-Website für 4KIDS, ein echtes Geschäft für Puppen und Haaraccessoires. Das Projekt verwandelt ein traditionelles lokales Unternehmen in ein modernes digitales Erlebnis mit Fokus auf Markenidentität, Produktpräsentation, <strong>benutzerfreundliches</strong> Design und wartbare Codestruktur. <strong>Von Grund auf</strong> mit HTML, CSS und JavaScript entwickelt, mit responsivem Design und strukturierter Projektarchitektur.",

        "project-taskflow-title": "To-Do-App (TaskFlow)",
        "project-taskflow-desc": "Eine <strong>vollständig responsive</strong> To-Do-Listen-App, entwickelt mit HTML, CSS und JavaScript, mit Fokus auf <strong>sauberes UI/UX</strong> und sinnvolles Aufgabenmanagement. Während der Entwicklung nutzte ich solide HTML/CSS/JS-Grundlagen, um Fehler zu beheben, die Logik zu strukturieren und die Funktionalität auf verschiedenen Geräten sicherzustellen. Zudem setzte ich KI-unterstützte Entwicklung ein — eine Fähigkeit, die ich gezielt durch einen <strong>Prompt-Engineering</strong>-Kurs trainiert habe —, um die Iteration zu beschleunigen, während ich die volle Kontrolle über Codequalität und Designentscheidungen behielt. Konsistenz im UI/UX hatte bei jedem Schritt <strong>Priorität</strong>, von Layout bis zu kleinen Interaktionsdetails.",

        "project-rock-title": "Schere, Stein, Papier – Spiel",
        "project-rock-desc": "Eine <strong>interaktive</strong> Frontend-Anwendung, entwickelt mit HTML, CSS und JavaScript. Ich habe ein <strong>responsives</strong> Spiel mit <strong>übersichtlicher Oberfläche, dynamischen Interaktionen und funktionaler Spiellogik</strong> entwickelt. Bei diesem Projekt lag mein Fokus auf <strong>strukturiertem Code</strong>, verbesserter <strong>Nutzererfahrung</strong> und der Umsetzung einer einfachen Idee in eine ansprechende Webanwendung.",

        "btn-view-project": "&#128073; Projekt ansehen",

        "resume-title": "Lebenslauf",
        "resume-highlights-title": "Kurzüberblick:",
        "resume-highlight-1": "3+ Frontend-Projekte von Grund auf entwickelt (HTML, CSS, JavaScript)",
        "resume-highlight-2": "Autodidaktischer Entwickler mit Zertifikaten in Linux, Python und ICDL",
        "resume-highlight-3": "Ausgeprägte Kommunikationsfähigkeiten — derzeit Studium im Bereich Englischunterricht",
        "resume-highlight-4": "Offen für freiberufliche und Teilzeit-Remote-Möglichkeiten",
        "btn-download-resume": "&#128073; Lebenslauf herunterladen (PDF)",

        "contact-title": "Kontakt",
        "contact-intro": "Bereit, Ideen zum Leben zu erwecken? Lass uns gemeinsam etwas Großartiges erschaffen! <br> <br> Melde dich jederzeit, ich freue mich von dir zu hören:",
        "contact-email-label": "E-Mail"
    }
};

function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        element.textContent = translations[lang][key];
    });
}

const langToggle = document.getElementById("lang-toggle");

langToggle.addEventListener("click", () => {
    setLanguage("de");
});

localStorage.setItem("language", "de");

const savedLanguage = localStorage.getItem("language") || "en";

const btn = document.getElementById('menu-button');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');

if (btn && overlay && menu) {
    btn.addEventListener('click', navToggle);
}

function navToggle() {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu');
}

// Automatically set the footer copyright year
const footerYear = document.getElementById('footer-year');
if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}
