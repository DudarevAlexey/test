$(document).ready(function() {

    //Owl-carousel

    $(".general-carousel").owlCarousel({
        loop: true,
        dots: false,
        nav: false,
        animateOut: 'fadeOut',
        items: 1,
        mouseDrag: true,
        touchDrag: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true
    });

    $(".inspiration-carousel").owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        navText: false,
        animateOut: 'fadeOut',
        items: 1,
        mouseDrag: true,
        touchDrag: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true
    });

    $('.mobile-button').click(function() {
        if ($('.mobile-button').hasClass('is-active')) {
            $('.mobile-button').removeClass('is-active');
            $('.header_nav').removeClass('active');
            $('.mobile-bg-overlay').removeClass('open');
        } else {
            $('.mobile-button').addClass('is-active');
            $('.header_nav').addClass('active');
            $('.mobile-bg-overlay').addClass('open');
        }
    });
    $('.mobile-bg-overlay').click(function() {
        $('.header_nav').removeClass('active');
        $('.mobile-button').removeClass('is-active');
        $(this).removeClass('open');
    });
    $('.header_nav ul li a').click(function() {
        $('.mobile-bg-overlay').removeClass('open');
        $('.header_nav').removeClass('active');
        $('.mobile-button').removeClass('is-active');
    });

})
