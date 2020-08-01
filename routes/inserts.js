

exports.School = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var school_name = post.school_name;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-school");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `School` (`school_name`, `language_id`) VALUES ('" + school_name + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            console.log("result school name =" + school_name);

            console.log("rcurr_languageid =" + language_id);

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.Course = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var course_name = post.course_name;
    var prerequisites = post.prerequisites;
    var number_of_seats = post.number_of_seats;
    var materials = post.materials;
    var number_of_exams = post.number_of_exams;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-course");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `Course` (`course_name`, `prerequisites`, `number_of_seats`, `number_of_exams`, `materials`, `language_id`) VALUES ('" + course_name + "','" + prerequisites + "','" + number_of_seats + "','" + number_of_exams + "','" + materials + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.Major = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var major_name = post.major_name;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-major");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        var sql = "INSERT INTO `Major` (`major_name`, `language_id`) VALUES ('" + major_name + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.Certificate = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var certificate_name = post.certificate_name;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-certificate");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `Certificate` (`certificate_name`, `language_id`) VALUES ('" + certificate_name + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
};

exports.Degree = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var degree_type = post.degree_type;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-degree");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `Degree` (`degree_type`, `language_id`) VALUES ('" + degree_type + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.Services = function(req, res) {

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("search");

    }

    if(req.method == "POST") {

        res.render("search");

    }
    
};

exports.Transcript = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var firstname = post.firstname;
    var lastname = post.lastname;
    var gpa = post.gpa;
    var units_completed = post.units_completed;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-transcript");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `Transcript` (`firstname`, `lastname`, `gpa`, `units_completed`, `language_id`) VALUES ('" + firstname + "','" + lastname + "','" + gpa + "','" + units_completed + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.Student = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var firstname = post.firstname;
    var lastname = post.lastname;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-student");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `Student` (`firstname`, `lastname`, `language_id`) VALUES ('" + firstname + "','" + lastname + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

/*

USER IS IN THE USER ROUTE

exports.searchData = function(req, res) {

    var message = "";
    var session = req.session;

    if(req.method == "GET") {

        
        
    }

    if(req.method == "POST") {



    }
    
};

*/

exports.Languages = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var languages_name = post.languages_name;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-languages");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `Languages` (`languages_name`, `language_id`) VALUES ('" + languages_name + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.Admin = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var firstname = post.firstname;
    var lastname = post.lastname;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-admin");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `Admin` (`firstname`, `lastname`, `language_id`) VALUES ('" + firstname + "','" + lastname + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.SupportTeam = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var firstname = post.firstname;
    var lastname = post.lastname;
    var phone_number = post.phone_number;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-supportteam");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `SupportTeam` (`firstname`, `lastname`, `phone_number`, `language_id`) VALUES ('" + firstname + "','" + lastname + "','" + phone_number + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.Teacher = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var firstname = post.firstname;
    var lastname = post.lastname;
    var department = post.department;
    var phone_number = post.phone_number;
    var email = post.email;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-teacher");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `Teacher` (`firstname`, `lastname`, `department`, `phone_number`, `email`, `language_id`) VALUES ('" + firstname + "','" + lastname + "','" + department + "','" + phone_number + "','" + email + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.PoliceOfficer = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var firstname = post.firstname;
    var lastname = post.lastname;
    var number_of_seats = post.number_of_seats;
    var materials = post.materials;
    var number_of_exams = post.number_of_exams;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("policeofficer");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `PoliceOfficer` (`firstname`, `lastname`, `language_id`) VALUES ('" + firstname + "','" + lastname+ "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.NetworkSecuritySpecialist = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var firstname = post.firstname;
    var lastname = post.lastname;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-networksecurityspecialist");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `NetworkSecuritySpecialist` (`firstname`, `lastname`, `language_id`) VALUES ('" + firstname + "','" + lastname + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.Counselor = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var firstname = post.firstname;
    var lastname = post.lastname;
    var department = post.department;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-counselor");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `Counselor` (`firstname`, `lastname`, `department`, `number_of_exams`, `materials`, `language_id`) VALUES ('" + firstname + "','" + lastname + "','" + department + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.President = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var firstname = post.firstname;
    var lastname = post.lastname;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-president");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `President` (`firstname`, `lastname`, `language_id`) VALUES ('" + firstname + "','" + lastname + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    } 
    
    
    
};

