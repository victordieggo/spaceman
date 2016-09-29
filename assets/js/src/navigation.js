/* =====================================================================
 * SPACEMAN MOBILE NAVIGATION 1.9.0
 * ===================================================================*/
/*global $, jQuery, window, document*/

//-------------------------------------------------------------------
// SET VARIABLES
//-------------------------------------------------------------------

var screenCover = jQuery('.screen-cover'),
    nav         = jQuery('.main-nav'),
    navBtn      = jQuery('.nav-btn'),
    page        = jQuery('html, body'),
    parentItem  = jQuery('.menu-item-has-children');

//-------------------------------------------------------------------
// FUNCTION: OPEN MOBILE NAVIGATION
//-------------------------------------------------------------------

function openNavigation() {

    'use strict';
    nav.addClass('main-nav-is-active');
    page.addClass('hide-overflow');
    screenCover.removeClass('hide');

}

//-------------------------------------------------------------------
// FUNCTION: OPEN/CLOSE NAVIGATION SUB ITEMS
//-------------------------------------------------------------------

jQuery(parentItem).each(function () {

    'use strict';

    jQuery('a:first', this).click(function (e) {
        e.preventDefault();
    });

    jQuery(this).click(function () {
        if (window.innerWidth <= 992) {
            jQuery(this).toggleClass('menu-item-is-active');
            jQuery('ul', this).children().click(function (event) {
                event.stopPropagation();
            });
        }
    });
});

//-------------------------------------------------------------------
// FUNCTION: CLOSE MOBILE NAVIGATION
//-------------------------------------------------------------------

function closeNavigation() {

    'use strict';
    nav.removeClass('main-nav-is-active');
    page.removeClass('hide-overflow');
    screenCover.addClass('hide');

}

//-------------------------------------------------------------------
// FUNCTION: MOBILE NAVIGATION RESIZE FALLBACK
//-------------------------------------------------------------------

function resizeFallback() {

    'use strict';

    if (window.innerWidth > 992) {

        page.removeClass('hide-overflow');
        screenCover.addClass('hide');

        jQuery('ul', nav).css({
            'display': ''
        });

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

jQuery(navBtn).on('click', function () {
    'use strict';
    this.blur();
    openNavigation();
});
jQuery(nav).on('swipeleft', closeNavigation);
jQuery(screenCover).on('swipeleft click', closeNavigation);
jQuery(window).on('resize', resizeFallback);
