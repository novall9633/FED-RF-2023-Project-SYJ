import { useContext, useEffect } from "react";
import { nCon } from "../modules/nContext";
import "../../css/greeting.css";
import { Link } from "react-router-dom";
import { GreetingImgs } from "../modules/GreetingImgs";
import { greeting } from "../data/greeting";
import { scrollFn } from "../func/scrollFn";
import $ from 'jquery';

export function Greeting(props) {
    const myCon = useContext(nCon);

    useEffect(() => {
        // 로고 색깔 상태 -검은색
        myCon.setLogoColor(null);
        let imgTop = 0;
        let top=0;
        let Svg = $(".subgre-svg .pa1");
        
        window.addEventListener("wheel", (e) => {
            scrollFn("addOn", Svg, 1 / 2);
            top = Math.ceil(-e.deltaY/5);
            imgTop+=top;
            $('.subgre-bgImg-view').animate({top:imgTop},10,"easeOutSine");
            console.log(Math.ceil(imgTop));
        });
    });
    useEffect(() => {
        const tit = document.querySelector(".subgre-text-up");
        // tit.style.transform = 'translateY(100%)'
    });

    const makeArr = () => {
        let arr = greeting.svg;
        let seqNum = 1;
        const hcode = [];
        for (let i = 0; i < arr.length; i++) {
            hcode[i] = <path className="pa1" d={arr[i]} key={i} />;
            seqNum++;
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
                            <li className={props.cat == "greeting" ? "on" : ""}>
                                <Link to="/greeting" cat="greeting">
                                    Greeting
                                </Link>
                            </li>
                            <li className={props.cat == "philosophy" ? "on" : ""}>
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
