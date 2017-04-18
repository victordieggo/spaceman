/* =====================================================================
 * SPACEMAN MOBILE NAVIGATION
 * ===================================================================*/
/*global $, window, document*/

$(function () {

    'use strict';

    // set variables
    var screenCover = $('.screen-cover'),
        nav         = $('.main-nav'),
        navBtn      = $('.nav-btn'),
        page        = $('html'),
        parentItem  = $('.menu-item-has-children');

    // main navigation
    function mobileNavigation() {
        nav.toggleClass('main-nav-is-active');
        page.toggleClass('hide-overflow');
        screenCover.toggleClass('hide');
    }

    // navigation sub-items
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

    // call functions
    navBtn.on('click', mobileNavigation);
    nav.on('swipeleft', mobileNavigation);
    screenCover.on('swipeleft click', mobileNavigation);

});
