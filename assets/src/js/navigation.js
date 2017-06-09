/* =====================================================================
 * SPACEMAN MOBILE NAVIGATION
 * ===================================================================*/
/*global window, document*/

(function () {

    'use strict';

    var screenCover = document.querySelector('.screen-cover'),
        navWrapper  = document.querySelector('.main-nav-wrapper'),
        nav         = document.querySelector('.main-nav'),
        navBtn      = document.querySelector('.nav-btn'),
        page        = document.querySelector('html'),
        parentItem  = document.querySelectorAll('.menu-item-has-children');

    function mobileNavigation() {
        nav.classList.toggle('main-nav-is-active');
        navWrapper.classList.toggle('z-index-6');
        page.classList.toggle('hide-overflow');
        screenCover.classList.toggle('hide');
    }

    parentItem.forEach(function (element) {
        element.querySelector('a').addEventListener('click', function (event) {
            event.preventDefault();
        });
        element.addEventListener('click', function () {
            if (window.innerWidth <= 992) {
                this.classList.toggle('menu-item-is-active');
                this.querySelector('ul').addEventListener('click', function (event) {
                    event.stopPropagation();
                });
            }
        });
    });

    function resizeFallback() {
        if (nav.classList.contains('main-nav-is-active')) {
            if (window.innerWidth <= 992) {
                screenCover.classList.remove('hide');
                page.classList.add('hide-overflow');
                navWrapper.classList.add('z-index-6');
            } else {
                screenCover.classList.add('hide');
                page.classList.remove('hide-overflow');
                navWrapper.classList.remove('z-index-6');
            }
        }
    }

    navBtn.addEventListener('click', mobileNavigation);
    screenCover.addEventListener('click', mobileNavigation);
    window.addEventListener('resize', resizeFallback);

}());
