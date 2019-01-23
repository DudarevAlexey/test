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

        $(".main").owlCarousel({
            loop: true,
            dots: true,
            nav: true,
            animateOut: 'fadeOut',
            items: 1,
            mouseDrag: true,
            touchDrag: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true
        });
        $(".main").owlCarousel({
            loop: true,
            dots: true,
            nav: true,
            animateOut: 'fadeOut',
            items: 1,
            mouseDrag: true,
            touchDrag: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true
        });
        $('.owl-history').owlCarousel({
            items: 3,
            loop: true,
            margin: 10,
            center: true,
            merge: true,
            mouseDrag: true,
            touchDrag: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
        })

        //History slider

        function detect_active() {
            var get_active = $("#dp-slider .dp_item:first-child").data("class");
            $("#dp-dots li").removeClass("active");
            $("#dp-dots li[data-class=" + get_active + "]").addClass("active");
            $("#dp-slider .dp_item").removeClass("active");
            $("#dp-slider .dp_item[data-class=" + get_active + "]").addClass("active");
        }
        $("#dp-next").click(function() {
            var total = $(".dp_item").length;
            $("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
            $.each($('.dp_item'), function(index, dp_item) {
                $(dp_item).attr('data-position', index + 1);
            });
            detect_active();

        });

        $("#dp-prev").click(function() {
            var total = $(".dp_item").length;
            $("#dp-slider .dp_item:last-child").hide().prependTo("#dp-slider").fadeIn();
            $.each($('.dp_item'), function(index, dp_item) {
                $(dp_item).attr('data-position', index + 1);
            });

            detect_active();
        });

        $("#dp-dots li").click(function() {
            $("#dp-dots li").removeClass("active");
            $(this).addClass("active");
            var get_slide = $(this).attr('data-class');
            $("#dp-slider .dp_item").removeClass("active");
            $("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider").fadeIn().addClass("active");
            $.each($('.dp_item'), function(index, dp_item) {
                $(dp_item).attr('data-position', index + 1);
            });
        });

        $("body").on("click", "#dp-slider .dp_item:not(:first-child)", function() {
            var get_slide = $(this).attr('data-class');
            $("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider").fadeIn();
            $.each($('.dp_item'), function(index, dp_item) {
                $(dp_item).attr('data-position', index + 1);
            });

            detect_active();
        });

        //Map counters

        var marker = true;

        function get() {
            var dataStart1 = $('.count-score').attr('data-start');
            var dataFinish1 = $('.count-score').attr('data-finish');
            $('.count-score').each(function() {
                $(this).prop('Counter', dataStart1).animate({
                    Counter: dataFinish1
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            $(".progressbar1").circularProgress({
                line_width: 5,
                color: "#E62E2E",
                width: '340px',
                height: '340px',
                starting_position: 54,
                percent: 0,
            }).circularProgress('animate', 21, 1000);
            marker = false;
        }

        $(window).on('scroll', function() {
            if ($(window).scrollTop() > $('.progressbar1').offset().top - $(window).height() * 0.5) {
                if (marker) {
                    get();
                }
            }
        });

        var marker2 = true;

        function get2() {
            var dataStart2 = $('.count-score2').attr('data-start');
            var dataFinish2 = $('.count-score2').attr('data-finish');
            $('.count-score2').each(function() {
                $(this).prop('Counter', dataStart2).animate({
                    Counter: dataFinish2
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            $(".progressbar2").circularProgress({
                line_width: 6,
                color: "#E62E2E",
                width: '290px',
                height: '290px',
                starting_position: 50,
                percent: 0,
            }).circularProgress('animate', 61, 1000);
            marker2 = false;
        }

        $(window).on('scroll', function() {
            if ($(window).scrollTop() > $('.progressbar2').offset().top - $(window).height() * 0.7) {
                if (marker2) {
                    get2();
                }
            }
        });

        var marker3 = true;

        function get3() {
            var dataStart3 = $('.count-score3').attr('data-start');
            var dataFinish3 = $('.count-score3').attr('data-finish');
            $('.count-score3').each(function() {
                $(this).prop('Counter', dataStart3).animate({
                    Counter: dataFinish3
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            $(".progressbar3").circularProgress({
                line_width: 6,
                color: "#E62E2E",
                width: '290px',
                height: '290px',
                starting_position: 0,
                percent: 0,
            }).circularProgress('animate', 34, 1000);
            marker3 = false;
        }

        $(window).on('scroll', function() {
            if ($(window).scrollTop() > $('.progressbar3').offset().top - $(window).height() * 0.6) {
                if (marker3) {
                    get3();
                }
            }
        });

        var marker4 = true;

        function get4() {
            var dataStart4 = $('.count-score4').attr('data-start');
            var dataFinish4 = $('.count-score4').attr('data-finish');
            $('.count-score4').each(function() {
                $(this).prop('Counter', dataStart4).animate({
                    Counter: dataFinish4
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            $(".progressbar4").circularProgress({
                line_width: 6,
                color: "#E62E2E",
                width: '290px',
                height: '290px',
                starting_position: 54,
                percent: 0,
            }).circularProgress('animate', 90, 1000);
            marker4 = false;
        }

        $(window).on('scroll', function() {
            if ($(window).scrollTop() > $('.progressbar4').offset().top - $(window).height() * 0.7) {
                if (marker4) {
                    get4();
                }
            }
        });

    });

    //Popup: politics, history slider

    jQuery(document).ready(function($) {
        $('.personal').magnificPopup({
            type: 'inline'
        });
        $('.popup-youtube').magnificPopup({
            type: 'iframe'
        });
    });

    //Career

    if (window.matchMedia('(max-width: 1050px)').matches) {
        $('.right .item:nth-child(3) .title').text('Новичок');
        $('.right .item:nth-child(3) .text').text('Начинающий сотрудник, требующий внутрифирменной профессиональной подготовки');

        $('.right .item:nth-child(2) .title').text('Развивающийся сотрудник');
        $('.right .item:nth-child(2) .text').text('Сотрудник, выполняющий задачи в рамках должностных обязанностей, прошедший первую калибровку на 95% и выше по соответствию стандартам');

        $('.right .item:nth-child(1) .title').text('Уверенный профессионал');
        $('.right .item:nth-child(1) .text').text('Сотрудник, обладающий устойчивыми знаниями и навыками в определенной функциональной области. Устойчивая ролевая модель профессионального поведения');

        $('.left .item:nth-child(3) .title').text('Руководитель оперативного контура управления');
        $('.left .item:nth-child(3) .text').text('Сотрудник, управляющий командой (от 4 до 60 чел.). Отвечает за исполнение курируемых проектов и задач. Обладает знаниями и навыками в области управления результативностью');

        $('.left .item:nth-child(2) .title').text('Руководитель тактического контура управления');
        $('.left .item:nth-child(2) .text').text('Сотрудник, обладающий уникальной экспертизой, глубокими знаниями, управляет руководителями оперативного контура. Отвечает за результаты деятельности команд');

        $('.left .item:nth-child(1) .title').text('Руководитель стратегического контура управления');
        $('.left .item:nth-child(1) .text').text('Сотрудник, определяющий миссию, стратегию и видение. Обеспечивает их реализацию через взаимодействие внутри команды управленцев');
    }

    //Menu

    if (window.matchMedia('(max-width: 1199px)').matches) {
        $('.aside .aside-wrapper .logo').click(function() {
            $('.menu').removeClass('open');
        });
        $('.mobile-close-aside').click(function() {
            $('.menu').removeClass('open');
            $('.mobile-close-aside').removeClass('open');
        });
        $('.mobile-checkbox').click(function() {
            if ($('.menu').hasClass('open')) {
                $('.menu').removeClass('open');
                $('.mobile-close-aside').removeClass('open');
            } else {
                $('.menu').addClass('open');
                $('.mobile-close-aside').addClass('open');
            }
        });
    }

    //Phone mask

    $(function() {
        $(".masked-input").mask("7(999) 999-9999");
        $(".masked-input").focus(function() {
            $('.masked-input').focus()
        });
    });

    //Personal checked

    // $('.wrapper-personal .label input').click(function() {
    //     if ($('button').hasClass('checked')) {
    //         $('button').removeClass('checked');
    //     } else {
    //         $('button').addClass('checked');
    //     }
    // })
