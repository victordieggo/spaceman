/* =====================================================================
 * MOBILE NAVIGATION
 * ===================================================================*/

(function () {

  'use strict';

  var screenCover;
  var navIsActive = 'main-nav-is-active';
  var itemIsActive = 'menu-item-is-active';
  var body = document.body;
  var navBtn = body.querySelector('.nav-btn');
  var nav = body.querySelector('.main-nav');
  var parentItem = body.querySelectorAll('.menu-item-has-children');

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
    var ariaExpanded = element.getAttribute('aria-expanded');
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
      var type = event.type;
      var key = event.keyCode;
      var target = event.target;
      var onFocus = nav.querySelector(':focus');
      var activeItems = nav.querySelectorAll('.' + itemIsActive);
      var closeActiveItem = function (activeItem) {
        activeItem.classList.remove(itemIsActive);
        toggleExpanded(activeItem.querySelector('a'));
      };
      var clickExceptions = [
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
          var activeNav = nav.contains(screenCover);
          var browserWidth = window.innerWidth;
          var exceptions = clickExceptions.indexOf(target) === -1;
          if (browserWidth > 992 || (browserWidth <= 992 && exceptions && activeNav)) {
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