exports.Employee = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var occupation = post.occupation;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-employee");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `Employee` (`occupation`, `language_id`) VALUES ('" + occupation + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.TeachingAssistant = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var firstname = post.firstname;
    var lastname = post.lastname;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-teachingassistant");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `TeachingAssistant` (`firstname`, `lastname`, `language_id`) VALUES ('" + firstname + "','" + lastname + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.CommunityCollege = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var highest_degree = post.highest_degree;
    var cost = post.cost;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-communitycollege");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `CommunityCollege` (`highest_degree`, `cost`, `language_id`) VALUES ('" + highest_degree + "','" + cost + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.University = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var highest_degree = post.highest_degree;
    var cost = post.cost;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-university");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `University` (`highest_degree`, `cost`, `language_id`) VALUES ('" + highest_degree + "','" + cost + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.RoomType = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var size = post.size;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-roomtype");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `RoomType` (`size`, `language_id`) VALUES ('" + size + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.Rooms = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var room_number = post.room_number;
    var location = post.location;
    var floor = post.floor;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-rooms");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `Rooms` (`room_number`, `location`, `floor`, `language_id`) VALUES ('" + room_number + "','" + location + "','" + floor + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.Classroom = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var classroom_name = post.classroom_name;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-classroom");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `Classroom` (`classroom_name`, `language_id`) VALUES ('" + classroom_name + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.Auditorium = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var auditorium_name = post.auditorium_name;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-auditorium ");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `Auditorium ` (`auditorium_name`, `language_id`) VALUES ('" + auditorium_name + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.Labatory = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var labatory_name = post.labatory_name;
    var prerequisites = post.prerequisites;
    var number_of_seats = post.number_of_seats;
    var materials = post.materials;
    var number_of_exams = post.number_of_exams;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-labatory");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `Labatory` (`labatory_name`, `language_id`) VALUES ('" + labatory_name + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.Office = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var office_name = post.office_name;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-office");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `Office` (`office_name`, `language_id`) VALUES ('" + office_name + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.Cafeteria = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var cafeteria_name = post.cafeteria_name;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-cafeteria");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `Cafeteria` (`cafeteria_name`, `language_id`) VALUES ('" + cafeteria_name + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.HealthRoom = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var healthroom = post.healthroom;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-healthroom");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `HealthRoom` (`healthroom`, `language_id`) VALUES ('" + healthroom + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.Library = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var library_name = post.library_name;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-library");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `Library` (`library_name`, `language_id`) VALUES ('" + library_name + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.StudentEvaluation = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var evaluation_name = post.evaluation_name;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-studentevaluation");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `StudentEvaluation` (`evaluation_name`, `language_id`) VALUES ('" + evaluation_name + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.Department = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var department_name = post.department_name;
    var location = post.location;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-department");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `Department` (`department_name`, `location`, `language_id`) VALUES ('" + department_name + "','" + location + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

/*
exports.searchData = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var course_name = post.course_name;
    var prerequisites = post.prerequisites;
    var number_of_seats = post.number_of_seats;
    var materials = post.materials;
    var number_of_exams = post.number_of_exams;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-course");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `Course` (`course_name`, `prerequisites`, `number_of_seats`, `number_of_exams`, `materials`, `language_id`) VALUES ('" + course_name + "','" + prerequisites + "','" + number_of_seats + "','" + number_of_exams + "','" + materials + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};
*/

