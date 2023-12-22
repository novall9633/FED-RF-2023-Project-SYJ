import { BusiCont } from "../modules/BusiCont";
import { VisiImg } from "../modules/VisiImg";
import { subBusiCont } from "../data/subBusiCont";
import $ from 'jquery';
import { useEffect } from "react";
import { scrollFn } from "../func/scrollFn";

export function Business(props) {
    useEffect(()=>{
        let stCont = $(".subBs-st-cont");
        let ndCont = $(".subBs-nd-cont");
       
        window.addEventListener('wheel',()=>{
            scrollFn("right",stCont,1/3);
            scrollFn("left",ndCont,1/2);


        });
    },[])
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
