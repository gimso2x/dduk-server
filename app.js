var express = require("express");
var cors = require("cors");
var app = express();
var client_id = "KakaoAK eca45431fb2f717d80ed01051f9a043a"; //개발자센터에서 발급받은 Client ID

app.get("/search", function (req, res) {
  var api_url = "https://dapi.kakao.com/v2/local/search/category.json";
  var request = require("request");
  var options = {
    url: `${api_url}?category_group_code=FD6&x=127.046509&y=37.5479042&sort=distance`,
    headers: {
      "Authorization": client_id,
    },
  };
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
      res.end(body);
    } else {
      console.log("error");
      if (response != null) {
        res.status(response.statusCode).end();
        console.log("error = " + response.statusCode);
      }
    }
  });
});
app.listen(process.env.PORT || 3000, function () {
  console.log("http://127.0.0.1:3000/search app listening on port 3000!");
});
