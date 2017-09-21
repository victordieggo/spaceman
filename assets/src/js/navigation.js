/* =====================================================================
 * SPACEMAN MOBILE NAVIGATION
 * ===================================================================*/
/*global window, document*/

(function () {

    'use strict';

    var screenCover,
        navIsActive  = 'main-nav-is-active',
        itemIsActive = 'menu-item-is-active',
        body         = document.body,
        navBtn       = body.querySelector('.nav-btn'),
        nav          = body.querySelector('.main-nav'),
        parentItem   = body.querySelectorAll('.menu-item-has-children');

    function lockScreen() {
        body.classList.toggle('hide-overflow');
        if (nav.contains(screenCover)) {
            nav.removeChild(screenCover);
        } else {
            screenCover = document.createElement('div');
            screenCover.className = 'screen-cover';
            nav.appendChild(screenCover);
        }
    }

    function toggleExpanded(element) {
        var ariaExpanded = element.getAttribute('aria-expanded');
        element.setAttribute('aria-expanded', ariaExpanded === 'false' ? 'true' : 'false');
    }

    function toggleNavigation() {
        nav.classList.toggle(navIsActive);
        toggleExpanded(navBtn);
        lockScreen();
    }

    function toggleSubmenu(element) {
        element.querySelector('a').addEventListener('click', function (event) {
            event.preventDefault();
            element.classList.toggle(itemIsActive);
            toggleExpanded(this);
        });
    }

    function resizeFallback() {
        var cover = nav.contains(screenCover),
            browserWidth = window.innerWidth;
        if (nav.classList.contains(navIsActive)) {
            if ((!cover && browserWidth <= 992) || (cover && browserWidth > 992)) {
                lockScreen();
                nav.click();
            }
        } else if (nav.querySelector('.' + itemIsActive) && browserWidth > 992) {
            nav.click();
        }
    }

    Array.prototype.forEach.call(['click', 'keyup'], function (event) {
        body.addEventListener(event, function (event) {
            var type = event.type,
                key = event.keyCode,
                target = event.target,
                onFocus = nav.querySelector(':focus'),
                activeItems = nav.querySelectorAll('.' + itemIsActive),
                closeActiveItem = function (activeItem) {
                    activeItem.classList.remove(itemIsActive);
                    toggleExpanded(activeItem.querySelector('a'));
                };
            if (type === 'click') {
                if (target === navBtn || target === screenCover) {
                    toggleNavigation();
                }
            }
            if (window.innerWidth > 992) {
                Array.prototype.forEach.call(activeItems, function (activeItem) {
                    if (type === 'click' && !activeItem.contains(target)) {
                        closeActiveItem(activeItem);
                    }
                    if (type === 'keyup') {
                        if (key === 27 || (key === 9 && !activeItem.contains(onFocus))) {
                            closeActiveItem(activeItem);
                        }
                    }
                });
            }
        });
    });

    Array.prototype.forEach.call(parentItem, function (element) {
        toggleSubmenu(element);
    });

    window.addEventListener('resize', resizeFallback);

}());
