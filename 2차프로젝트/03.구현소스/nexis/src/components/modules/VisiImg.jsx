import { subBusiness } from "../data/subBusiness";
import "../../css/subBusiness.css";
import { Link } from "react-router-dom";
import { nCon } from "./nContext";
import { useContext, useEffect } from "react";
export function VisiImg(props) {
    const myCon = useContext(nCon);

    useEffect(() => {
        myCon.setLogoColor(props.cat === "import" ? "import" : null);
    });

    return (
        <>
            <div className="subBs">
                <div className="bg">
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/images/business/" +
                            subBusiness[props.cat].text +
                            "/bg_business.jpg"
                        }
                        alt=""
                    />
                </div>
                <div className="subBs-txt">
                    <div className="subBs-tit">
                        <p className="text_up">
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/images/business/" +
                                    subBusiness[props.cat].text +
                                    "/title_txt.png"
                                }
                                alt=""
                            />
                            <span>{subBusiness[props.cat].tit}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="subBs-cont">
                <div className="subBs-top">
                    <div className="inner-subBs">
                        <div className="round">
                            <dl>
                                <dt>
                                    <img src={process.env.PUBLIC_URL + "/images/logo_h1.jpg"} alt="" />
                                </dt>
                                <dd>
                                    <em>Nex</em>t built <em>i</em>n<em> S</em>ystem
                                </dd>
                            </dl>
                            <img src={process.env.PUBLIC_URL + "/images/business/rotate.png"} alt="" />
                        </div>
                        <div className="tit-group">
                            <h3>Business</h3>
                            <div className="subBs-menu">
                                <ul>
                                    <li className={subBusiness[props.cat].text == "b2b" ? "on" : ""}>
                                        <Link to="/b2b" cat="b2b">
                                            Domestic B2B sales
                                        </Link>
                                    </li>
                                    <li className={subBusiness[props.cat].text == "import" ? "on" : ""}>
                                        <Link to="/import" cat="import">
                                            Import Business
                                        </Link>
                                    </li>
                                    <li className={subBusiness[props.cat].text == "wall" ? "on" : ""}>
                                        <Link to="/wall" cat="wall">
                                            Wall bed ORN
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="subBs-first">
                    <div className="subBs-st1">
                        <div className="subBs-st-cont">
                            <div className="subBs-st-img greyImg"></div>
                            <div className="subBs-st-img contImg">
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/images/business/" +
                                        subBusiness[props.cat].text +
                                        "/img_business_01.jpg"
                                    }
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="subBs-st-txt">
                            <h2>{subBusiness[props.cat].txt1}</h2>
                        </div>
                    </div>
                    <div className="subBs-st2">
                        <div className="subBs-st2-cont">
                            <div className="subBs-st2-svg"></div>
                            <div className="subBs-st2-txt">
                                <h2></h2>
                                <h4></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
