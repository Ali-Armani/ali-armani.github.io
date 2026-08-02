
const btn = document.getElementById('menu-button');
const overlay = document.getElementById('overlay');

btn.addEventListener('click', navToggle);

function navToggle() {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
}
