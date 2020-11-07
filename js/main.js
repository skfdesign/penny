/*---------------------------------------------
Template name:  Clean
Version:        1.0

[Table of Content]

01: Preloader
02: Isotope
03: MagnificPopup
04: testimonial-slider
05: client-logo-slider
06: Counter up
07: Back to Top
08: back to top button animate
----------------------------------------------*/

(function($) {
    "use strict";


    var win = $(window);
    /* ======= Preloader ======= */
    win.on('load', function() {
        $('#loading-area').delay('500').fadeOut(2000);
    });


    /*==== Sidebar menu =====*/
	$('.menu-toggler').on('click', function () {	
        $('.sidebar-menu-container').addClass('active');
    });

	$('.close-toggler').on('click', function () {
        $('.sidebar-menu-container').removeClass('active');
    });
//    Menu Fix
$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('.menu').addClass('fixed-header');
//        $('nav div').addClass('visible-title');
    }
    else {
        $('.menu').removeClass('fixed-header');
//        $('nav div').removeClass('visible-title');
    }
});

    /*==== Isotope =====*/
    // bind filter button click
	var btn = $('.recent-work-filter li');
	btn.on('click', function () {
        var filterData = $(this).attr('data-filter');

        // use filterFn if matches value
        $('.masonry-list').isotope({
            filter: filterData,
        });

        btn.removeClass('active');
        $(this).addClass('active');
    });

    // portfolio list
    $('.masonry-list').isotope({
        itemSelector: '.img-card-item',
        percentPosition: true,
    });

    /*=========== MagnificPopup ============*/
    $('.video-play-btn').magnificPopup({
        type: 'video'
    });

    /*==== testimonial-slider =====*/
    $('.testimonial-slider').owlCarousel({
        loop: true,
        items: 3,
        nav: false,
        dots: false,
        smartSpeed: 700,
        autoplay: 5000,
        center: true,
        margin: 20,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 992 up
            992: {
                items: 3
            }
        }
    });

    /*==== client-logo-slider =====*/
    $('.client-logo-slider').owlCarousel({
        loop: true,
        items: 5,
        nav: false,
        dots: false,
        smartSpeed: 700,
        autoplay: 5000,
        margin: 30,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 425 up
            425: {
                items: 3
            },
            // breakpoint from 992 up
            992: {
                items: 5
            }
        }
    });
    /*==== working-hours-slider =====*/
    $('.working-hours-slider').owlCarousel({
        loop: true,
        items: 1,
        nav: false,
        dots: true,
        smartSpeed: 500,
        autoplay: false,
    });


    /*==== Counter up =====*/
    if ($('.counter').length) {
        $('.counter').counterUp({
            delay: 20,
            time: 2000
        });
    }

    /*===== Back to Top ======*/
    var scrl = $('#scroll-top');
    win.on('scroll', function() {
        //back to top button control
        if (win.scrollTop() > 300) {
            scrl.addClass('active');
        } else {
            scrl.removeClass('active');
        }

    });

	// scrollToTop
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fa fa-angle-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});

})(jQuery);