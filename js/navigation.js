jQuery(document).ready(function() {

    //ABRE O MENU
    jQuery('.nav-btn').click(function() {
        if (jQuery(window).width() <= 992) {
            jQuery('.main-nav').toggleClass('open');
        }
    });

    //ABRE O SUBMENU
    jQuery('.menu-item-has-children').click(function() {
        if (jQuery(window).width() <= 992) {
            jQuery(this).children('.sub-menu').slideToggle(400);

            //ADD HIGHLIGHT COLOR
            jQuery(this).children('a').toggleClass('nav-highlight');

            //EVITA QUE TODAS OS NÍVEIS DO SUBMENU SEJAM ABERTOS JUNTOS
            jQuery('.sub-menu').children().click(function(event) {
                event.stopPropagation();
            });
        }
    });

    //CLOSE MENU IF USER CLICKS OUTSIDE
    jQuery('html').click(function() {
        if (jQuery(window).width() <= 992) {
            if (jQuery('.main-nav').is(':visible')) {
                jQuery('.main-nav').removeClass('open');
                jQuery('.nav-btn').removeClass('selected');
            }
        }
    });
    jQuery('.main-nav, .nav-btn').click(function(event) {
        event.stopPropagation();
    });

});

//RESIZE FALLBACK
jQuery(window).on('resize', function() {
    if (jQuery(window).width() >= 993) {

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

    }
});