/* =====================================================================
 * SPACEMAN MOBILE NAVIGATION
 * ===================================================================*/
/*global window, document*/

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

    function navigationSubmenu(element) {
        element.querySelector('a').addEventListener('click', function (event) {
            event.preventDefault();
        });
        element.addEventListener('click', function () {
            element.classList.toggle('menu-item-is-active');
            element.querySelector('ul').addEventListener('click', function (event) {
                event.stopPropagation();
            });
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

    body.addEventListener('click', function (event) {
        var target = event.target;
        if (target === navBtn || target === screenCover) {
            mobileNavigation();
        }
    });

    Array.prototype.forEach.call(parentItem, function (element) {
        navigationSubmenu(element);
    });

    window.addEventListener('resize', resizeFallback);

}());
