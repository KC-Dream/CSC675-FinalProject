/*
const express = require('express');
const router = express.Router();

router.get("/login", function(req, res) {
    res.render("login");
});



module.exports = router;
*/

exports.signup = function(req, res) {
    info = '';

    console.log("signup req.method = " + req.method);

    if(req.method == "POST") {
        var post = req.body;
        var curr_firstname = post.firstname;
        var curr_lastname = post.lastname;
        var curr_email = post.email;
        var curr_languageid = post.language_id;
        var curr_pass = post.password;

        console.log("curr_firstname = " + curr_firstname);
        console.log("curr_lastname = " + curr_lastname);
        console.log("curr_email = " + curr_email);
        console.log("curr_languageid = " + curr_languageid);
        console.log("curr_pass = " + curr_pass);

        //correct syntax below confirmed!
        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var query = req.app.db.query(sql, function(err, result) {
            if(err) {
                throw err;
            }
            info = "Sign Up was sucessful for this user.";
            console.log("Sucessfully signed up!");
            res.render('signup.ejs', {info: info});
        });

        /*
        `mydb`.`User`
        `user_id` TINYINT(1) NOT NULL,
        `firstname` VARCHAR(45) NOT NULL,
        `lastname` VARCHAR(45) NOT NULL,
        `email` VARCHAR(45) NOT NULL,
        `language_id` TINYINT(1) NOT NULL,
        `password` VARCHAR(45) NOT NULL,
         */
    }
    else {
        res.render('signup');
    }
};

exports.login = function(req, res) {
    var info = '';
    var session = req.session;

    console.log("login req.method = " + req.method);

    if(req.method == "POST") {

        var post = req.body;
        var curr_email = post.email;
        var curr_pass = post.password;

        console.log("email = " + curr_email);
        console.log("password = " + curr_pass);

        //console.log(session.userId);

        //var sql = "SELECT user_id, firstname, lastname, email FROM `User` WHERE `email`='" + curr_email + "' and password = '" + curr_pass + "'";
        var sql = "SELECT user_id, firstname, lastname, email FROM `User` WHERE `email`='" + curr_email + "' and password = '" + curr_pass + "'";

        req.app.db.query(sql, function(err, results) {

            console.log("Results = " + results);

            if(results.length > 0) {

                req.session.userId = results[0].user_id;
                req.session.user = results[0];

                console.log(results[0].user_id);

                res.render('profile', {data: results});
            }
            else {
                info = 'Incorrect Login';
                console.log("Incorrect Login");
                res.render('login', {info: info});
            }
        });
    }
    else {
        res.render('login', {info: info});
    }

};


exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        console.log("logged out.")
        res.redirect("/login");
        return;
    });
};

exports.profile = function(req, res) {
    
    var user = req.session.user;
    var userId = req.session.userId;

    if(userId == null) {
        res.redirect("/login");
        return;
    }

    //Update the SQL Data here

    console.log(user);
    console.log(userId);

    var sql = "SELECT * FROM `User` WHERE `user_id` = '" + userId + "' ";

        req.app.db.query(sql, function(err, results) {
            
            res.render("profile.ejs", { currentUser: user, data: results });
        });
    
};


