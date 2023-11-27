
export function FooterArea(){
    function makeList(){
        
    }
    
    return(
        <footer>
                <div className="footer">
                    <div className="footer-menu">
                        <h3>NEXIS</h3>
                        <div className="footer-dt">

                        </div>
                        <p>(c) 2020 NEXIS Co.Ltd. All Rights Reserved.</p>
                    </div>
                    <div className="footer-info">
                        <div className="footer-sns">
                            <ul>
                                <li><a href=""><img src="./../public/images/icon_facebook.gif" alt=""/></a></li>
                                <li><a href=""><img src="../public/images/icon_blog.gif" alt=""/></a></li>
                                <li><a href=""><img src="../public/images/icon_instagram.gif" alt=""/></a></li>
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