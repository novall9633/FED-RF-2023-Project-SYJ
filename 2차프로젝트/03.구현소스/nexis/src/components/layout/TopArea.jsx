import { Link, useNavigate } from "react-router-dom";
import { menu } from "../data/gnb";

export function TopArea (){
    const makeList = () => {
        return (menu.map((v, i) => (
            <dl key={i}>
                <dt>
                    <em>{"0" + (i + 1)}</em>
                    <Link to={v.link}>{v.txt}</Link>
                </dt>
                {v.sub && (
                    <dd>
                        {v.sub.map((e, n) => (
                            <p key={n}>
                                <Link to={e.link}>
                                    <span>{e.txt}</span>
                                </Link>
                            </p>
                        ))}
                    </dd>
                )}
            </dl>
        )));
    }; ///////////makeList 함수 /////////////////////

    return (
        <>
            <header>
                <div className="header">
                    <h1>
                        <a href="#">
                            <img src="/public/images/logo_h1.jpg" alt="logo" />
                        </a>
                    </h1>
                    <p>
                        <a href="#">
                            <div className="menuBtn">
                                <div className="menu-open on">MENU</div>
                                <div className="menu-close">CLOSE</div>
                                <div id="ham">
                                    <div className="line" id="top"></div>
                                    <div className="line" id="mid"></div>
                                    <div className="line" id="btm"></div>
                                </div>
                            </div>
                        </a>
                    </p>
                </div>
            </header>
            <div id="menu">
                <div className="menu">{makeList}</div>
            </div>
        </>
    );
};
