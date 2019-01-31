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
        if ($('.mobile-button').toggleClass('is-active')) {
            $('nav').toggleClass('active');
        }
    });

})
