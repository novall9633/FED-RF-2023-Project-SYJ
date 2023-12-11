import { visual } from "../data/visual";
import $ from "jquery";

import "../../css/banner.css";
import { useEffect, useRef } from "react";

export function Banner() {
  const A_TM = 5000;
  const autoI = useRef(null);
  const autoT = useRef(null);

  const mySeq = useRef(0);

  const bulBtn = (e) => {
    // 선택 불릿
    let btn = $(e.currentTarget).parent();
    // 불릿 순서
    let Btnidx = $(btn).index();
    // 자동순번 업데이트
    mySeq.current = Btnidx;

    $(btn).addClass("active").siblings().removeClass("active");
    $(".inner ul li").eq(Btnidx).addClass("on").siblings().removeClass("on");

  };
  const makeBull = () => {
    let hcode = [];
    for (let i = 0; i < 4; i++) {
      hcode[i] = (
        <li className={i == 0 ? "active" : ""} key={i}>
          <a href="#" onClick={bulBtn}>
            {"0" + (i + 1)}
          </a>
        </li>
      );
    }
    return hcode;
  };

  const autoSlide = () => {
    $(".main-bul li")
      .eq(mySeq.current)
      .addClass("active")
      .siblings()
      .removeClass("active");
    $(".inner ul li")
      .eq(mySeq.current)
      .addClass("on")
      .siblings()
      .removeClass("on");

    mySeq.current++;
    if (mySeq.current > 3) mySeq.current = 0;

    clearTimeout(autoT.current);
    autoT.current = setTimeout(autoSlide, A_TM);
  };

  useEffect(() => {
    autoT.current = null;
    mySeq.current = 0;

    autoSlide();
  }, []);


  return (
    <>
      <article id="main-visual">
        <div className="inner">
          <ul>
            {visual.map((v, i) => (
              <li key={i} className={i == 0 ? "on" : ""}>
                <img src={process.env.PUBLIC_URL+v.src} alt={"메인비주얼" + i} />
                <div className="main-txt-area">
                  <dl>
                    <dt>
                      <h2>
                        <span>
                          <img src={process.env.PUBLIC_URL+v.isrc} alt={"타이틀" + i} />
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
          <ul>{makeBull()}</ul>
        </div>
      </article>
    </>
  );
}
