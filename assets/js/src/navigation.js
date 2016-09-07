/* ====================================================================================================================
 * SPACEMAN MOBILE NAVIGATION 1.9.0
 * ====================================================================================================================*/
/*global $, jQuery, window, document*/

//-------------------------------------------------------------------
// SET VARIABLES
//-------------------------------------------------------------------

var screenCover = jQuery('.screen-cover'),
    nav         = jQuery('.main-nav'),
    page        = jQuery('html, body');

//-------------------------------------------------------------------
// FUNCTION: MOBILE NAVIGATION CORE
//-------------------------------------------------------------------

function MobileNavigation() {

    'use strict';

    jQuery('.nav-btn').click(function () {
        jQuery(this).blur();
        nav.addClass('main-nav-is-active');
        page.addClass('hide-overflow');
        screenCover.removeClass('hide');
    });

    jQuery('.menu-item-has-children').each(function () {

        jQuery('a:first', this).click(function (e) {
            e.preventDefault();
        });

        jQuery(this).click(function () {
            if (window.innerWidth <= 992) {
                jQuery('ul:first', this).slideToggle(400);
                jQuery('a:first', this).toggleClass('menu-item-is-active');
                jQuery('ul', this).children().click(function (event) {
                    event.stopPropagation();
                });
            }
        });

    });
}

//-------------------------------------------------------------------
// FUNCTION: CLOSE MOBILE NAVIGATION
//-------------------------------------------------------------------

function CloseNavigation() {

    'use strict';

    if ((window.innerWidth <= 992) && (nav.is(':visible'))) {
        nav.removeClass('main-nav-is-active');
        page.removeClass('hide-overflow');
        screenCover.addClass('hide');
    }

}

//-------------------------------------------------------------------
// FUNCTION: MOBILE NAVIGATION RESIZE FALLBACK
//-------------------------------------------------------------------

function ResizeFallback() {

    'use strict';

    if (window.innerWidth > 992) {

        page.removeClass('hide-overflow');
        screenCover.addClass('hide');

        jQuery('ul', nav).css({
            'display': ''
        });

        jQuery('a', nav).removeClass('menu-item-is-active');

    } else {

        if (nav.hasClass('main-nav-is-active')) {
            page.addClass('hide-overflow');
            screenCover.removeClass('hide');
        }

    }
}

//-------------------------------------------------------------------
// CALL FUNCTIONS
//-------------------------------------------------------------------

jQuery(document).ready(MobileNavigation);
jQuery(window).resize(ResizeFallback);
jQuery(nav).on('swipeleft', CloseNavigation);
jQuery(screenCover).on('swipeleft click', CloseNavigation);
