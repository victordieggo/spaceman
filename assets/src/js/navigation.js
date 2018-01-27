/* =====================================================================
 * MOBILE NAVIGATION
 * ===================================================================*/

(function () {

  'use strict';

  let screenCover;
  const body = document.body;
  const mediumViewport = '992';
  const navIsActive = 'main-nav-is-active';
  const itemIsActive = 'menu-item-is-active';
  const nav = body.querySelector('.main-nav');
  const navBtn = nav.querySelector('.nav-btn');
  const parentItem = nav.querySelectorAll('.menu-item-has-children');

  const toggleScroll = () => {
    body.classList.toggle('nav-hide-overflow');
    if (nav.contains(screenCover)) {
      nav.removeChild(screenCover);
    } else {
      screenCover = document.createElement('div');
      screenCover.className = 'screen-cover';
      screenCover.onclick = () => {};
      nav.appendChild(screenCover);
    }
  };

  const toggleExpanded = (element) => {
    const ariaExpanded = element.getAttribute('aria-expanded');
    element.setAttribute('aria-expanded', ariaExpanded == 'false' ? 'true' : 'false');
  };

  const toggleNavigation = () => {
    nav.classList.toggle(navIsActive);
    toggleExpanded(navBtn);
    toggleScroll();
  };

  const toggleSubmenu = (element) => {
    const link = element.querySelector('a');
    link.addEventListener('click', (event) => {
      event.preventDefault();
      element.classList.toggle(itemIsActive);
      toggleExpanded(link);
    });
  };

  Array.prototype.forEach.call(['click', 'keyup'], (eventType) => {
    body.addEventListener(eventType, (event) => {
      const type = event.type;
      const key = event.keyCode;
      const target = event.target;
      const activeItems = nav.querySelectorAll('.' + itemIsActive);
      const closeActiveItem = (activeItem) => {
        activeItem.classList.remove(itemIsActive);
        toggleExpanded(activeItem.querySelector('a'));
      };
      if (type == 'click') {
        if (target == navBtn || target == screenCover) {
          toggleNavigation();
        }
      }
      Array.prototype.forEach.call(activeItems, (activeItem) => {
        if (type == 'click' && !activeItem.contains(target)) {
          const activeNav = nav.contains(screenCover);
          const browserWidth = window.innerWidth;
          let exceptions = [
            nav.querySelector('.menu'),
            screenCover,
            navBtn
          ];
          exceptions = exceptions.indexOf(target) == -1;
          if (browserWidth > mediumViewport || browserWidth <= mediumViewport && exceptions && activeNav) {
            closeActiveItem(activeItem);
          }
        }
        if (type == 'keyup') {
          if (key == 27 || key == 9 && !activeItem.contains(nav.querySelector(':focus'))) {
            closeActiveItem(activeItem);
          }
        }
      });
    });
  });

  Array.prototype.forEach.call(parentItem, (element) => toggleSubmenu(element));

}());
