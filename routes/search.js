

exports.searchData = function(req, res) {

    var message = "";
    var session = req.session;

    //Easy way to check if they are logged in

    /*
    100% works, uncomment when submitting program
    if(!req.session.user) {
        res.render("login");
    }
    */

    /* end of login check here */


    if(req.method == "GET") {

        console.log("SEARCH METHOD = GET");

        var sql = "SELECT table_name FROM information_schema.tables WHERE table_schema = 'csc675db'";
        
        var query = req.app.db.query(sql, function(err, result, fields) {

            if(err) {
                throw err;
            }
            
            console.log(result);
            res.render("search", { result: JSON.stringify(result) }); 
        });
    }

    if(req.method == "POST") {

        var post = req.body;

        var search = post.search;
        console.log("SEARCH METHOD = POST");
        console.log("Search Result = " + search);

        //var sql = "show tables";
        //[ RowDataPacket { Tables_in_csc675db: 'User' } ]

        var sql = "SELECT table_name FROM information_schema.tables WHERE table_schema = 'csc675db'";
        
        var query = req.app.db.query(sql, function(err, result, fields) {

            if(err) {
                throw err;
            }
            
            console.log(JSON.stringify(result));
            res.render("search", { searchData: JSON.stringify(result) });
        });

        /*
        [ RowDataPacket { Tables_in_csc675db: 'User' } ]

        var sql = "SELECT * FROM User";
        result shows all the tables in User
        var query = req.app.db.query(sql, function(err, result, fields) {

            if(err) {
                throw err;
            }
            
            console.log(fields);
            res.render("search", {search: search});
        });
        */

        

        
    }
    
};




/*
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
         
    }
    else {
        res.render('signup');
    }
*/