$(document).ready(function(){
    $(".list").on("click","a", function (event) {
        if (/#/.test(this.href)) {
          event.preventDefault();

          var id  = $(this).attr('href'),
              top = $(id).offset().top;

          $('body,html').animate({scrollTop: top}, 1500);
        }
    });
    $(".menu").on("click","a", function (event) {
        if (/#/.test(this.href)) {
          event.preventDefault();

          var id  = $(this).attr('href'),
              top = $(id).offset().top;

          $('body,html').animate({scrollTop: top}, 1500);
          $('.menu').removeClass('open');
          $('.mobile-close-aside').removeClass('open');
        }
    });
    $('.aside .aside-wrapper .logo').click(function() {
      $('html, body').animate({scrollTop: 0},500);
      $('.mobile-close-aside').removeClass('open');
      return false;
  });
});
