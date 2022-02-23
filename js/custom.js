jQuery(document).ready(function($) {


    $(".slc_qus li").click(function () {
        $(".slc_qus li").removeClass("active");
        $(this).addClass("active");   
    });

    $("#header").sticky({topSpacing:0});


    $('#tsm_slider').flexslider({
	    animation: "slide",
	    animationLoop: false,
	    slideshow: false,
	    smoothHeight: true,
	    controlNav: false,
	    directionNav: true,
	    prevText: "",
	    nextText: "",
	});


	$(function() {
		$('.menu li a[href*="#"]:not([href="#"])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html, body').animate({
		          scrollTop: target.offset().top
		        }, 1000);
		        return false;
		      }
		    }
		});
	});

		


});









