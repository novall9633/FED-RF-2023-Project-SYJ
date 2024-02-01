export function Captcha() {
    return <img src={process.env.PUBLIC_URL + "/images/captcha.jpg"} id="imgCaptcha" className="vmiddle" />;
}
