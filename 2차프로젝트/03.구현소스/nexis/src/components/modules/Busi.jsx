import { Link } from "react-router-dom";
import { business } from "../data/business";

export function Busi() {
    return (
        <>
            <div id="main2">
                <article className="main2">
                    <div className="busi-wrap">
                        <div className="busi-info">
                            <h2>
                                <span>O</span>
                                <span>u</span>
                                <span>r</span> Business
                            </h2>
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
                                        <img src={v.src} alt={"biz0" + i} />
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
                        <div className="abtn ab1"></div>
                        <div className="abtn ab2"></div>
                    </div>
                </article>
            </div>
        </>
    );
}
