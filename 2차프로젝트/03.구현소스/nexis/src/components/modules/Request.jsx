import { useContext, useEffect, useRef } from "react";
import "../../css/request.css";
import $ from "jquery";
import { nCon } from "./nContext";
import { Captcha } from "./Captcha";
import axios from 'axios';

// https://codedamn.com/news/reactjs/how-to-connect-react-with-node-js

export function Request() {
    const myCon = useContext(nCon);

    // var CLIENT_ID = "hwl1zg9wp_QipovESODT";
    var CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    // var CLIENT_SECRET = "9DletTgwZr";
    var CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

    const token =
    axios.get("/captcha/nkey",{
            headers: {
                "X-Naver-Client-Id": CLIENT_ID,
                "X-Naver-Client-Secret": CLIENT_SECRET,
            },
        }).then((response)=>console.log("1"+response))
        .then((res)=>res.json())
        .then((re)=>console.log("2"+re));
    // const token = fetch("/captcha/nkey",{
    //     headers: {
    //         "X-Naver-Client-Id": CLIENT_ID,
    //         "X-Naver-Client-Secret": CLIENT_SECRET,
    //     },
    // }).then((res)=> res.json())
    // .then((token)=> token.key);

    async function showCaptcha(token) {
        console.log(token);

        let getImg = await fetch(`/captcha/image?key=${token}`, {
            headers: {
                "X-Naver-Client-Id": CLIENT_ID,
                "X-Naver-Client-Secret": CLIENT_SECRET,
            },
        })
            // .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    }

    // async function getToken() {
    //     try {
    //         token.current = await fetch("/captcha/nkey", {
    //             headers: {
    //                 "X-Naver-Client-Id": CLIENT_ID,
    //                 "X-Naver-Client-Secret": CLIENT_SECRET,
    //             },
    //         })
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 // token.current = data.key;
    //                 return data.key;
    //             });

    //     } catch (error) {
    //         console.log("error : ", error);
    //     }
    // }
    // async function getImg(key) {
    //     try {
    //         await fetch(`/captcha/image?key=${key}`, {
    //             headers: {
    //                 "X-Naver-Client-Id": CLIENT_ID,
    //                 "X-Naver-Client-Secret": CLIENT_SECRET,
    //             },
    //         })
    //             // .then((res) => res.json())
    //             .then((data) => {
    //                 console.log(data);
    //             });
    //     } catch (error) {
    //         console.log("error : ", error);
    //     }
    // }
    useEffect(() => {
        // setTimeout(() => {
        //     console.log("키 : ",token.current);
        //     getImg(token.current);
        // }, 2000);\
        console.log("토큰" + token);
        showCaptcha(token);
    }, []);

    async function refreshImage(key) {
        try {
            await fetch(`/captcha/image?key=${key}`, {
                headers: {
                    "X-Naver-Client-Id": CLIENT_ID,
                    "X-Naver-Client-Secret": CLIENT_SECRET,
                },
            })
                // .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                });
        } catch (error) {
            console.log("error : ", error);
        }
    }
    const onSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => myCon.chgPage("request", {}), 1000);
    };
    return (
        <>
            <div id="main4">
                <article className="main4">
                    <div className="request-info">
                        <p>Next Trends</p>
                        <h3>
                            넥시스는 변화하는 시대의
                            <br />
                            흐름을 선도하겠습니다.
                        </h3>
                        <h4>회사소개</h4>
                    </div>
                    <div className="request-wrap">
                        <div className="request-project-req">
                            <form name="inqForm" method="post" action="api.js">
                                <h2>
                                    Project <span>Request</span>
                                </h2>
                                <h4>
                                    재건축, 재개발, 리모델링 등 대형 프로젝트를 고민중이시라면, 특판 전문 기업 넥시스에
                                    상담해 보세요.{" "}
                                </h4>
                                <p className="ess">
                                    <i>*</i>항목은 필수적으로 기입하셔야하는 항목입니다.
                                </p>
                                <div className="request-inq">
                                    <ul className="list">
                                        <li>
                                            <label>
                                                Your Name <i>*</i>
                                            </label>
                                            <div className="request-input-data">
                                                <input
                                                    type="text"
                                                    name="m-name"
                                                    defaultValue=""
                                                    placeholder="성함을 입력해주세요."
                                                    required
                                                />
                                            </div>
                                        </li>
                                        <li>
                                            <label>
                                                Company Name <i>*</i>
                                            </label>
                                            <div className="request-input-data">
                                                <input
                                                    type="text"
                                                    name="addtext1"
                                                    defaultValue=""
                                                    placeholder="회사명을 입력해주세요."
                                                    required
                                                />
                                            </div>
                                        </li>
                                        <li>
                                            <label>Project Name</label>
                                            <div className="request-input-data">
                                                <input
                                                    type="text"
                                                    name="addtext2"
                                                    defaultValue=""
                                                    placeholder="(지역, 아파트/빌라/상업시설 등)"
                                                />
                                            </div>
                                        </li>
                                        <li>
                                            <label>
                                                E-Mail Address <i>*</i>
                                            </label>
                                            <div className="request-input-data">
                                                <input
                                                    type="text"
                                                    name="m-email"
                                                    defaultValue=""
                                                    placeholder="이메일 주소를 입력해주세요."
                                                    required
                                                />
                                            </div>
                                        </li>
                                        <li className="captcha">
                                            <label>
                                                Captcha <i>*</i>
                                            </label>
                                            <div className="request-input-data">
                                                <p className="captcha_img">{/* <Captcha /> */}</p>
                                                <input
                                                    type="button"
                                                    defaultValue="새로고침"
                                                    // onClick={refreshImage(token.current)}
                                                    style={{ cursor: "pointer" }}
                                                    // style={{display:"none"}}
                                                />
                                                <input
                                                    type="text"
                                                    name="txtCaptcha"
                                                    defaultValue=""
                                                    placeholder="코드입력"
                                                    maxLength="5"
                                                    required
                                                />
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className="btn">
                                        <li>
                                            <a href="#">홈페이지이용약관 (전문)</a>
                                        </li>
                                        <li>
                                            <a href="#">개인정보처리방침 (전문)</a>
                                        </li>
                                    </ul>
                                    <p className="txt">
                                        <input type="checkbox" id="check" name="check" required />
                                        <label htmlFor="check">
                                            &nbsp;<span></span> 위의 모든 약관의 내용을 확인하였으며 이에 동의합니다.
                                        </label>
                                    </p>
                                    <button onClick={onSubmit}>문의사항 작성하기</button>
                                </div>
                            </form>
                        </div>
                        <div className="request-project-img">
                            <img src={process.env.PUBLIC_URL + "/images/img_request.jpg"} alt="이미지" />
                        </div>
                    </div>
                </article>
            </div>
        </>
    );
}
