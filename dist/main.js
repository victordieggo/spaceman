const n = {
  elements: {
    navBar: document.querySelector(".navBar")
  },
  init() {
    this.elements.navBar && (this.handleClick(), this.handleKeyup());
  },
  handleClick() {
    document.addEventListener("click", (e) => {
      const t = e.target, a = t.parentNode;
      if (t.classList.contains("navBar-toggle") && this.toggleNavbar(), a.classList.contains("navBar-menuItem--hasChildren")) {
        e.preventDefault(), this.toggleSubmenu(a), this.disableActiveItems(a);
        return;
      }
      window.innerWidth >= 840 && this.disableActiveItems(this.elements.navBar);
    });
  },
  handleKeyup() {
    document.addEventListener("keyup", (e) => {
      const t = e.key;
      this.getActiveItems(this.elements.navBar).forEach((a) => {
        (t == "Escape" || t == "Tab" && !a.contains(e.target)) && this.toggleSubmenu(a);
      });
    });
  },
  toggleExpanded(e) {
    const t = e.getAttribute("aria-expanded");
    t && e.setAttribute("aria-expanded", t == "false" ? "true" : "false");
  },
  getActiveItems(e) {
    return e.querySelectorAll(".is-active");
  },
  disableActiveItems(e) {
    this.getActiveItems(e.parentNode).forEach((t) => {
      t != e && this.toggleSubmenu(t);
    });
  },
  toggleNavbar() {
    const e = this.elements.navBar;
    if (e.classList.contains("is-animating")) return;
    document.body.classList.toggle("navBar-disableScroll"), e.classList.add("is-animating"), e.classList.toggle("is-active");
    const t = "navBar-overlay", a = e.querySelector("." + t);
    if (["webkitAnimationEnd", "animationend"].map((i) => {
      e.addEventListener(i, () => e.classList.remove("is-animating")), a && a.addEventListener(i, () => e.removeChild(a));
    }), !a) {
      const i = document.createElement("div");
      i.className = `${t} navBar-toggle`, i.onclick = () => {
      }, e.appendChild(i);
    }
    document.querySelectorAll(".navBar-toggle").forEach((i) => this.toggleExpanded(i));
  },
  toggleSubmenu(e) {
    e.classList.toggle("is-active"), this.toggleExpanded(e.firstElementChild);
  }
};
(function() {
  n.init();
})();
