import { Link } from "react-router-dom";
import { menu } from "../data/gnb";

export function FooterArea(){
    return(
        <footer>
                <div className="footer">
                    <div className="footer-menu">
                        <h3>NEXIS</h3>
                        <table className="footer-dt">
                            <thead>
                                <tr>
                                    {
                                        menu.map((v,i)=>
                                        <th key={i}>{v.txt}</th>
                                        )
                                    }
                                </tr>
                                </thead>
                                <tbody>

                                <tr>
                                    <td><Link to="/greeting">Greeting</Link></td>
                                    <td><Link to="/b2b">Domestic B2B sales</Link></td>
                                    <td><Link to="/design">Design Center</Link></td>
                                    <td><Link to="/golf">Golf Team</Link></td>
                                    <td><Link to="/contact">Contact Us</Link></td>
                                </tr>
                                <tr>
                                    <td><Link to="/philosophy">Philosophy</Link></td>
                                    <td><Link to="/import">Import Business</Link></td>
                                </tr>
                                <tr>
                                    <td><Link to="/history">History</Link></td>
                                    <td><Link to="/wall">Wall bed ORN</Link></td>
                                </tr>
                                </tbody>
                            </table>
                        <p>(c) 2020 NEXIS Co.Ltd. All Rights Reserved.</p>
                    </div>
                    <div className="footer-info">
                        <div className="footer-sns">
                            <ul>
                                <li><a href=""><img src="./images/icon_facebook.gif" alt="페이스북"/></a></li>
                                <li><a href=""><img src="./images/icon_blog.gif" alt="블로그"/></a></li>
                                <li><a href=""><img src="./images/icon_instagram.gif" alt="인스타그램"/></a></li>
                            </ul>
                            <div className="footer-site">
                                <a href="#">+  Family Site</a>
                                <ul>
                                    <li><a href="#">ORN</a></li>
                                    <li><a href="#">NEXIS GALLERY</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-comp">

                            <dl>
                                <dt>NEXIS SEOUL Head Office</dt>
                                <dd>서울시 강서구 양천로 366 미라클빌딩 7,8층 02.532.4523</dd>
                                <dt>NEXIS Gallery</dt>
                                <dd>서울시 강남구 논현로 541 넥시스 빌딩 02.6951.5350</dd>
                            </dl>
                            <ul>
                                <li>개인정보취급방침</li>
                                <li>홈페이지 이용약관</li>
                                <li>이메일무단수집거부</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
    );
};