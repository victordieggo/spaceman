/* =====================================================================
 * MOBILE NAVIGATION
 * ===================================================================*/

(function () {

  'use strict';

  let screenCover;
  const body = document.body;
  const mediumViewport = '840';
  const navIsActive = 'main-nav-is-active';
  const itemIsActive = 'menu-item-is-active';
  const nav = body.querySelector('.main-nav');
  const navBtn = nav.querySelector('.nav-btn');
  const parentItem = nav.querySelectorAll('.menu-item-has-children');

  function toggleScroll() {
    body.classList.toggle('nav-hide-overflow');
    if (nav.contains(screenCover)) {
      nav.removeChild(screenCover);
    } else {
      screenCover = document.createElement('div');
      screenCover.className = 'screen-cover';
      nav.appendChild(screenCover);
    }
  }

  function toggleExpanded(element) {
    const ariaExpanded = element.getAttribute('aria-expanded');
    element.setAttribute('aria-expanded', ariaExpanded === 'false' ? 'true' : 'false');
  }

  function toggleNavigation() {
    nav.classList.toggle(navIsActive);
    toggleExpanded(navBtn);
    toggleScroll();
  }

  function toggleSubmenu(element) {
    element.querySelector('a').addEventListener('click', function (event) {
      event.preventDefault();
      element.classList.toggle(itemIsActive);
      toggleExpanded(element);
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
        screenCover,
        navBtn
      ];
      if (type === 'click') {
        if (target === navBtn || target === screenCover) {
          toggleNavigation();
        }
      }
      Array.prototype.forEach.call(activeItems, function (activeItem) {
        if (type === 'click' && !activeItem.contains(target)) {
          const activeNav = nav.contains(screenCover);
          const browserWidth = window.innerWidth;
          const exceptions = clickExceptions.indexOf(target) === -1;
          if (browserWidth > mediumViewport || (browserWidth <= mediumViewport && exceptions && activeNav)) {
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
