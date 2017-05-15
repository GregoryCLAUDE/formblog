var express = require("express");
var app = express();
var markdown = require("markdown").markdown;
var bodyparser= require("body-parser");
var fs = require("fs");
var articles=[];
app.use(express.static("views"));
app.set("view engine", "jade");
app.set("views", "./views");
app.use(bodyparser.urlencoded({extend:false}));
app.use(bodyparser.json());

app.listen(3000, function(){

	console.log("Yipikai! le serveur est en route!")
});


app.get("/", function(req, res){

	res.render("index", {title:"Mon blog", message:"Le blog d'Angelus3x"})
});

app.get("/article", function(req, res){

	res.render("article")
})

app.get("/admin", function(req, res){
	create(articles)
	res.render("admin")
	console.log(articles)
})

app.post("/admin", function(req, res){
	//addStory(articles, req, res)
	res.render ("admin")	
})


function create(array){
	for (var i = 0; i < array.length; i++) {
		console.log(array[i])
	}

}

// function addStory (dir, req, res){

// 	var data= req.body;

// 	var addComponent ={

// 		title: data.title,
// 		text: data.text
// 	}
// 	nodefs.readFile(dir, function(err, data){

// 		obj.JSON.parser(data);
// 		obj.push(addComponent);
// 		json=JSON.stringify(obj);
// 		nodefs.writeFile(dir, json)
// 	})

// }