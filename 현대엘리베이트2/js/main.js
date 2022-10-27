$(function () {
    $('.top_banner_slide').slick({
        arrows: false,
        dots: true,
    });

    $('.top_banner i').on('click', function () {
        $('.top_banner').slideUp(200);
        $('.main').addClass('on')
    });

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop()
        if (sct > 0) {
            $('.header .bottom').addClass('on')
        } else {
            $('.header .bottom').removeClass('on')
        }
    });

    $('.header .grobal').on('click', function () {
        $('.header .link').toggleClass('on')
    });

    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
    });

    $('.main_slide').on('afterChange', function (e, s, c) {
        $('.main_visual .page li').eq(c).addClass('on').siblings().removeClass('on');
        // c= 0,1,2
        $('.num strong').text("0" + (c + 1))
    });

    $('.page li').on('click', function () {
        var idx = $(this).index() // 0,1,2
        $('.main_slide').slick('slickGoTo', idx)
    })

    $('.main_visual .arrows i:first-child').on('click', function () {
        $('.main_slide').slick('slickPrev')
    })
    $('.main_visual .arrows i:last-child').on('click', function () {
        $('.main_slide').slick('slickNext')
    });

    $('.left_slider').slick({
        arrows: false,
        fade: true,
        asNavFor: '.right_slider',
    });

    $('.right_slider').slick({
        arrows: false,
        slidesToShow: 5,
        asNavFor: '.left_slider',
    });

    $('.main_build .wbox .right .arrows i:first-child').on('click', function () {
        $('.left_slider').slick('slickPrev')
    });
    $('.main_build .wbox .right .arrows i:last-child').on('click', function () {
        $('.left_slider').slick('slickNext')
    });


    $('.solution_slider').slick({
        centerMode: true,
        centerPadding: '300px',
        arrows: false,
        dots: true,
    })
    $('.solution_slider').on('afterChange', function (e, s, c) {
        console.log(c)
        $('.solution_con .box').eq(c).addClass('on').siblings().removeClass('on');

    })

    $('.main_solution .arrows div:first-child').on('click', function () {
        $('.solution_slider').slick('slickPrev')
    });
    $('.main_solution .arrows div:last-child').on('click', function () {
        $('.solution_slider').slick('slickNext')
    });

    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000)
    })

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop()

        sct > 300 ? $('.to_top').fadeIn() : $('.to_top').fadeOut()


        // if (sct > 300) {
        //     $('.to_top').fadeIn()
        // }
        // else {
        //     $('.to_top').fadeOut()
        // }
    })

})