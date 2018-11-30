/* =====================================================================
 * MAIN NAVIGATION
 * ===================================================================*/

(function (doc, win) {
  'use strict';

  const nav = doc.querySelector('.main-nav');
  if (!nav) return;

  let screenCover;
  const body = doc.body;
  const breakpoint = 839;
  const navAnimate = 'nav-animate';
  const navIsActive = 'main-nav-is-active';
  const itemIsActive = 'menu-item-is-active';
  const navBtn = nav.querySelector('.nav-btn');
  const parentItem = nav.querySelectorAll('.menu-item-has-children');
  const animationEvents = ['webkitAnimationEnd', 'animationend'];

  const toggleScroll = () => {
    body.classList.toggle('nav-hide-overflow');
    if (nav.contains(screenCover)) {
      screenCover.classList.add('screen-cover-fade-out');
      animationEvents.forEach((animationEvent) => {
        screenCover.addEventListener(animationEvent, () => nav.removeChild(screenCover));
      });
      return;
    }
    screenCover = doc.createElement('div');
    screenCover.className = 'screen-cover';
    screenCover.onclick = () => {};
    nav.appendChild(screenCover);
  };

  const toggleExpanded = (element) => {
    const ariaExpanded = element.getAttribute('aria-expanded');
    element.setAttribute('aria-expanded', ariaExpanded == 'false' ? 'true' : 'false');
  };

  const toggleNavigation = () => {
    if (nav.classList.contains(navAnimate)) return;
    nav.classList.add(navAnimate);
    nav.classList.toggle(navIsActive);
    animationEvents.forEach((animationEvent) => {
      nav.addEventListener(animationEvent, () => nav.classList.remove(navAnimate));
    });
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

  ['click', 'keyup'].forEach((eventType) => {
    doc.addEventListener(eventType, (event) => {
      const type = event.type;
      const key = event.keyCode;
      const target = event.target;
      const activeItems = nav.querySelectorAll('.' + itemIsActive);
      const closeActiveItem = (activeItem) => {
        activeItem.classList.remove(itemIsActive);
        toggleExpanded(activeItem.querySelector('a'));
      };
      if (type == 'click' && [navBtn, screenCover].indexOf(target) != -1) {
        toggleNavigation();
      }
      Array.prototype.forEach.call(activeItems, (activeItem) => {
        if (type == 'click' && !activeItem.contains(target)) {
          const activeNav = nav.contains(screenCover);
          const browserWidth = win.innerWidth;
          let exceptions = [
            nav.querySelector('.menu'),
            screenCover,
            navBtn
          ];
          exceptions = exceptions.indexOf(target) == -1;
          if (browserWidth > breakpoint || browserWidth <= breakpoint && exceptions && activeNav) {
            closeActiveItem(activeItem);
          }
        }
        if (type == 'keyup') {
          if (key == 27 || key == 9 && !activeItem.contains(doc.activeElement)) {
            closeActiveItem(activeItem);
          }
        }
      });
    });
  });

  Array.prototype.forEach.call(parentItem, (element) => toggleSubmenu(element));

}(document, window));
