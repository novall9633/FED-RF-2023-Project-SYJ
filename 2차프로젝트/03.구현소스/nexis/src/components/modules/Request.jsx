export function Request(){
    function RefreshImage(){

    }
    return(
        <>
        <div id="main4">
                <article className="main4">
                    <div className="request-info">
                        <p>Next Trends</p>
                        <h3>넥시스는 변화하는 시대의<br />흐름을 선도하겠습니다.</h3>
                        <h4>회사소개</h4>
                    </div>
                    <div className="request-wrap">
                        <div className="request-project-req">
                            <form name="inqForm" method="post" action="inq.py">
                                <h2>Project <span>Request</span></h2>
                                <h4>재건축, 재개발, 리모델링 등 대형 프로젝트를 고민중이시라면, 특판 전문 기업 넥시스에 상담해 보세요. </h4>
                                <p className="ess"><i>*</i>항목은 필수적으로 기입하셔야하는 항목입니다.</p>
                                <div className="request-inq">
                                    <ul className="list">
                                        <li>
                                            <label>Your Name <i>*</i></label>
                                            <div className="request-input-data">
                                                <input type="text" name="m-name" value="" placeholder="성함을 입력해주세요." required />
                                            </div>
                                        </li>
                                        <li>
                                            <label>Company Name <i>*</i></label>
                                            <div className="request-input-data">
                                                <input type="text" name="addtext1" value="" placeholder="회사명을 입력해주세요." required />
                                            </div>
                                        </li>
                                        <li>
                                            <label>Project Name</label>
                                            <div className="request-input-data">
                                                <input type="text" name="addtext2" value="" placeholder="(지역, 아파트/빌라/상업시설 등)" />
                                            </div>
                                        </li>
                                        <li>
                                            <label>E-Mail Address <i>*</i></label>
                                            <div className="request-input-data">
                                                <input type="text" name="m-email" value="" placeholder="이메일 주소를 입력해주세요." required />
                                            </div>
                                        </li>
                                        <li className="captcha">
                                            <label>Captcha <i>*</i></label>
                                            <div className="request-input-data">
                                                <p className="captcha_img"><img src="./images/captcha.bmp" id="imgCaptcha" className="vmiddle" /></p>
                                                <input type="button" value="새로고침" onclick={RefreshImage('imgCaptcha')} />
                                                <input type="text" name="txtCaptcha" value="" placeholder="코드입력" maxlength="5" required />
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className="btn">
                                        <li><a href="#">홈페이지이용약관 (전문)</a></li>
                                        <li><a href="#">개인정보처리방침 (전문)</a></li>
                                    </ul>
                                    <p className="txt">
                                        <input type="checkbox" id="check" name="check" required />
                                        <label for="check">&nbsp;<span></span> 위의 모든 약관의 내용을 확인하였으며 이에 동의합니다.</label>
                                    </p>
                                    <button>문의사항 작성하기</button>
                                
                                </div>

                            </form>
                        </div>
                        <div className="request-project-img">
                            <img src="./images/img_request.jpg" alt="이미지" />
                        </div>
                    </div>
                </article>
            </div>
        </>
    )
}