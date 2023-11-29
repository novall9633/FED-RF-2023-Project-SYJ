import { Banner } from "../modules/Banner";
import { Busi } from "../modules/Busi";
import { Golf } from "../modules/Golf";
import { Request } from "../modules/Request";
import { Value } from "../modules/Value";

export function Main(){
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