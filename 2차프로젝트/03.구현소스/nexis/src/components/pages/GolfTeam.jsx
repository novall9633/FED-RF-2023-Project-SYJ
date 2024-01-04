import "../../css/golfTeam.css";
import { golf_mem } from "../data/golf";
export function GolfTeam(props){
    const makeArr = () => {
        let arr = golf_mem;
        let seqNum = 1;
        const hcode = [];
        for (let i = 0; i < arr.length; i++) {
            hcode[i] = (
                <>
                    <div className={i===0?"subgt-cont.on":"subgt-cont"}>
                <ul>
                    <li></li>
                    <li></li>
                </ul>
            </div>
                </>
            );
            seqNum++;
        }
        return hcode;
    };
    return(
        <>
        <div className="subgt">
            <div className="subgt-top">
                <h3>Golf Team</h3>
            </div>
            {makeArr()}
        </div>
        </>
    )
}