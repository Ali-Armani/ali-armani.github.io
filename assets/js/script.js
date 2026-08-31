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
