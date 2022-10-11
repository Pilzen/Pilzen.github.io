
// $('.open').on('click', function(){
//     $('.gnb').toggleClass('on')
// })
document.querySelector('.mopen').addEventListener('click', function () {
    document.querySelector('.gnb').classList.toggle('on')
    this.classList.toggle('on');
})