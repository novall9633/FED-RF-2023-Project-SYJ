import { subBusiCont } from "../data/subBusiCont";
export function BusiCont(props) {
    let code = subBusiCont[props.cat][props.idx];

    const makeArr = () => {
        let arr = code.svg;
        let seqNum = 1;
        const hcode = [];
        for (let i = 0; i < arr.length; i++) {
            hcode[i] = <path className="pa1" d={code.svg[i]} key={i} />;
            seqNum++;
        }
        return hcode;
    };
    

    return (
        <>
            {
                <div className={props.idx==0?"subBs-first":"subBs-second"}>
                    <div className={props.idx==0?"subBs-st1":"subBs-nd1"}>
                        <div className={props.idx==0?"subBs-st-cont":"subBs-nd-cont"}>
                            <div className={props.idx==0?"subBs-st-img greyImg":"subBs-nd-img greyImg"}></div>
                            <div className={props.idx==0?"subBs-st-img contImg":"subBs-nd-img contImg"}>
                                <img src={process.env.PUBLIC_URL + code.src} alt="" />
                            </div>
                        </div>
                        <div className={props.idx==0?"subBs-st-txt":"subBs-nd-txt"}>
                            <h2>{code.txt1}</h2>
                        </div>
                    </div>
                    <div className={props.idx==0?"subBs-st2":"subBs-nd2"}>
                        <div className={props.idx==0?"subBs-st2-cont":"subBs-nd2-cont"}>
                            <div className={props.idx==0?"subBs-st2-svg":"subBs-nd2-svg"}>
                                <svg>{makeArr()}</svg>
                            </div>
                            <div className={props.idx==0?"subBs-st2-txt":"subBs-nd2-txt"}>
                                <h2>{code.sub}</h2>
                                <h4>{code.txt2}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}
