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
                <div className="subBs-first">
                    <div className="subBs-st1">
                        <div className="subBs-st-cont">
                            <div className="subBs-st-img greyImg"></div>
                            <div className="subBs-st-img contImg">
                                <img src={process.env.PUBLIC_URL + code.src} alt="" />
                            </div>
                        </div>
                        <div className="subBs-st-txt">
                            <h2>{code.txt1}</h2>
                        </div>
                    </div>
                    <div className="subBs-st2">
                        <div className="subBs-st2-cont">
                            <div className="subBs-st2-svg">
                                <svg>{makeArr()}</svg>
                            </div>
                            <div className="subBs-st2-txt">
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
