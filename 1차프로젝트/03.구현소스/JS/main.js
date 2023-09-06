let pg_num = 0;
let sts_wheel = 0;
let total_pg = 0;
let ele_page;
let pos_start=0, pos_end=0;

setTimeout(()=>{window.scrollTo(0,0)},500);

window.addEventListener('touchstart',touchStart);
window.addEventListener('touchend',touchEnd);
window.addEventListener('wheel',wheelFn);
window.addEventListener('DOMContentLoaded',loadFn);

const qs = x => document.querySelector(x);
const qsa = x => document.querySelectorAll(x);
const addEvt =(ele,evt,fn) => ele.addEventListener(evt,fn);

function loadFn(){
    ele_page = qsa('.page');
    total_pg = ele_page.length;
    

}/////////loadFn함수////////////////////////////

/******************************************************************** 
    함수명 : wheelFn
    기능 : 마우스 휠 작동시 페이지이동
********************************************************************/
function wheelFn(e){
    if(sts_wheel) return;
    sts_wheel = 1;
    setTimeout(()=>{sts_wheel=0},700); 

    let delta = e.wheelDelta;

    if(delta<0){
        pg_num++;
    }else if(delta>0){
        pg_num--;
    }

    if(pg_num < 0) pg_num=0;
    if(pg_num == total_pg) pg_num=total_pg-1;

    console.log("delta:",delta,"/pg_num:",pg_num);  
    window.scrollTo(0,window.innerHeight*pg_num);
    
} // wheelFn 함수////////////////////////////



//  터치시작 이벤트 호출 함수 /////////////
function touchStart(e){ 
    pos_start = e.touches[0].screenY;
} //touchStart함수////////////////////

//  터치끝 이벤트 호출 함수 /////////////
function touchEnd(e){ //e는 이벤트 전달변수
    pos_end = e.changedTouches[0].screenY;

    let result = pos_start - pos_end;

    if(result==0) return;
    movePage(result>0?1:0);

} //touchEnd함수////////////////////

//// 이벤트 처리함수 : 화면이동 /////
function movePage(dir){ 

    if(dir){
        pg_num++;
    }else if(!dir){
        pg_num--;
    }

    if(pg_num < 0) pg_num=0;
    if(pg_num == total_pg) pg_num=total_pg-1;

    window.scrollTo(0,ele_page[pg_num].offsetTop);
}/////movePage함수 /////////////