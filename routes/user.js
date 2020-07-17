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
    if(req.method == "POST") {
        var post = req.body;
        var curr_firstname = post.firstname;
        var curr_lastname = post.lastname;
        var curr_email = post.email;
        var curr_languageid = post.language_id;
        var curr_pass = post.password;

        var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES (' " + curr_firstname + " ', ' '" + curr_lastname + " ', ' " + curr_pass + " ', ' " + curr_email + " ', ' " + curr_languageid + " ' )";

        var query = db.query(sql, function(err, result) {
            info = "Sign Up was sucessful for this student.";
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

    if(req.method == "POST") {
        var curr_email = post.email;
        var curr_pass = post.password;

        var sql = "SELECT user_id, firstname, lastname, email FROM `User` WHERE `email` = ' " + curr_email + " ' and password = ' " + curr_pass + " ' ";

        db.query(sql, function(err, results) {
            if(results.length) {
                req.session.userId = results[0].id;
                req.session.user = results[0];
                console.log(results[0].id);
                res.redirect('/');
            }
            else {
                info = 'Incorrect Login';
                res.render('home.ejs', {info: info});
            }
        });
    }
    else {
        res.render('login', {info: info});
    }

};