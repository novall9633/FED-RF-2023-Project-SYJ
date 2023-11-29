import { Link } from "react-router-dom"
import { golf_mem } from "../data/golf"
import $ from 'jquery';
import "jquery-ui-dist/jquery-ui";

import "../../css/golf.css"

export function Golf(){
    // 애니시간
    const A_TM = 600;

    // 광클상대변수(1-불허용,0-허용)
    let cSts = 0;
    // 슬라이드 순번
    let sNum = 0;

    const goSlide = (e) =>{
        const tg = e.target;
        const sldBox = $(tg).parent().parent().siblings().find('ul');
        const sCnt = sldBox.find('li').length;

        // 광클금지
        if(cSts) return;
        cSts=1;
        setTimeout(()=>cSts=0,A_TM);

        // 오른쪽버튼 여부
        let isR = $(tg).is('.golf-nextBtn');

        if(isR){
            sldBox.animate({left:"-50%"}, A_TM,()=>{
                // 맨앞li 맨뒤로 이동
                sldBox.append(sldBox.find('li').first())
                // 동시에 left값은 0으로 초기화함!
                .css({left:'0'});
            });
            sNum++;
            if(sNum>=sCnt) sNum=0;
        }
        else{
            // 맨뒤li 맨앞으로 이동
            sldBox.prepend(sldBox.find('li').last())
            // left값 -50%
            .css({left:'-50%'})
            // left값을 0으로 애니메이션
            .animate({left:'0'},A_TM);
      
            // 슬라이드순번 감소(0보다 작으면 끝번호)
            sNum--;
            if(sNum<0) sNum=sCnt-1;
          } /////// else /////////
    }
    return(
        <>
        <div id="main5">
                <article className="main5">
                    <div className="golf">
                        <div className="golf-info">
                            <h2>Nexis <span>Golfteam</span></h2>
                            <h4>넥시스는 2018년 여자 골프단을 창단하며 대한민국 골프 스포츠 분야의 발전과 유망 선수를 위한 지원사업을 전개하고 있습니다.<br />
                                KLPGA 대회 2년 연속 우승 선수를 배출했으며, 스포츠 마케팅을 통해 고객에게 더욱 가깝게 다가가고자 노력하고 있습니다.</h4>
                        </div>
                        <div className="golf-btn">
                            <div className="golf-prevBtn gBtn" onClick={goSlide}>
                                <img src="./images/golf_arrow_prev.jpg" alt="이전" />
                            </div>
                            <div className="golf-nextBtn gBtn" onClick={goSlide}>
                                <img src="./images/golf_arrow_next.jpg" alt="다음" />
                            </div>
                        </div>
                    </div>
                    <div className="golfMem">
                        <ul>
                            {
                                golf_mem.map((v,i)=>
                                <li key={i}>
                                <div className="golfMem-prof">
                                    <p>{v.ename}</p>
                                    <h2>{v.name}</h2>
                                    <Link to={v.link}>
                                        <h4>더 알아보기</h4>
                                    </Link>
                                </div>
                                <div className="golfMem-img">
                                    <img src={"./images/"+v.ename.replaceAll(' ','')+"_thum.jpg"} alt="배경" />
                                </div>
                            </li>
                                )
                            }
                        </ul>
                    </div>
                </article>
            </div>
        </>
    )
}