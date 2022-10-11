var express = require('express')
var app = express()

// colors
var colors = require('colors');

// layout
var expressLayouts = require('express-ejs-layouts');

// dotenv
const dotenv = require('dotenv')



app.get('/', function (req, res) {
    res.send('Hello World')
})





const port = process.env.PORT || 8080;
app.listen(port, ()=>{
    console.log(('ig-listen').bgMagenta)
})