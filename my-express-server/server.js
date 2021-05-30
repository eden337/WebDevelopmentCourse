//jshint esversion:6

const express = require('express');
const app = express();
app.listen(3000,function(){
    console.log("Server started on port 3000");
});

app.get("/",function(req,res){
    res.send("<h1>Hello world</h1>");
});

app.get("/contact",function(req,res){
    res.send("Contact me at: blabla@gmail.com");
});

app.get("/about",function (req,res){
    res.send("My name is Eden Schwartz, I am a game & web developer");
});