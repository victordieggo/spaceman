/* =====================================================================
 * SPACEMAN MOBILE NAVIGATION
 * ===================================================================*/
/*global window, document, console, Event*/

(function () {

    'use strict';

    var screenCover,
        body        = document.body,
        navBtn      = body.querySelector('.nav-btn'),
        nav         = body.querySelector('.main-nav'),
        parentItem  = body.querySelectorAll('.menu-item-has-children');

    function lockScreen() {
        body.classList.toggle('hide-overflow');
        if (body.contains(screenCover)) {
            body.removeChild(screenCover);
        } else {
            screenCover = document.createElement('div');
            screenCover.className = 'screen-cover';
            body.appendChild(screenCover);
        }
    }

    function mobileNavigation() {
        nav.classList.toggle('main-nav-is-active');
        lockScreen();
    }

    function toggleSubmenu(element) {
        element.querySelector('a').addEventListener('click', function (event) {
            event.preventDefault();
            if (window.innerWidth > 992) {
                var activeItem = nav.querySelector('.sub-menu').querySelector('.menu-item-is-active');
                if (activeItem && activeItem.contains(element) === false) {
                    activeItem.classList.remove('menu-item-is-active');
                    activeItem.querySelector('a').setAttribute('aria-expanded', 'false');
                }
            }
            element.classList.toggle('menu-item-is-active');
            if (this.getAttribute('aria-expanded') === 'false') {
                this.setAttribute('aria-expanded', 'true');
            } else {
                this.setAttribute('aria-expanded', 'false');
            }
        });
    }

    function resizeFallback() {
        var cover = body.contains(screenCover),
            browserWidth = window.innerWidth;
        if (nav.classList.contains('main-nav-is-active')) {
            if ((!cover && browserWidth <= 992) || (cover && browserWidth > 992)) {
                lockScreen();
            }
        }
    }

    Array.prototype.forEach.call(['click', 'keyup'], function (event) {
        body.addEventListener(event, function (event) {
            var target = event.target,
                key = event.keyCode,
                type = event.type,
                focusedElement = nav.querySelector(':focus'),
                activeItems = nav.querySelectorAll('.menu-item-is-active');
            if (type === 'click') {
                if (target === navBtn || target === screenCover) {
                    mobileNavigation();
                }
            }
            Array.prototype.forEach.call(activeItems, function (activeItem) {
                if (type === 'click' && window.innerWidth > 992) {
                    if (!activeItem.contains(target)) {
                        activeItem.classList.remove('menu-item-is-active');
                        activeItem.querySelector('a').setAttribute('aria-expanded', 'false');
                    }
                }
                if (type === 'keyup') {
                    if (key === 27 || (key === 9 && !activeItem.contains(focusedElement))) {
                        activeItem.classList.remove('menu-item-is-active');
                    }
                }
            });
        });
    });

    Array.prototype.forEach.call(parentItem, function (element) {
        toggleSubmenu(element);
    });

    window.addEventListener('resize', resizeFallback);

}());
