import { BusiCont } from "../modules/BusiCont";
import { VisiImg } from "../modules/VisiImg";
import $ from "jquery";
import { useEffect } from "react";
import { scrollFn } from "../func/scrollFn";

export function Business(props) {

    
    useEffect(() => {
        let mounted = true;
        let stCont = $(".subBs-st-cont .subBs-st-img");
        let ndCont = $(".subBs-nd-cont .subBs-nd-img");
        let stTxt = $(".subBs-st-txt h2");
        let ndTxt = $(".subBs-nd-txt h2");
        let stSvg = $(".subBs-st2-svg .pa1");
        let ndSvg = $(".subBs-nd2-svg .pa1");
        let arr = [stCont, ndCont, stTxt, ndTxt, stSvg, ndSvg];
        if(matchMedia("screen and (min-width: 900px)").matches){
            for (let i = 0; i < arr.length; i++) {
                arr[i].removeClass("on");
            }
            const mouseMoveB =()=>{
                scrollFn("addOn", stCont, 1 / 3);
                scrollFn("addOn", stTxt, 1 / 3);
                scrollFn("addOn", stSvg, 1 / 3);
                if (props.cat !== "wall") {
                    scrollFn("addOn", ndCont, 1 / 2);
                    scrollFn("addOn", ndTxt, 1 / 2);
                    scrollFn("addOn", ndSvg, 1 / 2);
                }
            }
            
            window.addEventListener("wheel", ()=>{
                if(mounted){
                    mouseMoveB();
                }
            });
        }
        else{
            for (let i = 0; i < arr.length; i++) {
                arr[i].addClass("on");
            }
        }
        return () => {
            mounted = false;
        };
    });

    return (
        <>
            <div id="sub-busi" className="business">
                <VisiImg cat={props.cat} />
                <BusiCont cat={props.cat} idx={0} />
                {props.cat !== "wall" && <BusiCont cat={props.cat} idx={1} />}
            </div>
        </>
    );
}
