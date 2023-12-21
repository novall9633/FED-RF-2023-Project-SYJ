import { BusiCont } from "../modules/BusiCont";
import { VisiImg } from "../modules/VisiImg";
import { subBusiCont } from "../data/subBusiCont";

export function Business(props) {
    return (
        <>
            <div id="sub-busi" className="business">
                <VisiImg cat={props.cat} />
                <BusiCont cat={props.cat} idx={0} />
                {
                    props.cat !== "wall" &&
                    <BusiCont cat={props.cat} idx={1} />
                }
            </div>
        </>
    );
}
