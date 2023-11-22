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
