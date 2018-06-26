$(document).ready(function() {
		var burger = $('.header-info_left_burger_block');
		var fallenMenu = $('.fallen-menu');
		var buttonForm = $('#buttonForm');
		var crossClose = $('.close-cross');

		burger.click(function(){
			fallenMenu.toggleClass('fallen-menu_active');
			fallenMenu.toggleClass('fallen-menu');
			fallenMenu.fadeIn(300);
		});

		crossClose.click(function() {
			fallenMenu.removeClass('fallen-menu_active');
			fallenMenu.addClass('fallen-menu');
		})


		/*$('.clickMe').click(function(){
			$('#formBlock').slideToggle(500);
		});*/

		$('.more').click(function(e) {
            var parentId = $(this).parent().parent().attr('id');

            var a = $('#'+parentId).addClass('block-promo_active');
           /* $(".blockClose").click(function(){
                $('.block-promo').removeClass('block-promo_active');
            });*/
            console.log('Консоль');
        })

       $('.order').click(function(e) {
            var infoHide = $(this).parent().attr('id');

            var b = $('#'+infoHide).fadeOut(200);
            
            /*$('.blockClose').click(function(){
                b.fadeIn();
            });*/
            console.log('Консоль');
        })
		
      $('.short-form-btn').click(function(e) {
            var formSent = $(this).parent().parent().attr('id');

            var c = $('#'+formSent).fadeOut(200);
           
            /*$('.blockClose').click(function(){
                c.fadeIn();
            });*/
            console.log('Консоль');
        })

      $('.ok-btn').click(function() {
      	var removeActive = $(this).parent().siblings('.block-promo');
      	var fadingIn = $(this).parent().siblings();
      		/*$('.block-promo').removeClass('block-promo_active');
      		$('.content-block-form').fadeIn();
      		$('.content-block-info').fadeIn();*/
      	removeActive.removeClass('block-promo_active');
      	fadingIn.css("display", "block");	
      	console.log('Консоль 1');	
      })

      $('.blockClose').click(function(){
      	var removeActive = $(this).parent().siblings('.block-promo');
      	var fadingIn = $(this).parent().siblings();

      	removeActive.removeClass('block-promo_active');
      	fadingIn.css("display", "block");
      	console.log('Консоль');
      })



		/*$('.short-form-btn').click(function(e) {
		            
		            if ($('.short-form input:empty')) {
		            	alert('Its empty');
		            	else {
		            		var formSent = $(.short-form-btn).parent().parent().attr('id');
		            		var c = $('#'+formSent).fadeOut(200);
				            $('.content-block').mouseleave(function(){
				                c.fadeIn();
				            });
		            	}
		            }
		       	}*/
		/*var moreFirst = $('.more-first');
		var moreSecond = $('.more-second');
		var moreThird = $('.more-third');
		var moreFourth = $('.more-fourth');*/

		

		/*moreFirst.click(function() {
			$('.block-promo-first').addClass('block-promo_active');
				$('.content-block').mouseleave(function(){
					$('.block-promo').removeClass('block-promo_active');
				});
			});
		moreSecond.click(function() {
			$('.block-promo-second').addClass('block-promo_active');
				$('.content-block').mouseleave(function(){
					$('.block-promo').removeClass('block-promo_active');
				});
			});
		moreThird.click(function() {
			$('.block-promo-third').addClass('block-promo_active');
				$('.content-block').mouseleave(function(){
					$('.block-promo').removeClass('block-promo_active');
				});
			});
		moreFourth.click(function() {
			$('.block-promo-fourth').addClass('block-promo_active');
				$('.content-block').mouseleave(function(){
					$('.block-promo').removeClass('block-promo_active');
				});
			});
*/
			
	})

