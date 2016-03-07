


// start  app configurtion 

// creating app express 
var express = require("express");
var app = express();
// creating variable router for define app routes urls 
var router = express.Router();

// creating the path variable point to views repository  
var path = __dirname + '/views/';

// getting connection with mangodb 
var  MongoClient = require('mongodb'). MongoClient;

 MongoClient.connect("mongodb://localhost:27017/lakbacadimy", function(err, db) {
  if(err) { return console.dir(err); }else{ console.log("database connected");}


});

// use  template engine  ejs layouts 
var expressLayouts = require("express-ejs-layouts");
app.set('view engine','ejs');
app.set('layout','myLayout'); // defaults to layouts
app.use(expressLayouts);
app.set("layout extractScripts", true)
//end 


// routes 
router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});


app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});



// app server listening on prot 3000
app.listen(3000,function(){
  console.log("Live at Port 3000");
});






