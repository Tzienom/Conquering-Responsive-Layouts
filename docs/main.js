const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav__block');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-visible');
});