'use strict';

class BurgerMenu {
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