exports.CourseSection = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var section_number = post.section_number;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-coursesection");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `CourseSection` (`section_number`, `language_id`) VALUES ('" + section_number + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.CourseDescription = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var course_name = post.course_name;
    var course_description = post.course_description;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-coursedescription");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `CourseDescription` (`course_name`, `course_description`, `language_id`) VALUES ('" + course_name + "','" + course_description + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.Schedule = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var year = post.year;
    var month = post.month;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-schedule");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `Schedule` (`year`, `month`, `language_id`) VALUES ('" + year + "','" + month + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.SchoolCalendar = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var term = post.term;
    var holidays = post.holidays;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-schoolcalendar");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `SchoolCalendar` (`term`, `holidays`, `language_id`) VALUES ('" + term + "','" + holidays + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.CourseSchedule = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var days = post.days;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-CourseSchedule");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `CourseSchedule` (`days`, `language_id`) VALUES ('" + days+ "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.ClubMeeting = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var days = post.days;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-clubmeeting");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `ClubMeeting` (`days`, `language_id`) VALUES ('" + days + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.Syllabus = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var syllabus_name = post.syllabus_name;
    var semester_term = post.semester_term;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-syllabus");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `Syllabus` (`syllabus_name`, `semester_term`, `language_id`) VALUES ('" + syllabus_name + "','" + semester_term + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.Subjects = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var subject_name = post.subject_name;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-subjects");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `Subjects` (`subject_name`, `language_id`) VALUES ('" + subject_name + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.Plans = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var plan_name = post.plan_name;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-plans");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `Plans` (`plan_name`, `language_id`) VALUES ('" + plan_name + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.MealPlan = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var cost = post.cost;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-mealplan");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `MealPlan` (`cost`, language_id`) VALUES ('" + cost + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.HealthPlan = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var cost = post.cost;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-healthplan");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `HealthPlan` (`cost`, `language_id`) VALUES ('" + cost + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.Programs = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var program_name = post.program_name;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-programs");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `Programs` (`program_name`, `language_id`) VALUES ('" + program_name + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.Organizations = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var organization_name = post.organization_name;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-organizations");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `Organizations` (`organization_name`, `language_id`) VALUES ('" + organization_name + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.PaymentType = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var billing_address = post.billing_address;
    var billing_city = post.billing_city;
    var billing_zipcode = post.billing_zipcode;
    var billing_state = post.billing_state;
    var billing_country = post.billing_country;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-paymenttype");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `PaymentType` (`billing_address`, `billing_city`, `billing_zipcode`, `billing_state`, `billing_country`, `language_id`) VALUES ('" + billing_address + "','" + billing_city + "','" + billing_zipcode + "','" + billing_state + "','" + billing_country + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.CreditCardPayment = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var firstname = post.firstname;
    var lastname = post.lastname;
    var card_number = post.card_number;
    var cvv = post.cvv;
    var expiration_date = post.expiration_date;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-creditcardpayment");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `CreditCardPayment` (`firstname`, `lastname`, `card_number`, `cvv`, `expiration_date`, `language_id`) VALUES ('" + firstname + "','" + lastname + "','" + card_number + "','" + cvv + "','" + expiration_date + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.BankAccountPayment = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var firstname = post.firstname;
    var lastname = post.lastname;
    var bank_account_number = post.bank_account_number;
    var routing_number = post.routing_number;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-bankaccountpayment");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `BankAccountPayment` (`firstname`, `lastname`, `bank_account_number`, `routing_number`, `language_id`) VALUES ('" + firstname + "','" + lastname + "','" + bank_account_number + "','" + routing_number + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.Scholarship = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var amount = post.amount;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-scholarship");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `Scholarship` (`amount`, `language_id`) VALUES ('" + amount + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.Account = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var first_name = post.first_name;
    var lastname = post.lastname;
    var balance = post.balance;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-account");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `Account` (`first_name`, `lastname`, `balance`, `language_id`) VALUES ('" + first_name + "','" + lastname + "','" + balance + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.FinancialAid  = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var amount = post.amount;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-financialaid");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `FinancialAid` (`amount`, `language_id`) VALUES ('" + amount + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.Loan  = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var amount = post.amount;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-loan");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `Loan` (`amount`, `language_id`) VALUES ('" + amount + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

exports.Submitted = function(req, res) {

    var message = "";
    var session = req.session;

    var post = req.body;
    var course_name = post.course_name;
    var prerequisites = post.prerequisites;
    var number_of_seats = post.number_of_seats;
    var materials = post.materials;
    var number_of_exams = post.number_of_exams;
    var language_id = post.language_id;

    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        res.render("inserts-course");

    }

    if(req.method == "POST") {

        var allTableArray = [];

        var insertsData = [];

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('kevin', 'zhou', '1234567@gmail.com', 1, '123456')";

        //var sql = "INSERT INTO `User` (`firstname`, `lastname`, `email`, `language_id`, `password`) VALUES ('" + curr_firstname + "','" + curr_lastname + "','" + curr_email + "','" + curr_languageid + "','" + curr_pass + "')";

        var sql = "INSERT INTO `Course` (`course_name`, `prerequisites`, `number_of_seats`, `number_of_exams`, `materials`, `language_id`) VALUES ('" + course_name + "','" + prerequisites + "','" + number_of_seats + "','" + number_of_exams + "','" + materials + "','" + language_id + "')";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                for(var i = 0; i < result.length; i++) {

                    console.log(result[i]);

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                    stringResult = stringResult.replace("\"}", "");

                    //console.log(stringResult);

                    allTableArray[i] = stringResult;

                }

                res.render("submitted-inserts", { insertsData : "Thank you for submitting" });
            }
            catch(err) {

                console.log(err);

                var notFound = "Unable to insert. Please enter info correctly.";

                res.render("submitted-inserts", { insertsData : notFound });
            }

        });

    }
    
};

