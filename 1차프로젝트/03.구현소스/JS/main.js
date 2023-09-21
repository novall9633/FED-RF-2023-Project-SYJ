import domFn from "./dom.js";
import { liveData, center, subMenu, product, subData} from "./data.js";

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
let indiList;

setTimeout(() => {
    window.scrollTo(0, 0);
}, 500);

window.addEventListener("touchstart", touchStart);
window.addEventListener("touchend", touchEnd);
window.addEventListener("wheel", wheelFn);
window.addEventListener("DOMContentLoaded", loadFn);



function loadFn() {
    const sub_menu = domFn.qs('.gnb>ul');
    for(let x in subMenu){
        sub_menu.innerHTML += 
        `
        <li>
            <a href="#">${x}</a>
            <div class="sub-menu">
                <ol>
                ${subMenu[x].map(val=>`
                    <li>
                        <a href="#">${val}</a>
                    </li>
                `).join('')}
                </ol>
            </div>
        </li>
        `;
    }
    ele_page = domFn.qsa(".page");
    total_pg = ele_page.length;
    // 이동버튼
    const abtn = domFn.qsa(".abtn");
    //슬라이드 이미지//////////////////////
    let swipWrap = domFn.qs(".swip-wrap");
    let swipNav = domFn.qs(".swip-nav");
    icode += `<ol class="indic">`;
    liveData.forEach((ele, idx) => {
        if (idx == 0) {
            hcode += `<div class="slide-img on">
            <div class="slide-img-info">
                <p class="manu-comp"><img src="./imgs/main_visual_icon_${ele.img}.png" /></p>
                <h1 class="ball-name info">${ele.ballName}</h1>
                <h2 class="ball-color info">${ele.color}</h2>
                <h3 class="ball-intro info">${ele.info}</h3>
                <a href="./sub.html?pro=${ele.getNum}"> 
                <div class="btn-more info">
                        MORE 
                        <img src="imgs/pin.png" alt="볼링핀" />
                    </a>
                </div>
            </div>
            <div class="bgimg">
                <div class="dtimg"><img src="./imgs/main_visual${ele.bImg}.jpg" alt="${ele.ballName}" /><img
                src="./imgs/main_visual${ele.bImg}_m.jpg"
                alt="${ele.ballName}_m"
            /></div>
            </div>
        </div>`;
            icode += `<li class="on"><img src="./imgs/dot1.png" alt="흰색"><img src="./imgs/dot2.png" alt="회색"></li>`;
        } else {
            hcode += `<div class="slide-img">
            <div class="slide-img-info">
                <p class="manu-comp"><img src="./imgs/main_visual_icon_${ele.img}.png" /></p>
                <h1 class="ball-name info">${ele.ballName}</h1>
                <h2 class="ball-color info">${ele.color}</h2>
                <h3 class="ball-intro info">${ele.info}</h3>
                <a href="./sub.html?pro=${ele.getNum}">
                <div class="btn-more info">
                         MORE 
                    <img src="imgs/pin.png" alt="볼링핀" />
                </a>
                </div>
            </div>
            <div class="bgimg">
                <div class="dtimg">
                    <img src="./imgs/main_visual${ele.bImg}.jpg" alt="${ele.ballName}" /><img
                        src="./imgs/main_visual${ele.bImg}_m.jpg"
                        alt="${ele.ballName}_m"
                    />
                </div>
            </div>
        </div>`;
            icode += `<li><img src="./imgs/dot1.png" alt="흰색"><img src="./imgs/dot2.png" alt="회색"></li>`;
        }
    });
    icode += `</ol>`;
    swipWrap.innerHTML = hcode;
    swipNav.innerHTML = icode;
    //슬라이드 이미지//////////////////////

    const indic = domFn.qsa(".indic li");
    swipWrap.querySelectorAll(".slide-img").forEach((ele, idx) => {
        ele.setAttribute("data-seq", idx);
    });
    swipNav.querySelectorAll("li").forEach((ele, idx) => {
        ele.setAttribute("data-seq", idx);
    });
    // 화살표 클릭시
    abtn.forEach((ele) => {
        domFn.addEvt(ele, "click", abtnSlide);
    });
    // 블릿 클릭시
    indic.forEach((ele) => {
        domFn.addEvt(ele, "click", () => {
            nextSeq = ele.getAttribute("data-seq");
            swipWrap.querySelectorAll(".slide-img").forEach((ele, idx) => {
                if (idx == nextSeq) {
                    ele.classList.add("on");
                    indic[idx].classList.add("on");
                } else {
                    ele.classList.remove("on");
                    indic[idx].classList.remove("on");
                }
                clearAuto();
            });
        });
    });

    // product 볼 소개
    let proBox = domFn.qs('.pro-cont .pro-box');
    product.forEach(ele=>{
        proBox.innerHTML += `
        <li>
            <a href="./sub.html?pro=${ele.getNum}">
                <div class="pro-box-img">
                    <img src="./imgs/${ele.img}.jpg" alt="${ele.ballName}">
                </div>
                <div class="pro-box-intro">
                    <p>${ele.ballName}</p>
                </div>
            </a>
        </li>
        `
    });

    //화살표 클릭시 발생되는 함수/
    function abtnSlide() {
        if (clickSts) return;
        clickSts = 1;
        setTimeout(() => {
            clickSts = 0;
        }, TIME_SLIDE);

        let isRight = this.classList.contains("swip-next");

        onSlide(isRight);

        clearAuto();
    } /////////////abtnSlide함수//////////////////

    // 슬라이드 함수(isRight=1?오른쪽:왼쪽)
    function onSlide(isRight) {
        // 현재 순번 알아내기
        swipWrap.querySelectorAll(".slide-img").forEach((ele, idx) => {
            if (ele.classList.contains("on")) nextSeq = idx;
        });

        if (isRight) {
            nextSeq++;
            if (nextSeq >= domFn.qsa(".slide-img").length) {
                nextSeq = 0;
            }
        } else {
            nextSeq--;
            if (nextSeq < 0) {
                nextSeq = domFn.qsa(".slide-img").length - 1;
            }
        }

        swipWrap.querySelectorAll(".slide-img").forEach((ele, idx) => {
            if (idx == nextSeq) {
                ele.classList.add("on");
                indic[idx].classList.add("on");
            } else {
                ele.classList.remove("on");
                indic[idx].classList.remove("on");
            }
        });
    } /////////////////////////onSlide함수///////////

    // 초기화
    hcode = "";
    let cbtn = domFn.qsa(".cbtn");
    let cenInfo = domFn.qs(".center-info");

    for (let x in center) {
        hcode += `
        <section class="center-info-wr">
            <div class="center-info-img center-info-wrap">
                <img src="./imgs/main_${center[x].img}.jpg" alt="${center[x]}점" />
            </div>
            <div class="center-info-txt center-info-wrap">
            <div class="txt-wrap">
                <p class="tEName">${center[x].eName}</p>
                <p class="tName">${x}점</p>
                <p class="tHInfo">${center[x].hInfo}</p>
                <p class="tBInfo">
                    ${center[x].bInfo}
                </p>
            </div>
            <div class="btnMore">READ MORE</div>
            </div>        
        </section>
        `;
    }
    cenInfo.innerHTML = hcode;

    cbtn.forEach((ele) => domFn.addEvt(ele, "click", goCenSlide));

    function goCenSlide() {
        if (clickSts) return;
        clickSts = 1;
        setTimeout(() => (clickSts = 0), TIME_SLIDE);

        let eachOne = cenInfo.querySelectorAll(".center-info-wr");

        isRight = this.classList.contains("cen-next");
        if (isRight) {
            rightSlide();
        } else {
            cenInfo.insertBefore(eachOne[eachOne.length - 1], eachOne[0]);

            cenInfo.style.left = "-100%";
            cenInfo.style.transition = "none";
            setTimeout(() => {
                // 4. left값 0으로 들어오기
                cenInfo.style.left = "0";

                // 5. 트랜지션주기
                cenInfo.style.transition = TIME_SLIDE + "ms ease-in-out";
            }, 0);
        }
        clearAuto();
    } //////goCenSlide함수///////////////
    function rightSlide() {
        cenInfo.style.left = "-100%";
        //2.트랜지션주기
        cenInfo.style.transition = TIME_SLIDE + "ms ease-in-out";
        // 이동시간 후 맨앞li 잘라서 맨뒤로 이동하기
        // appendChild(요소)
        setTimeout(() => {
            // 3.맨앞li 맨뒤로 이동
            cenInfo.appendChild(cenInfo.querySelectorAll(".center-info-wr")[0]);
            // 4.cenInfo left값 0
            cenInfo.style.left = "0";
            // 5.트랜지션 없애기
            cenInfo.style.transition = "none";
        }, TIME_SLIDE);
    }

    let autoI;
    let autoT;

    // 자동 슬라이드 함수//////////////
    function slideAuto() {
        autoI = setInterval(() => {
            onSlide(1);
            rightSlide();
        }, 5000);
    } //////////slideAuto함수//////////

    slideAuto();

    // 자동 슬라이드 방지 함수
    function clearAuto() {
        clearInterval(autoI);
        clearTimeout(autoT);
        autoT = setTimeout(slideAuto, 5000);
    } //clearAuto함수/////////////////

    indiList = domFn.qsa(".indi li");
    indiList.forEach((ele, idx) => {
        domFn.addEvt(ele, "click", () => {
            // 1. 전역 페이지 변수 업데이트 하기
            pg_num = idx; //메뉴 순번으로 업데이트
            // 2. 메뉴변경 함수 호출
            chgMenu();
        }); /////////////////addEvt ////////////////
    }); /////////forEach//////////
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

    window.scrollTo(0, window.innerHeight * pg_num);
    chgMenu();
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

/******************************************************************** 
    함수명 : chgMenu
    기능 : 마우스 휠 작동/메뉴클릭 시 메뉴변경
********************************************************************/

function chgMenu() {
    const comFn = (target) => {
        // target - 메뉴리스트요소
        target.forEach((ele, idx) => {
            if (idx == pg_num) ele.classList.add("on");
            else {
                ele.classList.remove("on");
            }
        });
    }; //////////////comFn함수///////////////
    comFn(indiList);
} //////chgMenu함수///////////////////
