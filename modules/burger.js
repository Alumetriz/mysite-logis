'use strict';

// const burgerMenu = document.querySelector('.burger-menu');
// const menu = document.querySelector('.menu');
// const menuItem = document.querySelectorAll('.menu-item');
// const body = document.querySelector('body');
// const bodyOverlay = document.querySelector('.body-overlay');
//
// burgerMenu.addEventListener('click', function () {
//     burgerMenu.classList.toggle('active');
//     menu.classList.toggle('active');
//     bodyOverlay.classList.toggle('body-overlay-active');
//
//     if (menu.classList.contains('active') && burgerMenu.classList.contains('active')) {
//         body.style.overflow = 'hidden';
//     } else {
//         body.style.overflow = 'visible';
//     }
// });
//
// menuItem.forEach((item) => item.addEventListener('click', function () {
//     burgerMenu.classList.remove('active');
//     menu.classList.remove('active');
//     bodyOverlay.classList.remove('body-overlay-active');
//
//     if (menu.classList.contains('active') && burgerMenu.classList.contains('active')) {
//         body.style.overflow = 'hidden';
//     } else {
//         body.style.overflow = 'visible';
//     }
// }));
//
// function hideMenu() {
//     burgerMenu.classList.remove('active');
//     menu.classList.remove('active');
//     bodyOverlay.classList.remove('body-overlay-active');
//     body.style.overflow = 'visible';
// }
//
// window.addEventListener('resize', function () {
//     if (document.documentElement.scrollWidth > 768) {
//         hideMenu();
//     }
// })
//
// bodyOverlay.addEventListener('click', function () {
//     hideMenu();
// })


export class BurgerMenu {
    constructor() {
        this.burgerMenu = document.querySelector('.burger-menu');
        this.menu = document.querySelector('.menu');
        this.menuItem = document.querySelectorAll('.menu-item');
        this.body = document.querySelector('body');
        this.bodyOverlay = document.querySelector('.body-overlay');
        this.init();
    }

    // метод для установки обработчиков событий
    init() {
        this.burgerMenu.addEventListener('click', () => {
            this.toggleMenu();
            this.toggleBodyOverflow();
        });

        this.menuItem.forEach((item) => item.addEventListener('click', () => {
            this.hideMenu();
        }));

        window.addEventListener('resize', () => {
            if (document.documentElement.scrollWidth > 768) {
                this.hideMenu();
            }
        });

        this.bodyOverlay.addEventListener('click', () => {
            this.hideMenu();
        });
    }

    toggleMenu() {
        this.burgerMenu.classList.toggle('active');
        this.menu.classList.toggle('active');
        this.bodyOverlay.classList.toggle('body-overlay-active');
    }

    toggleBodyOverflow() {
        if (this.menu.classList.contains('active') && this.burgerMenu.classList.contains('active')) {
            this.body.style.overflow = 'hidden';
        } else {
            this.body.style.overflow = 'visible';
        }
    }

    hideMenu() {
        this.burgerMenu.classList.remove('active');
        this.menu.classList.remove('active');
        this.bodyOverlay.classList.remove('body-overlay-active');
        this.body.style.overflow = 'visible';
    }
}

const burgerMenu = new BurgerMenu();

