var express     = require("express"),

    app         = express(),

    bodyParser  = require("body-parser"),

    mongoose    = require("mongoose"),
    
    flash       = require("connect-flash"),

    passport    = require("passport"),

    LocalPassport = require("passport-local"),

    methodOverride = require("method-override"),
    
    session = require('express-session');



app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");
    
app.use(methodOverride("_method"));
    
app.use(require("express-session")({
    secret: "spongebob",
    resave: false,
    saveUninitialized: false,
}));

/* Routes Here */

app.get("/", function(req, res) {
    
    res.render("home");
});



/* Server Here */

app.listen(process.env.PORT, 3000, function() {
    console.log("The Server Has Started!");
});


