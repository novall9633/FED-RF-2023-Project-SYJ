import { VisiImg } from "../modules/VisiImg";

export function Business(props){
    return(
        <>
        <div id="sub-busi" className="business">
            <VisiImg cat={props.cat} />
            
        </div>
        </>
    )
}