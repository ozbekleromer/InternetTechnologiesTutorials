const express = require('express');
const dist = require('./distance.js');
const main = require('./index.js');
const r = express.Router();

r.get("/",function(req, res){
    res.render(__dirname +"/distance.ejs");  
});

r.post("/" , function(req, res) {
    let body = req.body;
    let msg = "";
    let km = "";
    let mile = "";
    if(body.type == "miles") {
        km = body.input / 0.6214;
        mile = body.input;
    } else if(body.type == "km") {
        mile = body.input * 0.6214;
        km = body.input;
    } else {
        msg = "please choose conversion type";
    }
    res.render(__dirname+ '/responseDist.ejs',{
        km:km,
        mile:mile,
        msg:msg,
    });
});

r.use("/distance", function(req, res){
    res.redirect(dist);
});

r.use("/main", function(req, res) {
    res.redirect(main);
})

module.exports = r;