var express     = require("express"),

    app         = express(),

    bodyParser  = require("body-parser"),

    mongoose    = require("mongoose"),
    
    flash       = require("connect-flash"),

    passport    = require("passport"),

    LocalPassport = require("passport-local"),

    methodOverride = require("method-override"),
    
    session = require('express-session'),
    
    routes = require('./routes/home'),
    
    user = require('./routes/user'),

    search = require('./routes/search');

    /* 
    Also: 
    npm i ejs
    npm i nodemon
    */

    /* 
    SQL
     */

    /*
    Run in terminal everytime: export PATH=${PATH}:/usr/local/mysql/bin
    or
    save in .bash_profile

    or:
    echo 'export PATH="/usr/local/mysql/bin:$PATH"' >> ~/.bash_profile

    cat .bash_profile
    */

    /*
    npm install mysql --save 
    mysql --version
    mysql -u root -p

    If you get this: 
    Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.
    mysql>

    mysql> exit

    mysql> CREATE DATABASE csc675;

    mysql> USE mydb;
     */

    
    const mysql = require('mysql');
    const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'csc675db'
    });

    db.connect((err) => {
        if(err) {
            throw err;
        }
        console.log('Connected to csc675db SQL Database.');
        db.query('USE csc675db');
    });
    
    app.db = db;

    /* 
    Start Program:
    nodemon app.js
    */
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.set("view engine", "ejs");
    
app.use(methodOverride("_method"));
    
app.use(require("express-session")({
    secret: "spongebob",
    resave: false,
    saveUninitialized: false,
}));

/* Routes Here */

//const homeRouter = require('./routes/home');

//app.use(homeRouter);



/* get/post here */

app.get("/", routes.home);

app.get("/signup", user.signup);
app.post("/signup", user.signup);
app.get("/login", user.login);
app.post("/login", user.login);
app.get("/logout", user.logout);

app.get("/user/profile", user.profile); //error TBD

/* search */

app.get("/search", search.searchData);
app.post("/search", search.searchData);
app.get("/searchResult", search.searchResult);

app.get("/exit", function(req, res) {
    res.render("exit");
    console.log("Exitting now.");
    process.exit();
});

app.use(function(req, res, next) {
    if(req.session.user) {
        res.locals.currentUser = req.session.userId;
        console.log("App.js = " + res.locals.currentUser);
        next();
        res.redirect("/");
    }
    else {
        res.redirect("/");
    }
});



/* Functions */

function isLoggedIn(req, res, next) {
    if(req.session.user) {

        return next();
    }
    res.redirect("/login");
}

/*
app.get("/home", function(req, res) {
    
    res.render("home");
});

app.get("/login", function(req, res) {
    
    res.render("login");
});

app.get("/signup", function(req, res) {
    
    res.render("signup");
});
*/


/* Server Here */

app.listen(3000, process.env.IP, function() {
    console.log("The Server Has Started!");
});


