export default {
  elements: {
    navBar: document.querySelector('.navBar'),
  },

  init() {
    if (!this.elements.navBar) return;
    this.handleClick();
    this.handleKeyup();
  },

  handleClick() {
    document.addEventListener('click', (event) => {
      const target = event.target;
      const targetParent = target.parentNode;

      if (target.classList.contains('navBar-toggle')) {
        this.toggleNavbar();
      }

      if (targetParent.classList.contains('navBar-menuItem--hasChildren')) {
        event.preventDefault();
        this.toggleSubmenu(targetParent);
        this.disableActiveItems(targetParent);
        return;
      }

      if (window.innerWidth >= 840) {
        this.disableActiveItems(this.elements.navBar);
      }
    });
  },

  handleKeyup() {
    document.addEventListener('keyup', (event) => {
      const key = event.key;
      this.getActiveItems(this.elements.navBar).forEach((activeItem) => {
        if (key == 'Escape' || key == 'Tab' && !activeItem.contains(event.target)) {
          this.toggleSubmenu(activeItem);
        }
      });
    });
  },

  toggleExpanded(element) {
    const ariaExpanded = element.getAttribute('aria-expanded');
    if (!ariaExpanded) return;
    element.setAttribute('aria-expanded', ariaExpanded == 'false' ? 'true' : 'false');
  },

  getActiveItems(context) {
    return context.querySelectorAll('.is-active');
  },

  disableActiveItems(element) {
    this.getActiveItems(element.parentNode).forEach(activeItem => {
      if (activeItem != element) {
        this.toggleSubmenu(activeItem);
      }
    });
  },

  toggleNavbar() {
    const navBar = this.elements.navBar;
    if (navBar.classList.contains('is-animating')) return;

    document.body.classList.toggle('navBar-disableScroll');
    navBar.classList.add('is-animating');
    navBar.classList.toggle('is-active');

    const overlayClass = 'navBar-overlay';
    const navOverlay = navBar.querySelector('.' + overlayClass);

    ['webkitAnimationEnd', 'animationend'].map(animationEvent => {
      navBar.addEventListener(animationEvent, () => navBar.classList.remove('is-animating'));
      if (navOverlay) {
        navOverlay.addEventListener(animationEvent, () => navBar.removeChild(navOverlay));
      }
    });

    if (!navOverlay) {
      const newOverlay = document.createElement('div');
      newOverlay.className = `${overlayClass} navBar-toggle`;
      newOverlay.onclick = () => { };
      navBar.appendChild(newOverlay);
    }

    const triggers = document.querySelectorAll('.navBar-toggle');
    triggers.forEach(trigger => this.toggleExpanded(trigger));
  },

  toggleSubmenu(element) {
    element.classList.toggle('is-active');
    this.toggleExpanded(element.firstElementChild);
  },
};
