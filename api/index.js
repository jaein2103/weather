var express = require("express");
var app = express();
app.get("/weather", function (req, res) {
    var _a = req.query, serviceKey = _a.serviceKey, numOfRows = _a.numOfRows, pageNo = _a.pageNo, base_date = _a.base_date, base_time = _a.base_time, nx = _a.nx, ny = _a.ny;
    var api_url = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?";
    var request = require("request");
    var options = {
        url: api_url,
        qs: { serviceKey: serviceKey, numOfRows: numOfRows, pageNo: pageNo, base_date: base_date, base_time: base_time, nx: nx, ny: ny },
    };
    request.get(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.writeHead(200, { "Content-Type": "application/xml;charset=utf-8" });
            res.end(body);
        }
        else {
            res.status(response.statusCode).end();
            console.log("error = " + response.statusCode);
        }
    });
});
app.listen(3000, function () {
    console.log("http://127.0.0.1:3000/weather?serviceKey=WIoyAj17JCXdA7XLakCgvpqQCSV941aHHBzgePYCy5iwjx4OrKjPW7fzZQ%2FVusr1JqCLvwrPs6bTj1i1P90gDw%3D%3D&numOfRows=10&pageNo=1&base_date=20241028&base_time=0600&nx=61&ny=125 app listening on port 3000!");
});
