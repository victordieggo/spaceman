// MULTILEVEL MOBILE NAVIGATION
var menu = $('ul.menu');
$(document).ready(function(){
	
	//ABRE O MENU
	$('.mobile-nav').click(function() {
		if ($(window).width() <= 1023) {
			menu.slideToggle(400);
		}
	});
	
	//ABRE O SUBMENU
	$('.menu-item-has-children').click(function(){
		if ($(window).width() <= 1023) {
			$(this).children('.sub-menu').slideToggle(400);
			
			//EVITA QUE TODAS OS NÍVEIS DO SUBMENU SEJAM ABERTOS JUNTOS
			$('.sub-menu').children().click(function (event) {
				event.stopPropagation();
			});
		}
	});
});
		
//EVITA QUE O MENU OU SUBMENU PERMANEÇAM ABERTOS
$(window).on('resize', function() {
	if (!$(".mobile-nav").is(":visible") && !menu.is(':visible')) {
		menu.css({
			'display': ''
		});
	}
	if ($('ul.sub-menu').is(':visible')) {
		$('ul.sub-menu').css({
			'display': ''
		});
	} else {
		$('ul.sub-menu').css({
			'display': ''
		});
	}
});