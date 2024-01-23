// https://developers.naver.com/docs/utils/captcha/examples/

var express = require("express");
var app = express();
const cors = require("cors");
app.use(cors());

// var client_id = process.env.REACT_APP_CLIENT_ID; //개발자센터에서 발급받은 Client ID
var client_id = "hwl1zg9wp_QipovESODT";
// var client_secret = process.env.REACT_APP_CLIENT_SECRET; //개발자센터에서 발급받은 Client Secret
var client_secret = "9DletTgwZr";
var fs = require("fs");
// 캡처 키 발급 요청
app.get("/captcha/nkey", function (req, res) {
    var code = "0";
    var api_url = "https://openapi.naver.com/v1/captcha/nkey?code=" + code;
    var request = require("request");
    var options = {
        url: api_url,
        headers: { "X-Naver-Client-Id": client_id, "X-Naver-Client-Secret": client_secret },
    };
    request.get(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
            res.end(body);
        } else {
            res.status(response.statusCode).end();
            console.log("error = " + response.statusCode);
        }
    });
});
// 캡처 이미지 요청
app.get("/captcha/image", function (req, res) {
    console.log("dads"+req.query.key);
    var api_url = "https://openapi.naver.com/v1/captcha/ncaptcha.bin?key=" + req.query.key;
    var request = require("request");
    var options = {
        url: api_url,
        headers: { "X-Naver-Client-Id": client_id, "X-Naver-Client-Secret": client_secret },
    };
    var writeStream = fs.createWriteStream("./captcha.jpg");
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
        headers: { "X-Naver-Client-Id": client_id, "X-Naver-Client-Secret": client_secret },
    };
    request.get(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
            res.end(body);
        } else {
            res.status(response.statusCode).end();
            console.log("error = " + response.statusCode);
        }
    });
});
// 운영용
app.listen(80, function () {
    console.log("http://localhost:80/captcha/nkey app listening on port 80!");
});
// 개발용
// app.listen(4000, function () {
//     console.log("http://localhost:4000/captcha/nkey app listening on port 4000!");
// });
