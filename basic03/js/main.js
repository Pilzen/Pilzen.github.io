
$('.top_banner i').on('click', function () {
    $('.top_banner').slideUp();
});

$('.main_slide').on('init afterChange', function (e, s, c) {
    // console.log(e, s, c);
    $('.num').text((c ? c + 1 : 1) + "/" + s.slideCount);
    $('.main_visual .btn li').eq(c).addClass('on').siblings().removeClass('on');
    var current = $('.main_slide .slick-current');
    current.addClass('on').siblings().removeClass('on');
});

$('.main_visual .btn li').on('click', function () {
    var idx = $(this).index();
    $('.main_slide').slick('slickGoTo', idx);
});

$('.main_slide').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    afterChange: function () {
        console.log('바꼍네...')
    }
});

$('.main_movie i:first-child').on('click', function () {
    $('.main_movie video').trigger('pause')
});
$('.main_movie i:last-child').on('click', function () {
    $('.main_movie video').trigger('play')
});

$('#bgmovie').YTPlayer({
    videoURL: 'https://www.youtube.com/watch?v=Cxzzg7L3Xgc',
    containment: '.main_ytp',
    showControls: false,
    playOnlyIfVisible: true,
    autoPlay: true,
    mute: true,
    startAt: 0, opacity: 1
});

$('.main_ytp i:first-child').on('click', function () {
    $('#bgmovie').YTPPause();
})
$('.main_ytp i:last-child').on('click', function () {
    $('#bgmovie').YTPPlay();
})

/* Product Slide */

$('.product_slide').slick({
    slidesToShow: 5,
    centerMode: true, /* padding 효과 */
    arrows: false,  /* 버튼 삭제 */
})

$('.product_slide').on('afterChange', function (e, s, c) {
    $('.main_product .dots li').eq(c).addClass('on').siblings().removeClass('on')
});

$('.main_product i:first-child').on('click', function () {
    $('.product_slide').slick('slickPrev')
});

$('.main_product i:last-child').on('click', function () {
    $('.product_slide').slick('slickNext')
});

/* idx 는 li의 Number 0 ~ 5 */
$('.main_product .dots li').on('click', function () {
    var idx = $(this).index();
    $('.product_slide').slick('slickGoTo', idx)
})

$('.main_customer .tab_menu>li').on('click', function () {
    var i = $(this).index();
    $('.main_customer .tab_content>li').eq(i).addClass('on').siblings().removeClass('on');
    $(this).addClass('on').siblings().removeClass('on');
})

/* Foooter */

$('#link').on('change', function () {
    var lnk = $(this).val()
    lnk && window.open(lnk)

})






// console.log($("TTT", '.tab_test').index())

