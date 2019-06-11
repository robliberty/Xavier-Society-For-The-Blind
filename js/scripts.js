// Links return false
$('a:not(.force), button:not(.force), input[type="submit"]:not(.force)').click(function() {
    return false
})

//Scroll to Top
$('body').append('<a href="" onclick="event.preventDefault()" class="event_track" data-cat="Extra" data-label="Back To Top"><i aria-hidden="true" class="far fa-arrow-alt-circle-up scrollToTop" title="Scroll Up"></i></a>');
$(window).scroll(function(){
	if ($(this).scrollTop() > 100) {
		$('.scrollToTop').fadeIn(100);
	} else {
		$('.scrollToTop').fadeOut(100);
	}
});
$('.scrollToTop').click(function(){
	$('html, body').animate({scrollTop : 0},800);
});

//Responsive iFrame
$('iframe[src*="youtube"]').wrap('<div class="responsiveIframe"/>');

//Nav
    //$( ".nav > .trigger, .mobile_nav > .trigger" ).each(function(){$( this ).children('a:first').attr( "onclick", "return false" );});

    $('nav .drop').each(function() {
       if ($(this).find("li").length >= 8) {
           $(this).addClass('column_nav');
       }
    });

	$('.navicon').click(function() {
	    if($('.mobile_nav').is(':visible')){
    	    $('.mobile_nav').fadeOut(100).attr('aria-hidden', 'true').attr('aria-expanded', 'false');
    		$('body,html').css({'overflow':'auto','height':'auto'});
    		$('.headerWrap').css({'position':'relative','z-index':'0'});
    		$('.navicon').find('i').attr( "class", "fal fa-bars");
    		$('button.navicon').attr( "aria-label", "Open Mobile Menu");
	    }else{
	        $('.mobile_nav').fadeIn(400).attr('aria-hidden', 'false').attr('aria-expanded', 'true');
	        $('body,html').css({'overflow':'hidden','height':'0'});
	        $('.headerWrap').css({'position':'fixed','z-index':'9999'});
	        $('.navicon').find('i').attr( "class", "fal fa-times");
	        $('button.navicon').attr( "aria-label", "Close Mobile Menu");
	    }
	});

	//$('.mobile_nav .exit').click(function() {
		//$('.mobile_nav').hide().attr('aria-hidden', 'true');
		//$('.mobile_screen').attr('aria-hidden','true').hide();
		//$("body").css({'overflow':'auto','height':'auto'});
	//});

	var hoverTimeout;
    $('nav .trigger').hover(function() {
        clearTimeout(hoverTimeout);
        $(this).addClass('open').find('.drop').attr('aria-hidden', 'true').attr('aria-expanded', 'false');
        $('.trigger').not(this).removeClass("open");
    }, function() {
        var $self=$(this);
        hoverTimeout = setTimeout(function() {
            $self.removeClass('open').find('.drop').attr('aria-hidden', 'true').attr('aria-expanded', 'false');
        }, 250);
    });

    $('nav .trigger > a').focusin(function() {
        var parent = $(this).parent();
        parent.addClass('open').find('.drop').attr('aria-hidden','false').attr('aria-expanded', 'true');
        $('.trigger').not(parent).removeClass("open");
    });

    $('nav .drop a:last,.nav .drop input').focusout(function() {
        var parent = $(this).parents().find('.trigger');
        parent.removeClass('open').find('.drop').attr('aria-hidden','true').attr('aria-expanded', 'false');
    });

    $('.mobile_nav > .trigger > *').click(function(){
        var parent = $(this).closest('.trigger');
        var icon = parent.find('.trigger_icon');
        var aonclick = parent.find('a:first').is('[onclick]');
        if($(this).is('a')){
            if(aonclick === true){
            	$('.trigger').not(parent).removeClass("open").find('i').attr( "class", "fal fa-plus");
            	parent.toggleClass("open");
                if(parent.hasClass('open')){
                    $(icon).find('i').attr( "class", "fal fa-minus");
                }else{
                    $(icon).find('i').attr( "class", "fal fa-plus");
                }
            }
        }
        if($(this).hasClass('trigger_icon')){
            parent.toggleClass("open");
    		$('.mobile_nav > .trigger').not(parent).removeClass("open").find('i').attr( "class", "fal fa-plus");
            if(parent.hasClass('open')){
                $(icon).find('i').attr( "class", "fal fa-minus");
                $('.open > .drop').attr('aria-hidden','false');
            }else{
                $(icon).find('i').attr( "class", "fal fa-plus");
                $('.drop').attr('aria-hidden','true');
            }
        }
    });

	$('button.mobile_closer').click(function(){
	    $('.mobile_nav').fadeOut(100).attr('aria-hidden', 'true').attr('aria-expanded', 'false');
		$('body,html').css({'overflow':'auto','height':'auto'});
		$('.headerWrap').css({'position':'relative','z-index':'0'});
		$('.navicon').find('i').attr( "class", "fal fa-bars");
		$('button.navicon').attr( "aria-label", "Open Mobile Menu");
	});

//Slideshow
$('.slideshow').slick({
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,
  infinite: true,
  fade: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:'<button class="prev" title="Previous Slide"><i class="fal fa-chevron-left"></i></button>',
  nextArrow:'<button class="next" title="Next Slide"><i class="fal fa-chevron-right"></i></button>'
});

$(window).on('load resize orientationchange', function() {
    $('.mobile_slider').each(function(){
    var $carousel = $(this);
        if ($(window).width() > 600) {
            if ($carousel.hasClass('slick-initialized')) {
                $carousel.slick('unslick');
            }
        }
        else{
            if (!$carousel.hasClass('slick-initialized')) {
                $carousel.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    mobileFirst: true,
                    prevArrow:'<button class="slide_nav prev" title="Previous Slide"><i class="fal fa-chevron-left"></i></button>',
                    nextArrow:'<button class="slide_nav next" title="Next Slide"><i class="fal fa-chevron-right"></i></button>'
                });
            }
        }
    });
});

$('.slide').each(function(){
    $(this).removeAttr("aria-describedby");
});
