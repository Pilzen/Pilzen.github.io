$(function () {
    $('.top_banner_slide').slick({
        arrows: false,
        dots: true,
    })
    $('.top_banner i').on('click', function () {
        $('.top_banner').slideUp(500)
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


