import { useContext, useEffect } from "react";

export function AboutComp(props) {
    const myCon = useContext(nCon);

    useEffect(()=>{
        myCon.setLogoColor(null);
    })

    
    return (
        <>
            
        </>
    );
}
