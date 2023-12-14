import { useContext, useEffect } from "react";
import { nCon } from "./nContext";
import $ from "jquery";

export const Logo = () => {
  const myCon = useContext(nCon);

  useEffect(() => {
    console.log(myCon.logoColor);
    if (myCon.logoColor == "import") {
      $(".header").addClass("w");
    } else {
      $(".header").removeClass("w");
    }
  });

  return (
    <>
      <h1>
        <a href="#" onClick={() => myCon.chgPage("/", {})}>
          <img
            src={process.env.PUBLIC_URL + "/images/logo_h1.jpg"}
            alt="logo"
          />
          <img
            src={process.env.PUBLIC_URL + "/images/logo_h1_w.jpg"}
            alt="logo"
          />
        </a>
      </h1>
    </>
  );
};
