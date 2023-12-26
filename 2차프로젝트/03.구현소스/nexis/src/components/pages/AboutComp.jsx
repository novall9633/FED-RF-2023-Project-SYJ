import { useContext, useEffect } from "react";
import { nCon } from "../modules/nContext";

export function AboutComp(props) {
    const myCon = useContext(nCon);

    useEffect(()=>{
        myCon.setLogoColor(null);
    })

    
    return (
        <>
            {
                props.cat ==="greeting" &&
                <div className="gree">
                    
                </div>
            }
        </>
    );
}
