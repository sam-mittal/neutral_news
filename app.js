var express = require("express");
var app = express();
var request = require("request");
var NewsAPI = require('newsapi');
var newsapi = new NewsAPI('API_KEY');
app.set("view engine", "ejs");

app.get("/", function(req, res){
   
    var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=200561a88ba24bc1b60574b45a63045a';
    request(url, function(error, response, body){
         if(!error && response.statusCode == 200) {
                        var data = JSON.parse(body)
                        res.render("results", {data: data});
                    }
     });
   });

// app.get("/results", function(req, res){
//     var query = req.query.search;
//     var url = "http://omdbapi.com/?s=" + query;
//     request(url, function(error, response, body){
//         if(!error && response.statusCode == 200) {
//             var data = JSON.parse(body)
//             res.render("results", {data: data});
//         }
//     });
// });



app.listen(3000, function(){
    console.log("Movie App has started!!!");
});

// 200561a88ba24bc1b60574b45a63045a