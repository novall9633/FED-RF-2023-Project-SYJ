import { Link } from "react-router-dom";
import { business } from "../data/business";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

import "../../css/busi.css";
import { useEffect } from "react";
import { scrollFn } from "../func/scrollFn";

export function Busi() {
    // 애니시간
    const A_TM = 900;
    // 광클상대변수(1-불허용,0-허용)
    let cSts = 0;
    // 슬라이드 순번
    let sNum = 0;

    const goSlide = (e) => {
        const tg = e.target;
        const sldBox = $(tg).parent().find("ul");
        const sCnt = sldBox.find("li").length;
        console.log(tg, sldBox, sCnt);

        // 광클금지
        if (cSts) return;
        cSts = 1;
        setTimeout(() => (cSts = 0), A_TM);

        // 오른쪽버튼 여부
        let isR = $(tg).is(".ab2");

        if (isR) {
            sldBox.animate({ left: "-100%" }, A_TM, () => {
                // 맨앞li 맨뒤로 이동
                sldBox
                    .append(sldBox.find("li").first())
                    // 동시에 left값은 0으로 초기화함!
                    .css({ left: "0%" });
            });
            sNum++;
            if (sNum >= sCnt) sNum = 0;
        } else {
            // 맨뒤li 맨앞으로 이동
            sldBox
                .prepend(sldBox.find("li").last())
                // left값 -50%
                .css({ left: "-100%" })
                // left값을 0으로 애니메이션
                .animate({ left: "0" }, A_TM);

            // 슬라이드순번 감소(0보다 작으면 끝번호)
            sNum--;
            if (sNum < 0) sNum = sCnt - 1;
        } /////// else /////////
    };

    const makeArr = () => {
        let arr = "Our Business".split("");
        let seqNum = 1;
        const hcode = [];
        for (let i = 0; i < arr.length; i++) {
            hcode[i] = <span style={{transitionDelay:seqNum*0.1+"s"}} key={i}>{arr[i]}</span>;
            seqNum++;
        }
        return hcode;
    };

    useEffect(() => {  
        const stage = $(".busi-info>h2");
        
        setInterval(() => {
            $(stage).addClass('on')
        }, 3000);
        setInterval(() => {
            $(stage).removeClass('on')
        }, 6000);
    },[]);
    
    return (
        <>
            <div id="main2">
                <article className="main2">
                    <div className="busi-wrap">
                        <div className="busi-info">
                            <h2>{makeArr()}</h2>
                            <h3>넥시스는 주거 환경과 생활 품격을 향상시키는 특판 가구 전문 기업입니다.</h3>
                            <p>
                                국내 제조 가구와 프리미엄 수입 브랜드, 특허 기반 폴딩 베드까지 <br />
                                공간의 성격에 따른 맞춤 사양을 제안합니다.
                            </p>
                        </div>
                        <div className="busi-gallery">
                            <div className="busi-gallery-txt"></div>
                        </div>
                    </div>
                    <div className="busi-slide">
                        <ul>
                            {business.map((v, i) => (
                                <li key={i}>
                                    <div className="busi-slide-img">
                                        <img src={process.env.PUBLIC_URL+v.src} alt={"biz0" + i} />
                                        <Link to={v.link}>
                                            <div className="busi-slide-box">
                                                <h2>{v.tit}</h2>
                                                <h3>{v.stit}</h3>
                                            </div>
                                        </Link>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="abtn ab1" onClick={goSlide}></div>
                        <div className="abtn ab2" onClick={goSlide}></div>
                    </div>
                </article>
            </div>
        </>
    );
}
