
const btn = document.getElementById('menu-button');

btn.addEventListener('click', navToggle);

function navToggle() {
    btn.classList.toggle('open');
}
