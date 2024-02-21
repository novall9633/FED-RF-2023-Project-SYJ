// https://developers.naver.com/docs/utils/captcha/examples/

var express = require("express");
const path = require("path");
const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config({path: path.join(__dirname, ".env")});
var app = express();
app.use(cors());


var CLIENT_ID = process.env.REACT_APP_CLIENT_ID; //개발자센터에서 발급받은 Client ID
var CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET; //개발자센터에서 발급받은 Client Secret

var fs = require("fs");
// 캡처 키 발급 요청
app.get("/captcha/nkey", function (req, res) {
    var code = "0";
    var api_url = "https://openapi.naver.com/v1/captcha/nkey?code=" + code;
    var request = require("request");
    var options = {
        url: api_url,
        headers: { "X-Naver-Client-Id": CLIENT_ID, "X-Naver-Client-Secret": CLIENT_SECRET },
    };
    request.get(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
            res.end(body);
        } else {
            res.status(response.statusCode).end();
            console.log("키발급 error = " + response.statusCode);
        }
    });
});
// 캡처 이미지 요청
app.get("/captcha/image", function (req, res) {
    console.log("token값:"+req.query.key);
    var api_url = "https://openapi.naver.com/v1/captcha/ncaptcha.bin?key=" + req.query.key;
    var request = require("request");
    var options = {
        url: api_url,
        headers: { "X-Naver-Client-Id": CLIENT_ID, "X-Naver-Client-Secret": CLIENT_SECRET },
    };
    var writeStream = fs.createWriteStream("./public/images/captcha.jpg");
    var _req = request.get(options).on("response", function (response) {
        console.log(response.statusCode); // 200
        console.log(response.headers["content-type"]);
    });
    _req.pipe(writeStream); // file로 출력
    _req.pipe(res); // 브라우저로 출력
});
// 사용자 입력값 검증 요청
app.get("/captcha/result", function (req, res) {
    var code = "1";
    var api_url =
        "https://openapi.naver.com/v1/captcha/nkey?code=" +
        code +
        "&key=" +
        req.query.key +
        "&value=" +
        req.query.value;
    var request = require("request");
    var options = {
        url: api_url,
        headers: { "X-Naver-Client-Id": CLIENT_ID, "X-Naver-Client-Secret": CLIENT_SECRET },
    };
    request.get(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
            res.end(body);
        } else {
            res.status(response.statusCode).end();
            console.log("입력값 요청 error = " + response.statusCode);
        }
    });
});
app.listen(80, function () {
    console.log("http://localhost:80/captcha/nkey app listening on port 80!");
});
// app.listen(4000, function () {
//     console.log("http://localhost:4000/captcha/nkey app listening on port 4000!");
// });


app.use(express.static(path.join(__dirname, "/build")));

app.get("/", function (request, response) {
    // 내부로 전달되는 값은 처음것이 요청, 두번째가 응답임!
    response.sendFile(path.join(__dirname), "/build/index.html");
    // 첫페이지는 요청에 대한 응답임! 파일을 내려보내주니까
    // sendFile() 메서드사용!
  });