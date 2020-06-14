// function isElementInViewport(el) {

//     var rect = el.getBoundingClientRect();

//     return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom > (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right > (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

// document.addEventListener("scroll", function () {
//     const section2 = document.querySelector(".section2");
//     console.log(section2.clientHeight)
//     isElementInViewport(section2) ? 
//     section2.classList.add('animated') :
//     section2.classList.remove('animated');
//     // const section2 = document.querySelector('.section2');
    
   
// })
$(document).ready(function(){
    $(window).scroll(function(){
        var postionTop = $(document).scrollTop();
        var height = $(window).innerHeight();
        console.log(height *2);
        if(postionTop > height - 200){
            $('.section2').addClass('animated');
            $('.card1').addClass('show');
            $('.card2').addClass('show');
            $('.card3').addClass('show');
        }else{
            $('.section2').removeClass('animated');
            $('.card1').removeClass('show');
            $('.card2').removeClass('show');
            $('.card3').removeClass('show');
        }

        if(postionTop > height * 2){
            $('.aboutus').addClass('leftTrans');
            $('.info').addClass('rightTrans');
        }else{
            $('.aboutus').removeClass('leftTrans');
            $('.info').removeClass('rightTrans');
        }
    })
})
