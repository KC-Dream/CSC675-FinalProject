var express     = require("express"),

    app         = express(),

    bodyParser  = require("body-parser"),

    mongoose    = require("mongoose"),
    
    flash       = require("connect-flash"),

    passport    = require("passport"),

    LocalPassport = require("passport-local"),

    methodOverride = require("method-override"),
    
    session = require('express-session');

    /* 
    Also: 
    npm i ejs
    npm i nodemon
    */

    /* 
    Start Program:
    nodemon app.js
    */
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");
    
app.use(methodOverride("_method"));
    
app.use(require("express-session")({
    secret: "spongebob",
    resave: false,
    saveUninitialized: false,
}));

/* Routes Here */

const homeRouter = require('./routes/home');

app.use(homeRouter);



/* get/post here */

app.get("/", function(req, res) {
    
    res.render("home");
});



/* Server Here */

app.listen(3000, process.env.IP, function() {
    console.log("The Server Has Started!");
});


