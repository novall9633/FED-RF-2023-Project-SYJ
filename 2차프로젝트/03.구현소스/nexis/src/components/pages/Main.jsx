import { useContext, useEffect } from "react";
import { scrollFn } from "../func/scrollFn";
import { Banner } from "../modules/Banner";
import { Busi } from "../modules/Busi";
import { Golf } from "../modules/Golf";
import { Request } from "../modules/Request";
import { Value } from "../modules/Value";
import { nCon } from "../modules/nContext";
import $ from 'jquery'

export function Main(){
    const myCon = useContext(nCon);

    useEffect(()=>{
        myCon.setLogoColor(null);
    });

    useEffect(()=>{
        let mounted = true;
        let main2 = $(".main2");
        let trends = $(".trends-wrap");
        let trendsImg = $(".trends-img");
        let requestTxt = $(".request-project-req");
        let requestImg = $(".request-project-img");
        let golf=$(".golf");
        let golfMem=$(".golfMem");
        const mouseMoveM = () =>{
            scrollFn("top",main2,1/4);
            scrollFn("right30",trends,1/3);
            scrollFn("scale",trendsImg,2/3);
            scrollFn("right30",requestTxt,2/3);
            scrollFn("left30",requestImg,2/3);
            scrollFn("top",golf,4/5);
            scrollFn("top",golfMem,4/5);
            console.log("main");
        }
        window.addEventListener('wheel',()=>{
            if(mounted){
                mouseMoveM();
            }
        });
        return () => {
            // document.removeEventListener("wheel",);
            mounted=false;
            console.log("main 끝-------------------------------------");
        };
    },[]);

    return(
        <>
        <Banner />
        <Busi/>
        <Value />
        <Request />
        <Golf />
        </>
    )
}