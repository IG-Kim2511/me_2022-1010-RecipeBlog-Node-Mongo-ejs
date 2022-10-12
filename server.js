var express = require('express')
var app = express()

// colors
var colors = require('colors');

// layout
var expressLayouts = require('express-ejs-layouts');

// dotenv
const dotenv = require('dotenv')

// express-ejs-layouts
var expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout', 'layouts/layout');

// static
app.use(express.static('public'));

// router
// const routes = require('./server/routes/recipeRoutes.js');
// app.use('/',routes);



app.get('/', function (req, res) {
    res.send('Hello World')
})

// listen
const port = process.env.PORT || 8080;
app.listen(port, ()=>{
    console.log((`ig-listen ${port}`).bgMagenta)
})