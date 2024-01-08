import { useContext, useEffect, useRef } from "react";
import "../../css/golfTeam.css";
import { golf_mem } from "../data/golf";
import $ from "jquery";
import { nCon } from "../modules/nContext";
export function GolfTeam(props) {
    const myCon = useContext(nCon);
    // 애니시간
    const A_TM = 4000;

    // 광클상대변수(1-불허용,0-허용)
    let cSts = 0;
    // 슬라이드 순번
    const sNum = useRef(0);
    const autoT = useRef(null);

    useEffect(() => {
        myCon.setLogoColor(null);
    });
    
    useEffect(() => {
        autoT.current = null;
        sNum.current = 0;
        
        console.log("useEffect 발동");
        autoT.current = setTimeout(autoSlide, A_TM);
        return () => {
            autoT.current=null;
            console.log(autoT.current);
        };
    },[]);
    
    const autoSlide = () => {
        onSlide();
        console.log("autoSlide:" + sNum.current);
        
        sNum.current++;
        if (sNum.current > 3) {
            sNum.current = 0;
        }
        autoT.current = setTimeout(autoSlide, A_TM);
        console.log(autoT.current);
    };
    
    const clearAuto = () => {
        clearTimeout(autoT.current);
        autoT.current = setTimeout(autoSlide, A_TM);
        console.log(autoT.current);
    };

    function onSlide() {
        console.log("onSlide:" + sNum.current);
        $(".subgt-cont").eq(sNum.current).addClass("on").siblings().removeClass("on");
        $(".subgt-bull ul li").eq(sNum.current).addClass("on").siblings().removeClass("on");
    }

    const goSlide = (e) => {
        const tg = e.target;
        const sldBox = $(tg).parent().parent().parent().find(".subgt-cont");
        const sCnt = sldBox.length;

        // 광클금지
        if (cSts) return;
        cSts = 1;
        setTimeout(() => (cSts = 0), 600);

        // 오른쪽버튼 여부
        let isR = $(tg).is(".subgt-nextBtn");

        if (isR) {
            sNum.current++;
            if (sNum.current > 3) sNum.current = 0;
        } else {
            // 슬라이드순번 감소(0보다 작으면 끝번호)
            sNum.current--;
            if (sNum.current < 0) sNum.current = sCnt - 1;
        } /////// else /////////
        onSlide();
        clearAuto();
    };

    const makeArr = () => {
        let arr = golf_mem;
        const hcode = [];
        for (let i = 0; i < arr.length; i++) {
            hcode[i] = (
                <>
                    <div className={i === 0 ? "subgt-cont on" : "subgt-cont"} key={i}>
                        <ul>
                            <li>
                                <div className="subgt-memImg">
                                    <img src={process.env.PUBLIC_URL + "images/bg.jpg"} alt="bg" />
                                    <img src={process.env.PUBLIC_URL + golf_mem[i].src} alt={golf_mem[i].name} />
                                </div>
                            </li>
                            <li>
                                <div className="subgt-memInfo">
                                    <p>PROFESSIONAL PLAYER {golf_mem[i].no}</p>
                                    <h1>{golf_mem[i].ename}</h1>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>입회</th>
                                                <th>{golf_mem[i].presence}</th>
                                            </tr>
                                        </thead>
                                        <tbody>{awards(golf_mem[i].awards)}</tbody>
                                    </table>
                                </div>
                            </li>
                        </ul>
                    </div>
                </>
            );
        }
        return hcode;
    };
    // 선수 이력 코드
    function awards(data) {
        let arr = data;
        const hcode = [];
        for (let i = 0; i < arr.length; i++) {
            hcode[i] = (
                <>
                    <tr key={i}>
                        <td>{i === 0 ? "수상" : ""}</td>
                        <td>{arr[i]}</td>
                    </tr>
                </>
            );
        }
        return hcode;
    }
    const makeBull = () => {
        let arr = golf_mem;
        const hcode = [];
        for (let i = 0; i < arr.length; i++) {
            hcode[i] = (
                <>
                    <li className={i === 0 ? "on" : ""} key={i} onClick={bullSlide}>
                        {arr[i].name}
                    </li>
                </>
            );
        }
        return hcode;
    };
    const bullSlide = (e) => {
        const tg = e.target;
        const tgidx = $(tg).index();

        // 광클금지
        if (cSts) return;
        cSts = 1;
        setTimeout(() => (cSts = 0), 600);

        sNum.current = tgidx;
        onSlide();
        clearAuto();
    };

    return (
        <>
            <div className="subgt">
                <div className="subgt-top">
                    <h3>Golf Team</h3>
                </div>
            </div>
            <div className="subgt-wrap">
                {makeArr()}
                <div className="subgt-slide">
                    <div className="subgt-arrow">
                        <div className="subgt-prevBtn gfBtn" onClick={goSlide}>
                            〈
                        </div>
                        <div className="subgt-nextBtn gfBtn" onClick={goSlide}>
                            〉
                        </div>
                    </div>
                    <div className="subgt-line">
                        <div className="subgt-bull">
                            <ul>{makeBull()}</ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
