!function(){"use strict";function e(){c.classList.toggle("main-nav-is-active"),t.classList.toggle("hide-overflow"),document.querySelector(".screen-cover")?t.removeChild(n):(n.setAttribute("class","screen-cover fixed full-size"),t.appendChild(n))}var t=document.documentElement,n=document.createElement("div"),i=document.querySelector(".nav-btn"),c=document.querySelector(".main-nav"),o=document.querySelectorAll(".menu-item-has-children");Array.prototype.forEach.call(o,function(e){e.querySelector("a").addEventListener("click",function(e){e.preventDefault()}),e.addEventListener("click",function(){window.innerWidth<=992&&(this.classList.toggle("menu-item-is-active"),this.querySelector("ul").addEventListener("click",function(e){e.stopPropagation()}))})}),i.addEventListener("click",e),n.addEventListener("click",e),window.addEventListener("resize",function(){c.classList.contains("main-nav-is-active")&&(window.innerWidth<=992?(t.appendChild(n),t.classList.add("hide-overflow")):(t.removeChild(n),t.classList.remove("hide-overflow")))})}();