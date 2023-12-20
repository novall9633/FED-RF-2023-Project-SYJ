import { subBusiCont } from "../data/subBusiCont";
export function BusiCont(props) {
    const makeCode = (data) => {
        return data.map((v, i) => {
            console.log(v.src);
            <>
                <div className="subBs-first">
                    <div className="subBs-st1">
                        <div className="subBs-st-cont">
                            <div className="subBs-st-img greyImg"></div>
                            <div className="subBs-st-img contImg">
                                <img src={process.env.PUBLIC_URL + v.src} alt="" />
                            </div>
                        </div>
                        <div className="subBs-st-txt">
                            <h2>{v.txt1}</h2>
                        </div>
                    </div>
                    <div className="subBs-st2">
                        <div className="subBs-st2-cont">
                            <div className="subBs-st2-svg"></div>
                            <div className="subBs-st2-txt">
                                <h2>{v.sub}</h2>
                                <h4>{v.txt2}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </>;
        });
    };
    return (
        <>
            {
                <div className="subBs-first">
                <div className="subBs-st1">
                    <div className="subBs-st-cont">
                        <div className="subBs-st-img greyImg"></div>
                        <div className="subBs-st-img contImg">
                            {/* <img src={process.env.PUBLIC_URL + v.src} alt="" /> */}
                        </div>
                    </div>
                    <div className="subBs-st-txt">
                        {/* <h2>{v.txt1}</h2> */}
                    </div>
                </div>
                <div className="subBs-st2">
                    <div className="subBs-st2-cont">
                        <div className="subBs-st2-svg"></div>
                        <div className="subBs-st2-txt">
                            {/* <h2>{v.sub}</h2> */}
                            {/* <h4>{v.txt2}</h4> */}
                        </div>
                    </div>
                </div>
            </div>}
        </>
    );
}
