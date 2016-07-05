/* ====================================================================================================================
 * SPACEMAN MOBILE NAVIGATION 1.8.5
 * ====================================================================================================================*/
/*global $, jQuery*/

//-------------------------------------------------------------------
// FUNCTION: MOBILE NAVIGATION CORE
//-------------------------------------------------------------------

function MobileNavigation() {
	
	'use strict';

	//OPEN MAIN MENU
	jQuery('.nav-btn').click(function () {
		if (window.innerWidth <= 992) {
			jQuery(this).blur().toggleClass('selected');
			jQuery('.main-nav').toggleClass('open');
			jQuery('.screen-cover').toggleClass('hide');
            jQuery('body').addClass('fixed');
		}
	});

	jQuery('.main-nav li').each(function () {
		if (jQuery(this).has('ul').length) {
			
			jQuery(this).children('a').click(function (e) {e.preventDefault(); });
			
			jQuery(this).click(function () {
				if (window.innerWidth <= 992) {
					jQuery(this).children('.main-nav ul ul').slideToggle(400);
					jQuery(this).children('a').toggleClass('nav-highlight');
					jQuery('.main-nav ul ul').children().click(function (event) {
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

	if ((window.innerWidth <= 992) && (jQuery('.main-nav').is(':visible'))) {
        jQuery('.main-nav').removeClass('open');
        jQuery('.nav-btn').removeClass('selected');
        jQuery('.screen-cover').addClass('hide');
        jQuery('body').removeClass('fixed');
    }
    
    //EXCEPTIONS: ITENS LISTED HERE WONT CLOSE THE MAIN NAVIGATION WHEN CLICKED
    jQuery('.main-nav, .nav-btn').click(function (event) {
        event.stopPropagation();
    });

}

//-------------------------------------------------------------------
// FUNCTION: MOBILE NAVIGATION RESIZE FALLBACK
//-------------------------------------------------------------------

function ResizeFallback() {
	
	'use strict';

	if (window.innerWidth > 992) {
		
		//HIDE SCREEN COVER DIV
		jQuery('.screen-cover').addClass('hide');
        jQuery('body').removeClass('fixed');

        //FORCE MAIN NAV TO APPEAR EVEN AFTER BEIGN CLOSED ON MOBILE
        if (jQuery('.main-nav').not(':visible')) {
            jQuery('.main-nav').css({
                'display': ''
            });
        }

        //FORCE SUB-MENU ITENS TO HIDE IF THEY ARE OPEN ON MOBILE
        if (jQuery('.main-nav ul ul').is(':visible')) {
            jQuery('.main-nav ul ul').css({
                'display': ''
            });
        }

        //REMOVE HIGHLIGHT COLOR
        jQuery('.main-nav li').children('a').removeClass('nav-highlight');

        //REMOVE SELECTED CLASS FROM NAV BUTTON
        jQuery('.nav-btn').removeClass('selected');
		
    } else {
		
		//CHECK IF MAIN NAV WAS OPEN BEFORE THE RESIZE
		if (jQuery('.main-nav').hasClass('open')) {
            
			//IF MAIN NAV WAS OPEN, SHOW THE SCREEN COVER DIV
            jQuery('.screen-cover').removeClass('hide');
            jQuery('body').addClass('fixed');
            
        }
		
	}
}

//-------------------------------------------------------------------
// CALL FUNCTIONS
//-------------------------------------------------------------------

jQuery(document).ready(MobileNavigation);
jQuery(window).on('resize', ResizeFallback);
jQuery('.main-nav, .screen-cover').on('swipeleft', CloseNavigation);
jQuery('.screen-cover').click(CloseNavigation);