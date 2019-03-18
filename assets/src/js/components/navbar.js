/* =====================================================================
 * Navbar
 * =====================================================================
 * 1. Helpers
 * 3. Toggle Submenu
 * 4. Event Listener: click
 * 5. Event Listener: keyup
 * ===================================================================*/

(function (doc, win) {
  'use strict';

  const navBar = doc.querySelector('.navBar');
  if (!navBar) return;

  const isActive = 'is-active';
  const isAnimating = 'is-animating';
  const toggleClass = 'navBar-toggle';
  const animationEvents = ['webkitAnimationEnd', 'animationend'];

  /* ---------------------------------------------------------------------
   * 1. Helpers
   * -------------------------------------------------------------------*/

  const toggleExpanded = (element) => {
    const ariaExpanded = element.getAttribute('aria-expanded');
    if (!ariaExpanded) return;
    element.setAttribute('aria-expanded', ariaExpanded == 'false' ? 'true' : 'false');
  };

  const getActiveItems = (context) => {
    return context.querySelectorAll('.' + isActive);
  };

  const disableActiveItems = (element) => {
    Array.prototype.forEach.call(getActiveItems(element.parentNode), (activeItem) => {
      if (activeItem != element) {
        toggleSubmenu(activeItem);
      }
    });
  };

  /* ---------------------------------------------------------------------
   * 2. Toggle Navbar
   * -------------------------------------------------------------------*/

  const toggleNavbar = () => {
    if (navBar.classList.contains(isAnimating)) return;

    doc.body.classList.toggle('navBar-disableScroll');
    navBar.classList.add(isAnimating);
    navBar.classList.toggle(isActive);

    const overlayClass = 'navBar-overlay';
    const navOverlay = navBar.querySelector('.' + overlayClass);

    animationEvents.forEach((animationEvent) => {
      navBar.addEventListener(animationEvent, () => navBar.classList.remove(isAnimating));
      if (navOverlay) {
        navOverlay.addEventListener(animationEvent, () => navBar.removeChild(navOverlay));
      }
    });

    if (!navOverlay) {
      const newOverlay = doc.createElement('div');
      newOverlay.className = [overlayClass, toggleClass].join(' ');
      newOverlay.onclick = () => {};
      navBar.appendChild(newOverlay);
    }

    const triggers = doc.querySelectorAll('.' + toggleClass);
    Array.prototype.forEach.call(triggers, (trigger) => toggleExpanded(trigger));
  };

  /* ---------------------------------------------------------------------
   * 3. Toggle Submenu
   * -------------------------------------------------------------------*/

  const toggleSubmenu = (element) => {
    element.classList.toggle(isActive);
    toggleExpanded(element.firstElementChild);
  };

  /* ---------------------------------------------------------------------
   * 4. Event Listener: click
   * -------------------------------------------------------------------*/

  doc.addEventListener('click', (event) => {
    const target = event.target;
    const targetParent = target.parentNode;

    if (target.classList.contains(toggleClass)) {
      toggleNavbar();
    }

    if (targetParent.classList.contains('navBar-menuItem--hasChildren')) {
      event.preventDefault();
      toggleSubmenu(targetParent);
      disableActiveItems(targetParent);
      return;
    }

    if (win.innerWidth < 840) return;
    disableActiveItems(navBar);
  });

  /* ---------------------------------------------------------------------
   * 5. Event Listener: keyup
   * -------------------------------------------------------------------*/

  doc.addEventListener('keyup', (event) => {
    const key = event.keyCode;
    Array.prototype.forEach.call(getActiveItems(navBar), (activeItem) => {
      if (key == 27 || key == 9 && !activeItem.contains(event.target)) {
        toggleSubmenu(activeItem);
      }
    });
  });
}(document, window));
