import { visual } from "../data/visual";
import $ from 'jquery';

import "../../css/banner.css";
import { useEffect, useState } from "react";

export function Banner() {
    const [idx,setIdx] = useState(0);
    const A_TM = 4000;
    let autoI;
    let autoT;
    
    const bulBtn = (e) => {
        // 선택 불릿
        let btn = $(e.currentTarget).parent();
        // 불릿 순서
        let Btnidx = $(btn).index();
        
        $(btn).addClass('active').siblings().removeClass('active');
        $('.inner ul li').eq(Btnidx).addClass('on').siblings().removeClass('on');
        
        setIdx(++Btnidx);

    };
    const makeBull = () => {
        let hcode = [];
        for (let i = 0; i < 4; i++) {
            hcode[i]=
            <li className={i==0?"active":""} key={i}>
                <a href="#" onClick={bulBtn}>
                    {"0"+(i+1)}
                </a>
            </li>;
        }
        return hcode;
    };
    useEffect(()=>{
        
    },[]);
    

    // // 자동 슬라이드 함수//////////////
    // function slideAuto() {
    //     autoI = setInterval(() => {
    //         // onSlide(1);
    //         // rightSlide();
    //     }, 5000);
    // } //////////slideAuto함수//////////

    // slideAuto();

    // // 자동 슬라이드 방지 함수
    // function clearAuto() {
    //     clearInterval(autoI);
    //     clearTimeout(autoT);
    //     autoT = setTimeout(slideAuto, 5000);
    // } //clearAuto함수/////////////////


    return (
        <>
            <article id="main-visual">
                <div className="inner">
                    <ul>
                        {visual.map((v, i) => (
                            <li key={i} className={i == 0 ? "on" : ""}>
                                <img src={v.src} alt={"메인비주얼" + i} />
                                <div className="main-txt-area">
                                    <dl>
                                        <dt>
                                            <h2>
                                                <span>
                                                    <img src={v.isrc} alt={"타이틀" + i} />
                                                </span>
                                                {v.tit}
                                            </h2>
                                        </dt>
                                        <dd>{v.stit}</dd>
                                    </dl>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="main-bul">
                    <ul>
                        {makeBull()}
                    </ul>
                </div>
            </article>
        </>
    );
}
