const iconoMenu = document.querySelector('.burger');
const menu = document.querySelector('#menu');
const nav = document.querySelector('nav');

iconoMenu.addEventListener('click', (e) => {
    menu.classList.toggle('active-menu');
    nav.classList.toggle('no-scroll');
    
});