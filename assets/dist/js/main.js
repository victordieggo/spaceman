!function(){"use strict";function e(){c.classList.toggle("hide-overflow"),c.contains(i)?c.removeChild(i):((i=document.createElement("div")).className="screen-cover",c.appendChild(i))}function n(){o.classList.toggle("main-nav-is-active"),e()}function t(e){e.querySelector("a").addEventListener("click",function(n){n.preventDefault(),e.classList.toggle("menu-item-is-active")})}var i,c=document.body,a=c.querySelector(".nav-btn"),o=c.querySelector(".main-nav"),r=c.querySelectorAll(".menu-item-has-children");c.addEventListener("click",function(e){var t=e.target;t!==a&&t!==i||n()}),Array.prototype.forEach.call(r,function(e){t(e)}),window.addEventListener("resize",function(){var n=c.contains(i),t=window.innerWidth;o.classList.contains("main-nav-is-active")&&(!n&&t<=992||n&&t>992)&&e()})}();