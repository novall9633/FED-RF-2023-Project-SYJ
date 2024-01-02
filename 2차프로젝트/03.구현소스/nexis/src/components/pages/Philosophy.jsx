import { Link } from "react-router-dom";
import { pData } from "../data/philosophy";
import "../../css/philosophy.css";
import { event } from "jquery";
import { useContext, useEffect } from "react";
import { nCon } from "../modules/nContext";


export function Philosophy(props) {
    const myCon = useContext(nCon);

    useEffect(()=>{
        myCon.setLogoColor(null);
    })
    const makeArr = () => {
        let arr = pData;
        let seqNum = 1;
        const hcode = [];
        for (let i = 0; i < arr.length; i++) {
            hcode[i] = (
                <>
                    <li className={i===0?"on":""} key={i}>
                        <a href="#">
                            <div className="subph-contWrap">
                                <div className="subph-contImg">
                                    <img src={process.env.PUBLIC_URL + pData[i].src} alt={pData[i].name} />
                                </div>
                                <div className="subph-contTop">
                                    <h3>{pData[i].num}</h3>
                                    <h4>{pData[i].sub}</h4>
                                </div>
                                <div className="subph-contMid">
                                    <h4>{pData[i].name}</h4>
                                </div>
                                <div className="subph-contBot">
                                    <h5>{pData[i].text}</h5>
                                </div>
                            </div>
                        </a>
                    </li>
                </>
            );
            seqNum++;
        }
        return hcode;
    };

    return (
        <>
            <div className="subph-wrap">
                <div className="subph-top">
                    <div className="subph-subject">
                        <p>Company</p>
                    </div>
                    <div className="subph-nav">
                        <ul>
                            <li>
                                <Link to="/greeting" cat="greeting">
                                    Greeting
                                </Link>
                            </li>
                            <li className="on">
                                <Link to="/philosophy" cat="philosophy">
                                    Philosophy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="subph-contents">
                    <ul>
                        {makeArr()}
                    </ul>
                </div>
            </div>
        </>
    );
}
