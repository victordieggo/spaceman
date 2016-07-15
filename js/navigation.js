/* ====================================================================================================================
 * SPACEMAN MOBILE NAVIGATION 1.9
 * ====================================================================================================================*/
/*global $, jQuery*/

//-------------------------------------------------------------------
// SET VARIABLES
//-------------------------------------------------------------------

var screenCover = jQuery('.screen-cover'),
    nav         = jQuery('.main-nav'),
    body        = jQuery('html, body');

//-------------------------------------------------------------------
// FUNCTION: MOBILE NAVIGATION CORE
//-------------------------------------------------------------------

function MobileNavigation() {

	'use strict';

	//OPEN MAIN MENU
	jQuery('.nav-btn').click(function () {
		if (window.innerWidth <= 992) {
			jQuery(this).blur();
			nav.toggleClass('open');
			screenCover.show();
			body.addClass('removeScroll');
		}
	});

	jQuery('li', nav).each(function () {
		if (jQuery(this).has('ul').length) {

			jQuery('a', this).click(function (e) {
				e.preventDefault();
			});

			jQuery(this).click(function () {
				if (window.innerWidth <= 992) {
					jQuery('ul:first', this).slideToggle(400);
					jQuery('a:first', this).toggleClass('nav-highlight');
					jQuery('ul', this).children().click(function (event) {
						event.stopPropagation();
                    });
				}
            });
        }
	});
}

//-------------------------------------------------------------------
// FUNCTION: CLOSE MOBILE NAVIGATION
//-------------------------------------------------------------------

function CloseNavigation() {

	'use strict';

	if ((window.innerWidth <= 992) && (nav.is(':visible'))) {
		nav.removeClass('open');
		screenCover.hide();
		body.removeClass('removeScroll');
	}

}

//-------------------------------------------------------------------
// FUNCTION: MOBILE NAVIGATION RESIZE FALLBACK
//-------------------------------------------------------------------

function ResizeFallback() {

	'use strict';

	if (window.innerWidth > 992) {

		screenCover.hide();
		body.removeClass('removeScroll');

        jQuery('ul', nav).css({
            'display': ''
        });
        
		jQuery('a', nav).removeClass('nav-highlight');
        
	} else {
        
		if (nav.hasClass('open')) {
			screenCover.show();
			body.addClass('removeScroll');
		}
        
	}
}

//-------------------------------------------------------------------
// CALL FUNCTIONS
//-------------------------------------------------------------------

jQuery(document).ready(MobileNavigation);
jQuery(window).resize(ResizeFallback);

nav.swipeleft(CloseNavigation);
screenCover.swipeleft(CloseNavigation).click(CloseNavigation);