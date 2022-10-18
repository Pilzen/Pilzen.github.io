
// $('.open').on('click', function(){
//     $('.gnb').toggleClass('on')
// })
document.querySelector('.mopen').addEventListener('click', function () {
    document.querySelector('.gnb').classList.toggle('on')
    this.classList.toggle('on');
})

$('.top_banner i').on('click', function(){
    $('.top_banner').addClass('on');
})

$(window).on('resize', function(){
    $('.top_banner').removeClass('on')
})

document.querySelector('.top_banner button').addEventListener('click', function () {

    document.querySelector('.top_banner').styleDisplay.none;
})

document.querySelector('.mopen').addEventListener('click', function () { 
    document.querySelector('nav').classList.toggle('on')
    this.classList.toggle('on')
})