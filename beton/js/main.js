$(document).ready(function(){
	$('.beton__first').click(function() {
		alert('Click');
	})

	$('.moreAbout').click(function() {
		$('.about__wrap').addClass("fadeIn__active");
		$('.moreAbout').addClass("moreAbout__hide");
		$('.lessAbout').addClass("lessAbout__show");
		$('.about__wrap').removeClass("about__wrap");
	})

	$('.lessAbout').click(function() {
		$('.about__wrap').removeClass("fadeIn__active");
		$('.moreAbout').removeClass("moreAbout__hide");
		$('.lessAbout').removeClass("lessAbout__show");
		$('.fadeIn__active').addClass("about__wrap");
	})

	$('.menu_burger').click(function(){
		$('.menu_burger').toggleClass('menu_burger_active');
		$('.menu__small').toggleClass('menu__small_active');
	})

	$('.small__list_close').click(function(){
		$('.menu_burger_active').removeClass('menu_burger_active');
		$('.menu__small').removeClass('menu__small_active');
	})

	$('.menu__small a').click(function() {
		$('.menu_burger_active').removeClass('menu_burger_active');
		$('.menu__small').removeClass('menu__small_active');
	})
})


