"use strict";!function(s,l){var u=s.querySelector(".main-nav");if(u){var d=void 0,e=s.body,n="nav-animate",i="menu-item-is-active",f=u.querySelector(".nav-btn"),t=u.querySelectorAll(".menu-item-has-children"),a=["webkitAnimationEnd","animationend"],v=function(e){var n=e.getAttribute("aria-expanded");e.setAttribute("aria-expanded","false"==n?"true":"false")},m=function(){u.classList.contains(n)||(u.classList.add(n),u.classList.toggle("main-nav-is-active"),a.forEach(function(e){u.addEventListener(e,function(){return u.classList.remove(n)})}),function(){if(e.classList.toggle("nav-hide-overflow"),u.contains(d))return d.classList.add("screen-cover-fade-out"),a.forEach(function(e){d.addEventListener(e,function(){return u.removeChild(d)})});(d=s.createElement("div")).className="screen-cover",d.onclick=function(){},u.appendChild(d)}())};["click","keyup"].forEach(function(e){s.addEventListener(e,function(e){var a=e.type,c=e.keyCode,r=e.target,n=u.querySelectorAll("."+i),o=function(e){e.classList.remove(i),v(e.querySelector("a"))};"click"==a&&-1!=[f,d].indexOf(r)&&m(),Array.prototype.forEach.call(n,function(e){if("click"==a&&!e.contains(r)){var n=u.contains(d),t=l.innerWidth,i=[u.querySelector(".menu"),d,f];i=-1==i.indexOf(r),(992<t||t<=992&&i&&n)&&o(e)}"keyup"==a&&(27==c||9==c&&!e.contains(s.activeElement))&&o(e)})})}),Array.prototype.forEach.call(t,function(e){var n,t;(t=(n=e).querySelector("a")).addEventListener("click",function(e){e.preventDefault(),n.classList.toggle(i),v(t)})})}}(document,window);