
const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('.main-header');
const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('clicked');
    header.classList.toggle('header-click');
    hamburgerMenu.classList.toggle('menu-clicked');
});