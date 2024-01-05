import "../../css/golfTeam.css";
import { golf_mem } from "../data/golf";
import $ from "jquery";
export function GolfTeam(props) {
    // 애니시간
    const A_TM = 600;

    // 광클상대변수(1-불허용,0-허용)
    let cSts = 0;
    // 슬라이드 순번
    let sNum = 0;

    const goSlide = (e) => {
        const tg = e.target;
        const sldBox = $(tg).parent().parent().parent().find('.subgt-cont');
        const sCnt = sldBox.length;
        console.log(sldBox[sNum],sCnt);

        // 광클금지
        if (cSts) return;
        cSts = 1;
        setTimeout(() => (cSts = 0), A_TM);

        // 오른쪽버튼 여부
        let isR = $(tg).is(".subgt-nextBtn");

        if (isR) {
            sNum++;
            if (sNum >= sCnt) sNum = 0;
        } else {
            // 슬라이드순번 감소(0보다 작으면 끝번호)
            sNum--;
            if (sNum < 0) sNum = sCnt - 1;
        } /////// else /////////
        $(sldBox[sNum]).addClass('on').siblings().removeClass('on');
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
                        <div className="subgt-prevBtn gfBtn" onClick={goSlide}>〈
                            {/* <img src={process.env.PUBLIC_URL + "/images/golf_arrow_prev.jpg"} alt="이전" /> */}
                        </div>
                        <div className="subgt-nextBtn gfBtn" onClick={goSlide}>〉
                            {/* <img src={process.env.PUBLIC_URL + "/images/golf_arrow_next.jpg"} alt="다음" /> */}
                        </div>
                    </div>
                    <div className="subgt-line"></div>
                </div>
            </div>
        </>
    );
}
