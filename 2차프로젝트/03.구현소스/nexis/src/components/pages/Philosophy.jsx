import { Link } from "react-router-dom";
import { pData } from "../data/philosophy";
import "../../css/philosophy.css";
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
                            <div className="subph-contWrap" key={i+"ph"}>
                                <div className="subph-contImg">
                                    <img src={process.env.PUBLIC_URL + pData[i].src} alt={pData[i].name} />
                                </div>
                                <div className="subph-contTop">
                                    <h3>{pData[i].num}</h3>
                                    <h4>{codeSplit(pData[i].sub)[0]}<br />{codeSplit(pData[i].sub)[1]}</h4>
                                </div>
                                <div className="subph-contMid">
                                    <h4>{pData[i].name}</h4>
                                </div>
                                <div className="subph-contBot">
                                <h5>{codeSplit(pData[i].text)[0]}<br />{codeSplit(pData[i].text)[1]}<br />{codeSplit(pData[i].text)[2]}<br />{codeSplit(pData[i].text)[3]}<br />{pData[i].num==="02"?codeSplit(pData[i].text)[4]:""}</h5>
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
    function codeSplit(data){
        return data.split("^");
    }

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
