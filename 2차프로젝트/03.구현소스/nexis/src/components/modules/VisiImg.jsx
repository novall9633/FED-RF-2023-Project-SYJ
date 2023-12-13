import { subBusiness } from "../data/subBusiness";
import $ from "jquery";
import "../../css/subBusiness.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
export function VisiImg(props) {
    useEffect(() => {
        if (props.cat == "import") {
            $(".header").addClass("on");
        } else {
            $(".header").removeClass("on");
        }
    }, []);

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
            {/*                                                   */}
            <div className="subBs-cont">
                <div className="subBs-top">
                    <div className="inner-subBs">
                        <div className="round">
                            <dl>
                                <dt>
                                    <img src={process.env.PUBLIC_URL + "/images/logo_h1.jpg"} alt="" />
                                </dt>
                                <dd>
                                    <em>Nex</em>t built
                                    <em>i</em>n<em>S</em>ystem
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
                                    {/* <svg version="1.1" id="레이어_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 377 147" style="enable-background:new 0 0 377 147;" xml:space="preserve">
<g>
	<path className="st0" d="M91.08,5.44v25.2h-56.7V60.7h49.14v25.2H34.38v52.02H8.28V5.44H91.08z" style="stroke-dashoffset: 0px;"></path>
	<path className="st0" d="M115.83,22.27c2.82-2.46,6.03-3.69,9.63-3.69c3.48,0,6.6,1.23,9.36,3.69s4.14,5.49,4.14,9.09s-1.38,6.6-4.14,9
		s-5.88,3.6-9.36,3.6c-3.6,0-6.81-1.2-9.63-3.6s-4.23-5.4-4.23-9S113.01,24.73,115.83,22.27z M137.34,59.26v78.66h-25.2V59.26
		H137.34z" style="stroke-dashoffset: 0px;"></path>
	<path className="st0" d="M196.83,65.92c3.78-3.36,7.65-5.97,11.61-7.83s7.08-2.79,9.36-2.79l-1.26,25.2c-0.72-0.12-1.74-0.18-3.06-0.18
		c-5.04,0-9.48,1.32-13.32,3.96s-6.78,6.03-8.82,10.17c-2.04,4.14-3.06,8.37-3.06,12.69v30.78h-25.02V59.26h22.68l1.98,18
		C190.08,73.06,193.05,69.28,196.83,65.92z" style="stroke-dashoffset: 0px;"></path>
	<path className="st0" d="M244.44,136.12c-5.64-2.28-10.32-5.46-14.04-9.54l10.44-13.86c6.96,6.48,13.5,9.72,19.62,9.72
		c3.24,0,5.85-0.51,7.83-1.53c1.98-1.02,2.97-2.55,2.97-4.59c0-2.4-1.14-4.23-3.42-5.49c-2.28-1.26-4.83-2.31-7.65-3.15
		s-4.71-1.38-5.67-1.62c-6.84-2.16-11.94-5.37-15.3-9.63c-3.36-4.26-5.04-9.15-5.04-14.67c0-4.2,1.11-8.31,3.33-12.33
		s5.67-7.32,10.35-9.9s10.5-3.87,17.46-3.87c6.48,0,12,0.66,16.56,1.98s8.94,3.48,13.14,6.48l-9.54,14.76
		c-2.4-1.92-5.07-3.51-8.01-4.77c-2.94-1.26-5.61-1.89-8.01-1.89c-2.88,0-5.22,0.6-7.02,1.8s-2.7,2.64-2.7,4.32
		c-0.12,2.52,0.93,4.41,3.15,5.67s5.67,2.55,10.35,3.87c0.72,0.24,1.47,0.48,2.25,0.72s1.59,0.48,2.43,0.72
		c12.36,4.08,18.54,11.52,18.54,22.32c0,5.04-1.26,9.66-3.78,13.86s-6.33,7.59-11.43,10.17s-11.31,3.87-18.63,3.87
		C256.14,139.54,250.07,138.4,244.44,136.12z" style="stroke-dashoffset: 0px;"></path>
	<path className="st0" d="M350.09,24.7v34.2h19.08v19.62h-19.08v59.4h-25.2v-59.4h-12.24V58.9h12.24V24.7H350.09z" style="stroke-dashoffset: 0px;"></path>
</g>
</svg> */}
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
                                    {/* <svg version="1.1" id="레이어_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 618 149" style="enable-background:new 0 0 618 149;" xml:space="preserve">
<g>
	<path className="st0" d="M63.77,28.03c-5.76,0-10.23,1.14-13.41,3.42s-4.77,5.7-4.77,10.26c0,4.2,2.31,7.89,6.93,11.07
		s10.77,6.21,18.45,9.09c6.24,2.28,11.58,4.89,16.02,7.83s8.13,6.99,11.07,12.15c2.94,5.16,4.41,11.7,4.41,19.62
		c0,6.84-1.77,13.17-5.31,18.99s-8.73,10.44-15.57,13.86s-15,5.13-24.48,5.13c-7.92,0-15.78-1.17-23.58-3.51
		s-15.06-5.91-21.78-10.71l11.52-20.34c4.56,3.36,9.78,6.12,15.66,8.28c5.88,2.16,11.16,3.24,15.84,3.24
		c5.52,0,10.32-1.17,14.4-3.51s6.12-6.15,6.12-11.43c0-6.84-6.42-12.78-19.26-17.82c-7.56-3-13.86-5.88-18.9-8.64
		c-5.04-2.76-9.39-6.72-13.05-11.88s-5.49-11.64-5.49-19.44c0-11.4,3.75-20.58,11.25-27.54S47.33,5.41,59.81,4.81
		c9.84,0,18.06,1.11,24.66,3.33s13.02,5.37,19.26,9.45l-9.9,19.98C82.31,31.21,72.29,28.03,63.77,28.03z" style="stroke-dashoffset: 0px;"></path>
	<path className="st0" d="M178.79,113.53l11.16,18.72c-4.32,2.4-8.88,4.32-13.68,5.76c-4.8,1.44-9.36,2.16-13.68,2.16
		c-9.36,0-17.43-1.77-24.21-5.31s-11.91-8.52-15.39-14.94c-3.48-6.42-5.22-13.77-5.22-22.05c0-7.68,2.01-14.76,6.03-21.24
		c4.02-6.48,9.51-11.61,16.47-15.39c6.96-3.78,14.58-5.67,22.86-5.67c11.28,0,20.55,3.3,27.81,9.9s11.97,16.02,14.13,28.26
		l-57.6,18.36c3.84,4.44,9.06,6.66,15.66,6.66C168.17,118.75,173.39,117.01,178.79,113.53z M147.65,80.95
		c-3.36,3.84-5.04,9-5.04,15.48v1.62l34.56-11.7c-2.52-7.44-7.86-11.16-16.02-11.16C155.51,75.19,151.01,77.11,147.65,80.95z" style="stroke-dashoffset: 0px;"></path>
	<path className="st0" d="M257,66.01c3.78-3.36,7.65-5.97,11.61-7.83c3.96-1.86,7.08-2.79,9.36-2.79l-1.26,25.2
		c-0.72-0.12-1.74-0.18-3.06-0.18c-5.04,0-9.48,1.32-13.32,3.96s-6.78,6.03-8.82,10.17s-3.06,8.37-3.06,12.69v30.78h-25.02V59.35
		h22.68l1.98,18C250.25,73.15,253.22,69.37,257,66.01z" style="stroke-dashoffset: 0px;"></path>
	<path className="st0" d="M378.59,59.35l-44.64,80.28h-0.72l-47.16-80.28h29.88l18.36,37.44l16.2-37.44H378.59z" style="stroke-dashoffset: 0px;"></path>
	<path className="st0" d="M397.04,22.36c2.82-2.46,6.03-3.69,9.63-3.69c3.48,0,6.6,1.23,9.36,3.69s4.14,5.49,4.14,9.09s-1.38,6.6-4.14,9
		s-5.88,3.6-9.36,3.6c-3.6,0-6.81-1.2-9.63-3.6s-4.23-5.4-4.23-9S394.22,24.82,397.04,22.36z M418.55,59.35v78.66h-25.2V59.35
		H418.55z" style="stroke-dashoffset: 0px;"></path>
	<path className="st0" d="M498.2,137.65c-5.22,1.68-10.35,2.52-15.39,2.52c-13.68,0-24.51-3.69-32.49-11.07
		c-7.98-7.38-11.97-17.55-11.97-30.51c0-8.4,1.95-15.75,5.85-22.05c3.9-6.3,9.03-11.1,15.39-14.4c6.36-3.3,13.2-4.95,20.52-4.95
		c13.08,0,23.7,3.48,31.86,10.44l-12.24,16.2c-5.16-4.08-10.92-6.12-17.28-6.12c-5.28,0-9.75,1.98-13.41,5.94s-5.49,8.94-5.49,14.94
		s1.98,11.01,5.94,15.03s9.12,6.03,15.48,6.03c5.52,0,10.08-1.5,13.68-4.5l12.6,15.84C507.77,133.75,503.42,135.97,498.2,137.65z" style="stroke-dashoffset: 0px;"></path>
	<path className="st0" d="M585.59,113.53l11.16,18.72c-4.32,2.4-8.88,4.32-13.68,5.76c-4.8,1.44-9.36,2.16-13.68,2.16
		c-9.36,0-17.43-1.77-24.21-5.31c-6.78-3.54-11.91-8.52-15.39-14.94s-5.22-13.77-5.22-22.05c0-7.68,2.01-14.76,6.03-21.24
		c4.02-6.48,9.51-11.61,16.47-15.39c6.96-3.78,14.58-5.67,22.86-5.67c11.28,0,20.55,3.3,27.81,9.9s11.97,16.02,14.13,28.26
		l-57.6,18.36c3.84,4.44,9.06,6.66,15.66,6.66C574.97,118.75,580.18,117.01,585.59,113.53z M554.44,80.95
		c-3.36,3.84-5.04,9-5.04,15.48v1.62l34.56-11.7c-2.52-7.44-7.86-11.16-16.02-11.16C562.3,75.19,557.8,77.11,554.44,80.95z" style="stroke-dashoffset: 0px;"></path>
</g>
</svg> */}
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
