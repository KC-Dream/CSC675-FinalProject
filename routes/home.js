/*
const express = require('express');
const router = express.Router();

router.get("/", function(req, res) {
    res.render("home");
});

router.get("/home", function(req, res) {
    res.render("home");
});

module.exports = router;
*/

exports.home = function(req, res) {
    var info = '';
    res.render('home', {info: info});
};

