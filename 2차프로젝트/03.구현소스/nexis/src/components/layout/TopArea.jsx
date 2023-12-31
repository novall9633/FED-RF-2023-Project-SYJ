import $ from "jquery";
import { memo, useEffect } from "react";
import { Logo } from "../modules/Logo";
import { menu } from "../data/gnb";
import { Link } from "react-router-dom";

export const TopArea = memo(() => {
    const toggleMenu = () => {
        //////////// 메뉴 열기 / 닫기 //////////////
        if ($(".menu-open").hasClass("on") === true) {
            $("#menu").css({
                left: 0,
            });
            $("body").css({
                overflow: "hidden",
            });
            $("#main-visual").css({
                opacity: 0.7,
            });
            $(".menuBtn a").find(".menu-open").removeClass("on").siblings().addClass("on");
        } else {
            $("#menu").css({
                left: "100%",
            });
            $("body").css({
                overflow: "visible",
            });
            $("#main-visual").css({
                opacity: 1,
            });
            $(".menuBtn a").find(".menu-close").removeClass("on").siblings().addClass("on");
        }

        // );
        //////////// 메뉴 열기 / 닫기 //////////////

        /////////////////메뉴 마우스 오버 /////////////////////////////////
        $(".menu dl").mouseover(function () {
            if ($(this).find("dd").length == 0) {
                $(this).siblings().removeClass("active");
            } else {
                $(this).addClass("active").siblings().removeClass("active");
            }
        });
        /////////////////메뉴 마우스 오버 /////////////////////////////////
    };


    return (
        <>
            <header>
                <div className="header">
                    <Logo cat="/"/>
                    <div className="menuBtn">
                        <a href="#" onClick={toggleMenu}>
                            <div className="menu-open on">MENU</div>
                            <div className="menu-close">CLOSE</div>
                            <div id="ham">
                                <div className="line" id="top"></div>
                                <div className="line" id="mid"></div>
                                <div className="line" id="btm"></div>
                            </div>
                        </a>
                    </div>
                </div>
            </header>
            <div id="menu">
                <div className="menu">
                    {menu.map((v, i) => (
                        <dl key={i}>
                            <dt>
                                <em>{"0" + (i + 1)}</em>
                                <Link to={v.link} onClick={toggleMenu}>
                                    {v.txt}
                                </Link>
                            </dt>
                            {v.sub && (
                                <dd>
                                    {v.sub.map((e, n) => (
                                        <p key={n}>
                                            <Link to={e.link} onClick={toggleMenu}>
                                                <span>{e.txt}</span>
                                            </Link>
                                        </p>
                                    ))}
                                </dd>
                            )}
                        </dl>
                    ))}
                </div>
            </div>
        </>
    );
});
