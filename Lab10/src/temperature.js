const express = require('express');
const r = express.Router();
const temp = require('./temperature.js');
const main = require('./index.js');

r.get("/",function(req, res){
    res.render(__dirname +"/temperature.ejs");  
});

r.post("/" , function(req, res) {
    let body = req.body;
    let k = "";
    let f = "";
    let c = "";
    let msg = "";
    if(body.type == "fahrenheit") {
        f = body.input;
        c = (f - 32) / 1.8;
        k = (f - 32) * 5/9 + 273.15;
    } else if(body.type == "kelvin") {
        k = body.input;
        c = k - 273.15;
        f = k * 9 / 5 - 459.67;
    } else if(body.type == "celcius") {
        c = body.input;
        k = parseInt(c) + 273.15;
        f = c * 1.8 + 32;
    } else {
        msg = "please choose convertion type"
    }
    res.render(__dirname+ '/responseTemp.ejs',{
        kelvin:k,
        celcius:c,
        fahrenheit:f,
        msg:msg,
    });
});

r.use("/temperature", function(req, res) {
    res.redirect(temp);
});

r.use("/main", function(req, res) {
    res.redirect(main);
})


module.exports = r;