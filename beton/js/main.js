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

	$('.on_granit').on('click', function(){
		$('.on_granit table').toggleClass('on_granit_active');
	})

	$('.on_shlack').on('click', function(){
		$('.on_shlack table').toggleClass('on_shlack_active');
	})

	$('.on_scheben').on('click', function(){
		$('.on_scheben table').toggleClass('on_shlack_active');
	})

	$('.call_icon').on('click', function() {
		$('.calling-form').fadeIn(500);
		$('.call_icon').fadeOut(500);
	})
	$('.close_form').on('click', function() {
		$('.calling-form').fadeOut(500);
		$('.call_icon').fadeIn(500);
	})

	$('.fbs_block').on('click', function(){
		$('.fbs_block table').toggleClass('fbs_block_active');
	})


})


