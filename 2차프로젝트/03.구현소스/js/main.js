import dFn from "./dom.js";

//////////// 메뉴 열기 / 닫기 //////////////
$('.menuBtn').click(function(){
    if($('.menu-open').hasClass('on')===true){
        $('#menu').css({
            left:0
        });
        $('body').css({
            overflow:'hidden'
        });
        $('#main-visual').css({
            opacity:.7
        });
        $(this).find('.menu-open').removeClass('on').siblings().addClass('on');
    }
    else{
        $('#menu').css({
            left:'100%'
        });
        $('body').css({
            overflow:'visible'
        });
        $('#main-visual').css({
            opacity:1
        });
        $(this).find('.menu-close').removeClass('on').siblings().addClass('on');
    }
});
//////////// 메뉴 열기 / 닫기 //////////////

/////////////////메뉴 마우스 오버 /////////////////////////////////
$('.menu dl').mouseover(function(){
    if($(this).find('dd').length == 0){
        $(this).siblings().removeClass('active');
    }
    else{
        $(this).addClass('active').siblings().removeClass('active');
    }
});
/////////////////메뉴 마우스 오버 /////////////////////////////////

///////////////메인 비주얼 ////////////////////////////////////////
function chgSlide(num){
    // for(let x=0;x<($('.inner ul li').length-i);x++){
    //     console.log(x+i);
    //     $('.inner ul li').eq(i+x).addClass('on').siblings().removeClass('on').animate({opacity:1},5000);
    // }
    let index = $('.inner ul li').length - num; 
    console.log(index);
    $('.inner ul li').map(function(i,v){
        console.log($(v));
        $(v).eq(index+i).addClass('on').siblings().removeClass('on');
    });
}
// for(let i=0; i<$('.inner ul li').length;i++){
//     setTimeout(() => {
//         $('.inner ul li').eq(i).addClass('on').siblings().removeClass('on');
//         console.log(i);
//     }, 5000);
// }
// $('.inner ul li').map((v,i)=>{
//     console.log(v,i);
//     setTimeout(()=>{
//         i.eq(v).addClass('on').siblings().removeClass('on');
//     },5000);
// })

chgSlide(0)