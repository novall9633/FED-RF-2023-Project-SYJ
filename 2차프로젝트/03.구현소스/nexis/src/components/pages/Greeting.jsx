import { useContext, useEffect } from "react";
import { nCon } from "../modules/nContext";
import "../../css/greeting.css";
import { Link } from "react-router-dom";
import { GreetingImgs } from "../modules/GreetingImgs";
import { greeting } from "../data/greeting";
import { scrollFn } from "../func/scrollFn";
import $ from "jquery";

export function Greeting(props) {
    const myCon = useContext(nCon);

    useEffect(() => {
        myCon.setLogoColor(null);
        let mounted = true;
        if(matchMedia("screen and (min-width: 900px)").matches){
            // 로고 색깔 상태 -검은색
            let imgTop = 0;
            let top = 0;
            let Svg = $(".subgre-svg .pa1");
            let motoTxt = $(".subgreimg1 .subgreimg-wrap li").eq(0);
            let motoImg = $(".subgreimg1 .subgreimg-wrap li").eq(1);
            let labTxt = $(".subgretxt .subgreimg-wrap li").eq(0);
            let visionTxt = $(".subgreimg2 .subgreimg-wrap li").eq(0);
            let visionImg = $(".subgreimg2 .subgreimg-wrap li").eq(1);
               
            const mouseMoveG = (e) => {
                scrollFn("addOn", Svg, 1 / 2);
                scrollFn("right30",motoTxt,1/2);
                scrollFn("left30",motoImg,1/2);
                scrollFn("right30",labTxt,1/2);
                scrollFn("left30",visionTxt,2/3);
                scrollFn("right30",visionImg,2/3);
    
                top = Math.ceil(-e.deltaY / 4);
                imgTop += top;
                if (imgTop < -500) {
                    imgTop = -500;
                } else if (imgTop > 0) {
                    imgTop = 0;
                }
                $(".subgre-bgImg-view").animate({ top: imgTop + "px" }, 40, "easeOutSine");
            };
    
            window.addEventListener("wheel", (e) => {
                if (mounted) {
                    mouseMoveG(e);
                }
            });
        }

        return () => {
            mounted = false;
        };
    }, []);

    const makeArr = () => {
        let arr = greeting.svg;
        const hcode = [];
        for (let i = 0; i < arr.length; i++) {
            hcode[i] = <path className="pa1" d={arr[i]} key={i} />;
        }
        return hcode;
    };

    return (
        <>
            <div className="subgre">
                <div className="subgre-bg">
                    <img src={process.env.PUBLIC_URL + "/images/greeting/bg_greeting.png"} alt="" />
                </div>
                <div className="subgre-txt">
                    <div className="subgre-tit">
                        <p className="subgre-text-up">
                            <img src={process.env.PUBLIC_URL + "/images/greeting/txt_about.png"} alt="" />
                            <span> Company</span>
                        </p>
                        <ul>
                            <li className={props.cat === "greeting" ? "on" : ""}>
                                <Link to="/greeting" cat="greeting">
                                    Greeting
                                </Link>
                            </li>
                            <li className={props.cat === "philosophy" ? "on" : ""}>
                                <Link to="/philosophy" cat="philosophy">
                                    Philosophy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="subgreimg1">
                <GreetingImgs cat="moto" />
            </div>
            <div className="subgre-svg">
                <svg>{makeArr()}</svg>
            </div>
            <div className="subgre-bgImg">
                <div className="subgre-bgImg-view">
                    <img src={process.env.PUBLIC_URL + "/images/greeting/img_grt_pallax.jpg"} alt="" />
                </div>
            </div>
            <div className="subgretxt">
                <GreetingImgs cat="lab" />
            </div>
            <div className="subgreimg2">
                <GreetingImgs cat="vision" />
            </div>
        </>
    );
}
