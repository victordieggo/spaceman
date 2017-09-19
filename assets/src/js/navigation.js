/* =====================================================================
 * SPACEMAN MOBILE NAVIGATION
 * ===================================================================*/
/*global window, document*/

(function () {

    'use strict';

    var screenCover,
        navIsActive  = 'main-nav-is-active',
        itemIsActive = 'menu-item-is-active',
        hasChildren  = 'menu-item-has-children',
        body         = document.body,
        navBtn       = body.querySelector('.nav-btn'),
        nav          = body.querySelector('.main-nav'),
        parentItem   = body.querySelectorAll('.' + hasChildren);

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

    function toggleExpanded(element) {
        if (element.getAttribute('aria-expanded') === 'false') {
            element.setAttribute('aria-expanded', 'true');
        } else {
            element.setAttribute('aria-expanded', 'false');
        }
    }

    function mobileNavigation() {
        nav.classList.toggle(navIsActive);
        toggleExpanded(navBtn);
        lockScreen();
    }

    function toggleSubmenu(element) {
        element.querySelector('a').addEventListener('click', function (event) {
            event.preventDefault();
            if (window.innerWidth > 992) {
                var activeItem = nav.querySelector('.sub-menu').querySelector('.' + itemIsActive);
                if (activeItem && activeItem.contains(element) === false) {
                    activeItem.classList.remove(itemIsActive);
                    activeItem.querySelector('a').setAttribute('aria-expanded', 'false');
                }
            }
            element.classList.toggle(itemIsActive);
            toggleExpanded(this);
        });
    }

    function resizeFallback() {
        var cover = body.contains(screenCover),
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
                activeItems = nav.querySelectorAll('.' + itemIsActive);
            if (type === 'click') {
                if (target === navBtn || target === screenCover) {
                    mobileNavigation();
                }
            }
            if (window.innerWidth > 992) {
                Array.prototype.forEach.call(activeItems, function (activeItem) {
                    if (type === 'click') {
                        if (!activeItem.contains(target)) {
                            activeItem.classList.remove(itemIsActive);
                            toggleExpanded(activeItem);
                        }
                    }
                    if (type === 'keyup') {
                        if (key === 27 || (key === 9 && !activeItem.contains(onFocus))) {
                            activeItem.classList.remove(itemIsActive);
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
