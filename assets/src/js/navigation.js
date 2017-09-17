/* =====================================================================
 * SPACEMAN MOBILE NAVIGATION
 * ===================================================================*/
/*global window, document*/

(function () {

    'use strict';

    var screenCover,
        isActive    = 'menu-item-is-active',
        hasChildren = 'menu-item-has-children',
        body        = document.body,
        navBtn      = body.querySelector('.nav-btn'),
        nav         = body.querySelector('.main-nav'),
        parentItem  = body.querySelectorAll('.' + hasChildren);

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
                var activeItem = nav.querySelector('.sub-menu').querySelector('.' + isActive);
                if (activeItem && activeItem.contains(element) === false) {
                    activeItem.classList.remove(isActive);
                    activeItem.querySelector('a').setAttribute('aria-expanded', 'false');
                }
            }
            element.classList.toggle(isActive);
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

    function getParent(element, num) {
        var i;
        for (i = 0; i < num; i += 1) {
            element = element.parentElement;
        }
        return element;
    }

    Array.prototype.forEach.call(['click', 'keyup', 'keydown'], function (event) {
        body.addEventListener(event, function (event) {
            var target = event.target,
                key = event.keyCode,
                type = event.type,
                onFocus = nav.querySelector(':focus'),
                activeItems = nav.querySelectorAll('.' + isActive),
                previous,
                parent,
                menu;

            if (type === 'click') {
                if (target === navBtn || target === screenCover) {
                    mobileNavigation();
                }
            }
            Array.prototype.forEach.call(activeItems, function (activeItem) {
                if (type === 'click' && window.innerWidth > 992) {
                    if (!activeItem.contains(target)) {
                        activeItem.classList.remove(isActive);
                        activeItem.querySelector('a').setAttribute('aria-expanded', 'false');
                    }
                }
                if (type === 'keyup') {
                    if (key === 27 || (key === 9 && !activeItem.contains(onFocus))) {
                        activeItem.classList.remove(isActive);
                    }
                }
            });
            if (onFocus && type === 'keydown') {
                parent = getParent(onFocus, 1);
                menu = getParent(onFocus, 2);
                if (menu.classList.contains('menu') && parent.classList.contains(hasChildren)) {
                    if (key === 38 && parent.classList.contains(isActive)) {
                        event.preventDefault();
                        onFocus.click();
                    }
                    if (key === 40) {
                        event.preventDefault();
                        if (!parent.classList.contains(isActive)) {
                            onFocus.click();
                        } else {
                            onFocus = parent.querySelector('.sub-menu a');
                            onFocus.focus();
                        }
                    }
                }
                if (menu.classList.contains('sub-menu')) {
                    previous = function () {
                        onFocus = getParent(onFocus, 3).querySelector('a');
                        onFocus.click();
                        onFocus.focus();
                    };
                    if (key === 37) {
                        if (parent.classList.contains(isActive)) {
                            onFocus.click();
                        } else {
                            previous();
                        }
                    }
                    if (key === 38) {
                        if (parent.classList.contains(isActive)) {
                            onFocus.click();
                        }
                        if (parent.previousElementSibling !== null) {
                            parent.previousElementSibling.querySelector('a').focus();
                        } else if (getParent(onFocus, 3).classList.contains(isActive)) {
                            previous();
                        }
                    }
                    if (key === 39) {
                        event.preventDefault();
                        if (parent.classList.contains(hasChildren)) {
                            onFocus.click();
                            onFocus = onFocus.nextElementSibling.querySelector('a');
                            onFocus.focus();
                        }
                    }
                    if (key === 40) {
                        event.preventDefault();
                        if (parent.classList.contains(isActive)) {
                            onFocus.click();
                        }
                        if (parent.nextElementSibling !== null) {
                            parent.nextElementSibling.querySelector('a').focus();
                        }
                    }
                }
            }
        });
    });

    Array.prototype.forEach.call(parentItem, function (element) {
        toggleSubmenu(element);
    });

    window.addEventListener('resize', resizeFallback);

}());
