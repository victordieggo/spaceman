/* ====================================================================================================================
 * SPACEMAN MOBILE NAVIGATION 1.8.2
 * ====================================================================================================================*/
/*global $, jQuery*/

//-------------------------------------------------------------------
// FUNCTION: MOBILE NAVIGATION CORE
//-------------------------------------------------------------------

function MobileNavigation() {
	
	"use strict";

	//OPEN MAIN MENU
	jQuery('.nav-btn').click(function () {
		if (jQuery(window).width() <= 992) {
			jQuery('.main-nav').toggleClass('open');
			jQuery(this).toggleClass('selected');
			jQuery('.screen-cover').toggleClass('hide');
		}
	});
	
	//OPEN SUB MENU
	jQuery('.menu-item-has-children').click(function () {
		if (jQuery(window).width() <= 992) {
			jQuery(this).children('.sub-menu').slideToggle(400);
			
			//ADD HIGHLIGHT COLOR
			jQuery(this).children('a').toggleClass('nav-highlight');
			
			//AVOID OPENING ALL SUB MENU´S LEVELS AT THE SAME TIME
			jQuery('.sub-menu').children().click(function (event) {
				event.stopPropagation();
			});
		}
	});
	
	//CLOSE MENU IF USER CLICKS OUTSIDE
    jQuery('html').click(function () {
		if (jQuery(window).width() <= 992) {
			if (jQuery('.main-nav').is(':visible')) {
				jQuery('.main-nav').removeClass('open');
				jQuery('.nav-btn').removeClass('selected');
				jQuery('.screen-cover').addClass('hide');
			}
		}
    });
	//EXCEPTIONS: ITENS LISTED HERE WONT CLOSE THE MAIN NAVIGATION WHEN CLICKED
    jQuery('.main-nav, .nav-btn').click(function (event) {
        event.stopPropagation();
    });

}

//-------------------------------------------------------------------
// FUNCTION: MOBILE NAVIGATION RESIZE FALLBACK
//-------------------------------------------------------------------

function ResizeFallback() {
	
	"use strict";

	if (jQuery(window).width() > 992) {
		
		//HIDE SCREEN COVER DIV
		jQuery('.screen-cover').addClass('hide');

        //FORCE MAIN NAV TO APPEAR EVEN AFTER BEIGN CLOSED ON MOBILE
        if (jQuery('.main-nav').not(':visible')) {
            jQuery('.main-nav').css({
                'display': ''
            });
        }

        //FORCE SUB-MENU ITENS TO HIDE IF THEY ARE OPEN ON MOBILE
        if (jQuery('ul.sub-menu').is(':visible')) {
            jQuery('ul.sub-menu').css({
                'display': ''
            });
        } else {
            jQuery('ul.sub-menu').css({
                'display': ''
            });
        }

        //REMOVE HIGHLIGHT COLOR
        jQuery('.menu-item-has-children').children('a').removeClass('nav-highlight');

        //REMOVE SELECTED CLASS FROM NAV BUTTON
        jQuery('.nav-btn').removeClass('selected');
		
    } else {
		
		//CHECK IF MAIN NAV WAS OPEN BEFORE THE RESIZE
		if (jQuery('.main-nav').hasClass('open')) {
            
			//IF MAIN NAV WAS OPEN, SHOW THE SCREEN COVER DIV
            jQuery('.screen-cover').removeClass('hide');
            
        }
		
	}
}

//-------------------------------------------------------------------
// CALL FUNCTIONS
//-------------------------------------------------------------------

jQuery(document).ready(MobileNavigation);
jQuery(window).on('resize', ResizeFallback);