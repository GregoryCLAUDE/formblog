var express = require("express");
var app = express();
var markdown = require("markdown").markdown;
var bodyparser= require("body-parser");
var fs = require("fs");
var articles=[];
const uuid=  require("uuidv4")


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
});

app.get("/articles", function(req, res){

		res.send(articles)
});

app.post("/admin", function(req, res){
	var objet = (req.body);
	objet.id = uuid();
	articles.push(objet);
	writeFiles();
	load();
});

function load(){
	app.get("/admin", function(req, res){
		res.render("admin")	
	})
};

function writeFiles(){
	fs.writeFile("articles.json", JSON.stringify(articles), function (err) {
  if (err) throw err;
  console.log('The file has been saved!');
});
};

function readFiles(){
	fs.readFile("articles.json","utf8", function (err, data) {
  if (err) 
	throw err;
  //console.log(data);
  articles=JSON.parse(data)
});
};


readFiles();
load();
