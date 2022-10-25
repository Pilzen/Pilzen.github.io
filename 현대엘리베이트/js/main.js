$(function () {
    $('.top_banner_slide').slick({
        arrows: false,
        dots: true,
    })
    $('.top_banner i').on('click', function () {
        $('.top_banner').slideUp(500)
        $('main').addClass('on')
    })
})

$(window).on('scroll', function () {
    console.log($(window).scrollTop())
    var sct = $(window).scrollTop()
    if (sct > 0) {
        $('.header .bottom').addClass('on')
    } else {
        $('.header .bottom').removeClass('on')
    }
});

$('.header .global').on('click', function () {
    $('.header .link').toggleClass('on')
})

$('.main_slide').slick({
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
});

$('.main_slide').on('afterChange', function (e, s, c) {
    // console.log(c)
    $('.main_visual .page li').eq(c).addClass('on').siblings().removeClass('on')
    $('.num strong').text("0" + (c + 1))
})

$('.page li').on('click', function () {
    var idx = $(this).index()
    $('.main_slide').slick('slickGoTo', idx)
})

$('.main_visual .arrows i:first-child').on('click', function () {
    $('.main_slide').slick('slickPrev')
})
$('.main_visual .arrows i:last-child').on('click', function () {
    $('.main_slide').slick('slickNext')
})

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
    $('.left_slider').slick('slickPrev)')
})
$('.main_build .wbox .right .arrows i:last-child').on('click', function () {
    $('.right_slider').slick('slickPrev)')
})




