import { useContext, useEffect } from "react";
import { nCon } from "../modules/nContext";
import "../../css/greeting.css";
import { Link } from "react-router-dom";
import { GreetingImgs } from "../modules/GreetingImgs";

export function Greeting(props) {
    const myCon = useContext(nCon);

    useEffect(() => {
        myCon.setLogoColor(null);
    });
    useEffect(()=>{
        const tit = document.querySelector('.subgre-text-up');
        // tit.style.transform = 'translateY(100%)'

    })

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
            <div className="subgretxt">
                <GreetingImgs cat="lab" />
            </div>
            <div className="subgreimg2">
                <GreetingImgs cat="vision" />
            </div>
        </>
    );
}
