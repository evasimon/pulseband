$(document).ready( function(){
	var menuClicked = false;

   	/* Click Event Handling for Hamburger icon */

	$(".hamburger").click(function(){
		 if ($("nav").hasClass("slideup")){
             $("nav").removeClass("slideup").addClass("slidedown");
         } else {
         	$("nav").removeClass("slidedown").addClass("slideup");
         }
	});


	/*  Click and Scroll Events Handling for Menu Bar*/

	$(document).scroll(function(e){
		if ( !menuClicked && ($(window).scrollTop() === 0 ||
			$(window).scrollTop() + $(window).height() == $(document).height() )) {
			$("header").slideUp(600);
		} else {
			$("header").slideDown(600);
   		}

   		if ( $(window).scrollTop() > $("#features").offset().top ){
   			$(".app-option div").addClass("fadeInLeft");
   		}

   		$(".menu-button").removeClass("active");

   		if ( $(window).scrollTop() > $("#scrolltoBuy").offset().top - 85){
   			
   			$("#buttonBuy").addClass("active");

   		} else if ( $(window).scrollTop() > $("#scrolltoGallery").offset().top - 85){
   			
   			$("#buttonGallery").addClass("active");

   		} else if ( $(window).scrollTop() > $("#scrolltoApp").offset().top - 85){
   			
   			$("#buttonApp").addClass("active");
   		
   		} else if ( $(window).scrollTop() > $("#features").offset().top - 85){
   			
   			$("#buttonFeatures").addClass("active");
   		} 

	});

	$(".hero").css("height", $(window).height());

	$(window).resize(function() {
  		$(".hero").css("height", $(window).height());
	});

	$(".menu-button").click(function() { 
		menuClicked = true;
		$('html, body').animate({
			scrollTop:$($(this).data("target")).offset().top - 60 + "px"}, 500, function(){
				menuClicked = false;
			});
	});

	/* Hover Event Handling on SVG property for device feature icons */

	$(".features .option1").hover(function(){
		$(this).find('circle').attr('fill','#EFBB51');
		// $(this).find('path').attr('fill','#EFBB51');
		// $(this).find('path').attr('stroke','#EFBB51');
		// $(this).find('line').attr('stroke','#EFBB51');
		// $(this).find('line').attr('fill', none);
		// $(this).find('polygon').attr('stroke','#EFBB51');
		// $(this).find('polygon').attr('fill','#EFBB51');
	}, function(){
		$(this).find('circle').attr('fill','#30BEC5');
		// $(this).find('path').attr('fill','#fff');
		// $(this).find('path').attr('stroke','#fff');
		// $(this).find('line').attr('stroke','#fff');
		// $(this).find('line').attr('fill','#fff');
		// $(this).find('polygon').attr('stroke','#fff');
		// $(this).find('polygon').attr('fill','#fff');
	});

	$(".features .option2").hover(function(){
		$(this).find('path').attr('fill','#EFBB51');
		$(this).find('path').attr('stroke','#EFBB51');
		$(this).find('line').attr('stroke','#EFBB51');
		// $(this).find('line').attr('fill', none);
		// $(this).find('polygon').attr('stroke','#EFBB51');
		// $(this).find('polygon').attr('fill','#EFBB51');
	}, function(){
		$(this).find('path').attr('fill','#fff');
		$(this).find('path').attr('stroke','#fff');
		$(this).find('line').attr('stroke','#fff');
		// $(this).find('line').attr('fill','#fff');
		// $(this).find('polygon').attr('stroke','#fff');
		// $(this).find('polygon').attr('fill','#fff');
	});

	$(".features .option3").hover(function(){
		// $(this).find('path').attr('fill','#EFBB51');
		$(this).find('path').attr('stroke','#EFBB51');
		// $(this).find('line').attr('stroke','#EFBB51');
		// $(this).find('line').attr('fill', none);
		$(this).find('polygon').attr('stroke','#EFBB51');
		$(this).find('polygon').attr('fill','#EFBB51');
	}, function(){
		// $(this).find('path').attr('fill','#fff');
		$(this).find('path').attr('stroke','#fff');
		// $(this).find('line').attr('stroke','#fff');
		// $(this).find('line').attr('fill','#fff');
		$(this).find('polygon').attr('stroke','#fff');
		$(this).find('polygon').attr('fill','#fff');
	});

	$(".features .option4").hover(function(){
		$(this).find('circle').attr('fill','#EFBB51');
		// $(this).find('path').attr('fill','#EFBB51');
		// $(this).find('path').attr('stroke','#EFBB51');
		$(this).find('line').attr('stroke','#EFBB51');
		// $(this).find('line').attr('fill', none);
		$(this).find('polygon').attr('stroke','#EFBB51');
		$(this).find('polygon').attr('fill','#EFBB51');
	}, function(){
		$(this).find('circle').attr('fill','#30BEC5');
		// $(this).find('path').attr('fill','#fff');
		// $(this).find('path').attr('stroke','#fff');
		$(this).find('line').attr('stroke','#30BEC5');
		$(this).find('line').attr('fill','#30BEC5');
		$(this).find('polygon').attr('stroke','#30BEC5');
		$(this).find('polygon').attr('fill','#30BEC5');
	});

	$(".features .option5").hover(function(){
		// $(this).find('path').attr('fill','#EFBB51');
		// $(this).find('path').attr('stroke','#EFBB51');
		// $(this).find('line').attr('stroke','#EFBB51');
		// $(this).find('line').attr('fill', none);
		$(this).find('polygon').attr('stroke','#EFBB51');
		$(this).find('polygon').attr('fill','#EFBB51');
	}, function(){
		// $(this).find('path').attr('fill','#fff');
		// $(this).find('path').attr('stroke','#fff');
		// $(this).find('line').attr('stroke','#fff');
		// $(this).find('line').attr('fill','#fff');
		$(this).find('polygon').attr('stroke','#fff');
		$(this).find('polygon').attr('fill','#fff');
	});

	$(".features .option6").hover(function(){
		$(this).find('circle').attr('fill','#EFBB51');
		// // $(this).find('path').attr('fill','#EFBB51');
		// // $(this).find('path').attr('stroke','#EFBB51');
		// // $(this).find('line').attr('stroke','#EFBB51');
		// // $(this).find('line').attr('fill', none);
		// $(this).find('polygon').attr('stroke','#EFBB51');
		// $(this).find('polygon').attr('fill','#EFBB51');
		$(this).find('rect').attr('stroke','#EFBB51');
		// $(this).find('rect').attr('fill','#EFBB51');
	}, function(){
		$(this).find('circle').attr('fill','#30BEC5');
		// $(this).find('path').attr('fill','#fff');
		// $(this).find('path').attr('stroke','#fff');
		// $(this).find('line').attr('stroke','#fff');
		// $(this).find('line').attr('fill','#fff');
		// $(this).find('polygon').attr('stroke','#fff');
		// $(this).find('polygon').attr('fill','#fff');
		$(this).find('rect').attr('stroke','#30BEC5');
		// $(this).find('rect').attr('fill','#fff');
	});

	/* BxSlider settings for the App Feature Section */

    var phoneSlider = $(".phoneslider").bxSlider({
        pager: false,
        controls: false,
        auto: true,
        slideWidth: 163,
        pagerCustom: '#bx-pager',
		onSlideBefore: function($slideElement, oldIndex, newIndex) {
			$(".slider-items li").removeClass("active");
			if (oldIndex==0 && newIndex==1){
				$(".slider-items li:nth-child(2)").addClass("active");
			} else if (oldIndex==1 && newIndex==2){
				$(".slider-items li:nth-child(3)").addClass("active");
			} else if (oldIndex==2 && newIndex==3){
				$(".slider-items li:nth-child(4)").addClass("active");
			} else if (oldIndex==3 && newIndex==0){
				$(".slider-items li:nth-child(1)").addClass("active");
			}
    	}
    });

    $(".slider-items li").click(function(){
    	phoneSlider.goToSlide($(this).data('slideIndex'));
		$(this).addClass('active');
    });

    /* Hover and Click Event Handling for Gallery Section + disable slider on large screen*/

	$(".lifestyle li img").hover(function() { 
		$(this).addClass('pulse');
	}, function() { 
		$(this).removeClass('pulse');
	});

	$(".lifestyle li img").click(function() { 
		$(this).addClass('pulse');
	});

    /* BxSlider settings for the Buy Section*/

     $(".deviceslider").bxSlider({
     	pager: true,
        mode: 'fade',
        controls: false,
        auto: true,
        slideWidth: 225,
        speed: 200
    });

});