var express = require("express");
var app = express();
var request = require("request");
var bodyParser = require("body-parser");
// var NewsAPI = require('newsapi');
// var newsapi = new NewsAPI('API_KEY');
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var article = [
    {title:"newsnews",author:"sam",content:"this is the news zzgdf gszfibskjjgzsfb lorem ipsum" ,category:"genral",fc :0}
    ,{title:"newsnews",author:"sam",content:"this is the news zzgdf gszfibskjjgzsfb lorem ipsum" ,category:"genral",fc :0}
    ,{title:"newsnews",author:"sam",content:"this is the news zzgdf gszfibskjjgzsfb lorem ipsum" ,category:"genral",fc :0}
]

app.get("/", function(req, res){
    var data=article;
    res.render("results",{data : data});
   
    // var url = 'https://newsapi.org/v2/top-headlines?' +
    //       'country=us&' +
    //       'apiKey=200561a88ba24bc1b60574b45a63045a';
    // request(url, function(error, response, body){
    //      if(!error && response.statusCode == 200) {
    //                     var data = JSON.parse(body)
    //                     res.render("results", {data: data});
    //                 }
    //  });
   });
//    app.get("/campgrounds", function(req, res){
//     res.render("campgrounds",{campgrounds:campgrounds});
// });

app.post("/newarticle", function(req, res){
    // get data from form and add to campgrounds array
    console.log(req.body);
    var title = req.body.title;
    var author = req.body.author;
    var content = req.body.content; 
    var category = req.body.category;
    var newart ={title: title , author : author , content : content , category : category,fc : 0};
    article.push(newart);
    //redirect back to campgrounds page
    res.redirect("/");
});

app.get("/newarticle1", function(req, res){
   res.render("new.ejs"); 
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

app.post("/fakevote", function(req, res){
    console.log("b clicked");
    res.redirect("/");
    // console.log(name);
    // article.forEach(function(art){
    //     if(name == art["title"])
    //     {
    //         art["fc"]++;
    //     }
    // });
});


app.listen(3000, function(){
    console.log("Movie App has started!!!");
});

// 200561a88ba24bc1b60574b45a63045a