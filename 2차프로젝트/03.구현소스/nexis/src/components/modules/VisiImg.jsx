import { subBusiness } from "../data/subBusiness";
import $ from "jquery";
import "../../css/subBusiness.css";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
export function VisiImg(props) {
    const imp = useRef(true); 
    useEffect(() => {
        if (props.cat == "import" && imp.current) {
            $(".header").addClass("w");
            imp.current=false;
        } else {
            $(".header").removeClass("w");
        }
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
{/*                                                                      */}
                <div className="cont_bx">
                    <div className="quality">
                        <div className="bx_img">
                            <em></em>
                            <p></p>
                        </div>
                        <div className="bx_txt inner cf">
                            <div className="txt_big">
                                <p className=" text_op left">
                                    <span>Quality</span>
                                </p>
                                <p className="text_img">
                                    
                                </p>
                            </div>
                            <div className="txt_cont">
                                <p className="title">
                                    <span>Domestic Edition</span>
                                </p>
                                <p className="txt">
                                    보이지 않는 곳까지 완벽을 추구하는 품질 제일주의를 바탕으로 <br />
                                    대단위 공동주택, 호텔, 리조트 등에 주방 및 수납 가구를 납품하고 있습니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="content service right active">
                        <div className="bx_img">
                            <p></p>
                        </div>
                        <div className="bx_txt inner cf">
                            <div className="txt_big">
                                <p className="text_op right">
                                    <span>Best</span>
                                </p>
                                <p className="text_img">
                                   
                                </p>
                            </div>

                            <div className="txt_cont">
                                <p className="title">Pursuit of Perfection</p>
                                <p className="txt">
                                    건설사와 시행사의 요구를 바탕으로 최적의 설계, 최고의 품질, 완벽한 시공과 AS를
                                    약속합니다.
                                </p>

                                <p className="btn_area">
                                    <a href="/file/2019넥시스_국내프로젝트자료.pdf" target="_blank" className="btn_s1">
                                        <span>모델하우스 현황</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
