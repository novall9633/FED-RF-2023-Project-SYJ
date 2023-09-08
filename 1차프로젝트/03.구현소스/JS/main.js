let pg_num = 0;
let sts_wheel = 0;
let total_pg = 0;
let ele_page;
let pos_start = 0,
  pos_end = 0;
let hcode = "";
let icode = "";
let clickSts = 0;
const TIME_SLIDE = 400;
let nextSeq = 0;

setTimeout(() => {
  window.scrollTo(0, 0);
}, 500);

window.addEventListener("touchstart", touchStart);
window.addEventListener("touchend", touchEnd);
window.addEventListener("wheel", wheelFn);
window.addEventListener("DOMContentLoaded", loadFn);

const domFn = {
  // 요소선택함수 ////////
  qs: (x) => document.querySelector(x),
  qsEl: (el, x) => el.querySelector(x),
  qsa: (x) => document.querySelectorAll(x),
  qsaEl: (el, x) => el.querySelectorAll(x),

  // 이벤트셋팅함수
  addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
}; /////// domFn 객체 /////////////

function loadFn() {
    ele_page = domFn.qsa(".page");
    total_pg = ele_page.length;
    // 이동버튼
    const abtn = domFn.qsa('.abtn');
    //슬라이드 이미지//////////////////////
    let swipWrap = domFn.qs(".swip-wrap");
  let swipNav = domFn.qs(".swip-nav");
  icode += `<ol class="indic">`;
  liveData.forEach((ele,idx) => {
  if(idx==0){
      hcode += `<div class="slide-img on"><div class="slide-img-info"><p class="manu-comp"><img src="./imgs/main_visual_icon_${ele.img}.png" /></p><h1 class="ball-name info">${ele.ballName}</h1><h2 class="ball-color info">${ele.color}</h2><h3 class="ball-intro info">${ele.info}</h3><div class="btn-more info"><a href="#">MORE<img src="imgs/pin.png" alt="볼링핀"></a></div></div><div class="bgimg"><div class="dtimg"><img src="./imgs/main_visual${ele.bImg}.jpg" alt="${ele.ballName}" /></div></div></div>`;
      icode += `<li class="on"><img src="./imgs/dot1.png" alt="흰색"><img src="./imgs/dot2.png" alt="회색"></li>`;
  }else{
    hcode += `<div class="slide-img"><div class="slide-img-info"><p class="manu-comp"><img src="./imgs/main_visual_icon_${ele.img}.png" /></p><h1 class="ball-name info">${ele.ballName}</h1><h2 class="ball-color info">${ele.color}</h2><h3 class="ball-intro info">${ele.info}</h3><div class="btn-more info"><a href="#"> MORE <img src="imgs/pin.png" alt="볼링핀"></a></div></div><div class="bgimg"><div class="dtimg"><img src="./imgs/main_visual${ele.bImg}.jpg" alt="${ele.ballName}" /></div></div></div>`;    
    icode += `<li><img src="./imgs/dot1.png" alt="흰색"><img src="./imgs/dot2.png" alt="회색"></li>`;
    }
});
icode += `</ol>`;
swipWrap.innerHTML = hcode;
swipNav.innerHTML = icode;
//슬라이드 이미지//////////////////////

const indic = domFn.qsa('.indic li');
swipWrap.querySelectorAll('.slide-img').forEach((ele,idx)=>{
    ele.setAttribute('data-seq',idx);
});
swipNav.querySelectorAll('li').forEach((ele,idx)=>{
    ele.setAttribute('data-seq',idx);
});
// 화살표 클릭시
abtn.forEach(ele=>{
    domFn.addEvt(ele,'click',abtnSlide);
});
// 블릿 클릭시
indic.forEach((ele)=>{
  domFn.addEvt(ele,'click',()=>{
    nextSeq = ele.getAttribute('data-seq');
    swipWrap.querySelectorAll('.slide-img').forEach((ele,idx)=>{
      if(idx==nextSeq) {
        ele.classList.add('on');
        indic[idx].classList.add('on');
      }
      else {
        ele.classList.remove('on');
        indic[idx].classList.remove('on');
      }
    });
  })
});
///////////////abtnSlide함수//////////////////////
function abtnSlide(){
    if(clickSts) return;
    clickSts =1;
    setTimeout(()=>{
        clickSts=0;
    },TIME_SLIDE);

    // 현재 순번 알아내기
    swipWrap.querySelectorAll('.slide-img').forEach((ele,idx)=>{
      if(ele.classList.contains('on')) nextSeq = idx;
    });
    console.log("전 순번:",nextSeq);
    let isRight = this.classList.contains('swip-next');
    let eachOne = domFn.qsa('.slide-img');
    
    if(isRight){
      nextSeq++;
      if(nextSeq>=eachOne.length) {nextSeq = 0;}
    }else{
      nextSeq--;
      if(nextSeq<0)
      { nextSeq = eachOne.length-1;}
    }
    // let nowSeq = swipWrap.querySelectorAll('.slide-img')[isRight?1:0].getAttribute('data-seq')
    console.log("현재:",nextSeq);
    swipWrap.querySelectorAll('.slide-img').forEach((ele,idx)=>{
      if(idx==nextSeq) {
        ele.classList.add('on');
        indic[idx].classList.add('on');
      }
      else {
        ele.classList.remove('on');
        indic[idx].classList.remove('on');
      }
    });
  }/////////////abtnSlide함수//////////////////
} /////////loadFn함수////////////////////////////

/******************************************************************** 
    함수명 : wheelFn
    기능 : 마우스 휠 작동시 페이지이동
********************************************************************/
function wheelFn(e) {
  if (sts_wheel) return;
  sts_wheel = 1;
  setTimeout(() => {
    sts_wheel = 0;
  }, 700);

  let delta = e.wheelDelta;

  if (delta < 0) {
    pg_num++;
  } else if (delta > 0) {
    pg_num--;
  }

  if (pg_num < 0) pg_num = 0;
  if (pg_num == total_pg) pg_num = total_pg - 1;

  console.log("delta:", delta, "/pg_num:", pg_num);
  window.scrollTo(0, window.innerHeight * pg_num);
} // wheelFn 함수////////////////////////////

//  터치시작 이벤트 호출 함수 /////////////
function touchStart(e) {
  pos_start = e.touches[0].screenY;
} //touchStart함수////////////////////

//  터치끝 이벤트 호출 함수 /////////////
function touchEnd(e) {
  //e는 이벤트 전달변수
  pos_end = e.changedTouches[0].screenY;

  let result = pos_start - pos_end;

  if (result == 0) return;
  movePage(result > 0 ? 1 : 0);
} //touchEnd함수////////////////////

//// 이벤트 처리함수 : 화면이동 /////
function movePage(dir) {
  if (dir) {
    pg_num++;
  } else if (!dir) {
    pg_num--;
  }

  if (pg_num < 0) pg_num = 0;
  if (pg_num == total_pg) pg_num = total_pg - 1;

  window.scrollTo(0, ele_page[pg_num].offsetTop);
} /////movePage함수 /////////////
