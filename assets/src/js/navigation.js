/* =====================================================================
 * SPACEMAN MOBILE NAVIGATION
 * ===================================================================*/
/*global $, window, document*/

$(function () {

    'use strict';

    var screenCover = $('.screen-cover'),
        navWrapper  = $('.main-nav-wrapper'),
        nav         = $('.main-nav'),
        navBtn      = $('.nav-btn'),
        page        = $('html'),
        parentItem  = $('.menu-item-has-children');

    function mobileNavigation() {
        navWrapper.toggleClass('z-index-6');
        nav.toggleClass('main-nav-is-active');
        page.toggleClass('hide-overflow');
        screenCover.toggleClass('hide');
    }

    parentItem.each(function () {
        $('a:first', this).click(function (event) {
            event.preventDefault();
        });
        $(this).click(function () {
            if (window.innerWidth <= 992) {
                $(this).toggleClass('menu-item-is-active');
                $('ul', this).children().click(function (event) {
                    event.stopPropagation();
                });
            }
        });
    });

    function resizeFallback() {
        if (nav.hasClass('main-nav-is-active')) {
            if (window.innerWidth <= 992) {
                screenCover.removeClass('hide');
                page.addClass('hide-overflow');
                navWrapper.addClass('z-index-6');
            } else {
                screenCover.addClass('hide');
                page.removeClass('hide-overflow');
                navWrapper.removeClass('z-index-6');
            }
        }
    }

    navBtn.on('click', mobileNavigation);
    $(window).on('resize', resizeFallback);
    nav.on('swipeleft', mobileNavigation);
    screenCover.on('swipeleft click', mobileNavigation);

});
