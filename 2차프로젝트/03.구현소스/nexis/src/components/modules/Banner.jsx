import { visual } from "../data/visual";

import "../../css/banner.css";

export function Banner() {
    return (
        <>
            <article id="main-visual">
                <div className="inner">
                    <ul>
                        {visual.map((v, i) => (
                            <li key={i} className={i==0?"on":""}>
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
                        <li className="active">
                            <a href="">01</a>
                        </li>
                        <li>
                            <a href="">02</a>
                        </li>
                        <li>
                            <a href="">03</a>
                        </li>
                        <li>
                            <a href="">04</a>
                        </li>
                    </ul>
                </div>
            </article>
        </>
    );
}
