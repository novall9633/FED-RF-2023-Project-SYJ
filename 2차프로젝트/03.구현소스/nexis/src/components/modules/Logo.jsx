import { useContext } from "react";
import { nCon } from "./nContext";

export const Logo = (props) => {
    const myCon = useContext(nCon);
    
    return (
        <>
            <h1>
                <a href="#" onClick={() => myCon.chgPage("/", {})}>
                    <img src={process.env.PUBLIC_URL + "/images/logo_h1.jpg"} alt="logo" />
                    <img src={process.env.PUBLIC_URL + "/images/logo_h1_w.jpg"} alt="logo" />
                </a>
            </h1>
        </>
    );
};
