
$('.top_banner i').on('click', function () {
    $('.top_banner').slideUp();
});

$('.main_slide').on('init afterChange', function (e, s, c) {
    console.log(e, s, c);
    $('.num').text((c ? c + 1 : 1) + "/" + s.slideCount);
    $('.main_visual .btn li').eq(c).addClass('on').ciblings().remove('on')
})

// $('.main_visual .btn li').on('click', funtion(){
//     var idx = $(this).index();
//     $('.main_slide').slick('slickGoTo', idx)
// })

$('.main_slide').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    // afterChange: function () {
    //     console.log('바꼍네...')
    // }
});

