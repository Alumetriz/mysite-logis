'use strict';

const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu-item');
const body = document.querySelector('body');
const bodyOverlay = document.querySelector('.body-overlay');

burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('active');
    menu.classList.toggle('active');
    bodyOverlay.classList.toggle('body-overlay-active');

    if (menu.classList.contains('active') && burgerMenu.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'visible';
    }
});

menuItem.forEach((item) => item.addEventListener('click', function () {
    burgerMenu.classList.remove('active');
    menu.classList.remove('active');
    bodyOverlay.classList.remove('body-overlay-active');

    if (menu.classList.contains('active') && burgerMenu.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'visible';
    }
}));