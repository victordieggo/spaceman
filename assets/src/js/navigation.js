/* =====================================================================
 * MOBILE NAVIGATION
 * ===================================================================*/

(function () {

  'use strict';

  const body = document.body;
  const mediumViewport = '992';
  const navIsActive = 'main-nav-is-active';
  const itemIsActive = 'menu-item-is-active';
  const nav = body.querySelector('.main-nav');
  const navBtn = nav.querySelector('.nav-btn');
  const parentItem = nav.querySelectorAll('.menu-item-has-children');

  function toggleExpanded(element) {
    const ariaExpanded = element.getAttribute('aria-expanded');
    element.setAttribute('aria-expanded', ariaExpanded === 'false' ? 'true' : 'false');
  }

  function toggleNavigation() {
    body.classList.toggle('nav-hide-overflow');
    nav.classList.toggle(navIsActive);
    toggleExpanded(navBtn);
  }

  function toggleSubmenu(element) {
    const link = element.querySelector('a');
    link.addEventListener('click', function (event) {
      event.preventDefault();
      element.classList.toggle(itemIsActive);
      toggleExpanded(link);
    });
  }

  Array.prototype.forEach.call(['click', 'keyup'], function (event) {
    body.addEventListener(event, function (event) {
      const type = event.type;
      const key = event.keyCode;
      const target = event.target;
      const onFocus = nav.querySelector(':focus');
      const activeItems = nav.querySelectorAll('.' + itemIsActive);
      const closeActiveItem = function (activeItem) {
        activeItem.classList.remove(itemIsActive);
        toggleExpanded(activeItem.querySelector('a'));
      };
      const clickExceptions = [
        nav.querySelector('.menu'),
        navBtn,
        nav
      ];
      if (type === 'click') {
        if (target === navBtn || target === nav) {
          toggleNavigation();
        }
      }
      Array.prototype.forEach.call(activeItems, function (activeItem) {
        if (type === 'click' && !activeItem.contains(target)) {
          const browserWidth = window.innerWidth;
          const exceptions = clickExceptions.indexOf(target) === -1;
          if (browserWidth > mediumViewport || (browserWidth <= mediumViewport && exceptions)) {
            closeActiveItem(activeItem);
          }
        }
        if (type === 'keyup') {
          if (key === 27 || (key === 9 && !activeItem.contains(onFocus))) {
            closeActiveItem(activeItem);
          }
        }
      });
    });
  });

  Array.prototype.forEach.call(parentItem, function (element) {
    toggleSubmenu(element);
  });

}());
