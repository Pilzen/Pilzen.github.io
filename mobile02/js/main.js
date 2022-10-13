
// $('.open').on('click', function(){
//     $('.gnb').toggleClass('on')
// })
document.querySelector('.mopen').addEventListener('click', function () {
    document.querySelector('.gnb').classList.toggle('on')
    this.classList.toggle('on');
})

document.querySelector('.top_banner button').addEventListener('click', function () {

    document.querySelector('.top_banner').style.Display: none;
})

document.querySelector('.mopen').addEventListener('click', function () {
    this.classList.toggle('on')
    document.querySelector('nav').classList.toggle('on')
})