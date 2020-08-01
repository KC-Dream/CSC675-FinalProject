

exports.updateData = function(req, res) {

    var message = "";
    var session = req.session;

    //Easy way to check if they are logged in

    /*
    100% works, uncomment when done
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

            var allTableArray = [];

            //console.log(result);
            //console.log("length = " + result.length);

            for(var i = 0; i < result.length; i++) {

                //console.log(result[i]);

                var stringResult = JSON.stringify(result[i]);

                stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                stringResult = stringResult.replace("\"}", "");

                //console.log(stringResult);

                if(i == 0) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field: firstname,lastname,balance,language_id";
                }
                if(i == 1) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field: firstname,lastname,language_id";
                }
                if(i == 2) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field:  auditorium_name,language_id";
                }
                if(i == 3) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field:  firstname,lastname,bank_account_number,routing_number,language_id";
                }
                if(i == 4) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field:  cafeteria_name,language_id";
                }
                if(i == 5) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field:  cafeteria_name,language_id";
                }
                if(i == 6) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field:  classroom_name,language_id";
                }
                if(i == 7) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field:  days,language_id";
                }
                if(i == 8) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field:  highest_degree,cost,language_id";
                }
                if(i == 9) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field:  firstname,lastname,department,language_id";
                }
                if(i == 10) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field:  course_name,prerequisites,number_of_seats,number_of_exams,materials";
                }
                if(i == 11) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field:  course_name,course_description,language_id";
                }
                if(i == 12) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field:  days,language_id";
                }
                if(i == 13) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field:  section_number,language_id";
                }
                if(i == 14) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field:  firstname,lastname,card_number,cvv,expiration_date,language_id";
                }
                if(i == 15) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field:  degree_type,language_id";
                }
                if(i == 16) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field:  department_name,location,language_id";
                }
                if(i == 17) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field:  occupation,language_id";
                }
                if(i == 18) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field:  amount,language_id";
                }
                if(i == 19) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field:  cost,language_id";
                }
                if(i == 20) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field:  healthroom,language_id";
                }
                if(i == 21) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field:  labatory_name,language_id";
                }
                if(i == 22) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field:  languages_name,languages_id";
                }
                if(i == 23) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field:  library_name,language_id";
                }
                if(i == 24) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field:  amount,language_id";
                }
                if(i == 25) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field:  major_name,language_id";
                }
                if(i == 26) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field:  cost,language_id";
                }
                if(i == 27) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field:  firstname,lastname,language_id";
                }
                if(i == 28) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field:  office_name,language_id";
                }
                if(i == 29) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field:  organization_name,language_id";
                }
                if(i == 30) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field:  billing_address,billing_city,billing_zipcode,billing_state,billing_country,language_id";
                }
                if(i == 31) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field:  plan_name,language_id";
                }
                if(i == 32) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field:  firstname,lastname,language_id";
                }
                if(i == 33) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field:  firstname,lastname,language_id";
                }
                if(i == 34) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field:  program_name";
                }
                if(i == 35) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field:  Room_number,location,floor,language_id";
                }
                if(i == 36) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field: size,language_id ";
                }
                if(i == 37) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field:  year,month,language_id";
                }
                if(i == 38) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field:  amount,language_id";
                }
                if(i == 39) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field: school_name, language_id ";
                }
                if(i == 40) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field: term,holidays,language_id ";
                }
                if(i == 41) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field: language_id ";
                }
                if(i == 42) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field: firstname,lastname,language_id";
                }
                if(i == 43) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field: evaluation_name,language_id";
                }
                if(i == 44) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field: subject_name,language_id";
                }
                if(i == 45) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field: firstname,lastname,phone_number,language_id";
                }
                if(i == 46) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field: syllabus_name,semester_term,language_id ";
                }
                if(i == 47) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field:  firstname,lastname,department,phone_number,email,language_id";
                }
                if(i == 48) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field:  firstname,lastname,language_id";
                }
                if(i == 49) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field:  firstname,lastname,gpa,nits_completed,language_id";
                }
                if(i == 50) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field: highest_degree,cost,language_id";
                }
                if(i == 51) {
                    stringResult = stringResult + " - Value is whatever you choose. For example of field: firstname,lastname,email,language_id";
                }


                allTableArray[i] = stringResult;

                //console.log(allTableArray);

            }

           res.render("update", { result : allTableArray }); 

        });
    }

    if(req.method == "POST") {

        var post = req.body;

        var search = post.search;
        console.log("SEARCH METHOD = POST");
        console.log("Search Result = " + search);

        //var sql = "show tables";
        //[ RowDataPacket { Tables_in_csc675db: 'User' } ]

        var sql = "SELECT * FROM " + "" + search + "";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                console.log(result);
            
                console.log(JSON.stringify(result));
    
                var allAttributeArray = [];
    
                for(var i = 0; i < result.length; i++) {
    
                    //console.log(result[i]);
    
                    var stringResult = JSON.stringify(result[i]);
    
                    //stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");
    
                    stringResult = stringResult.replace("{", "");
                    stringResult = stringResult.replace("}", "");
    
                    stringResult = stringResult.split("\"").join(" ");
    
                    //console.log(stringResult);
    
                    allAttributeArray[i] = stringResult;
    
                }
    
                res.render("searchResult", { searchData: allAttributeArray, searchKey: search }, );
            }
            catch(err) {

                var notFound = "No matches for this search: " + search;

                res.render("searchNotFound", { searchData : notFound });
            }

        });

    }
    
};

















exports.searchResult = function(req, res) {

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

        console.log("SEARCH RESULT METHOD = GET");

        res.render("home");
    }

    if(req.method == "POST") {

        var post = req.body;
        var search_key = post.searchKey;
        var search_field = post.searchField;
        var search_value = post.searchValue;

        console.log("SEARCH METHOD = POST");

        console.log(search_key);
        console.log(search_field);
        console.log(search_value);

        var sql = "SELECT * FROM " + search_key + " WHERE " + search_field + "='" + search_value + "'";

        var query = req.app.db.query(sql, function(err, result, fields) {

            try {

                console.log(result);

                console.log(result.length);

                console.log(result[0][0]);
            
                console.log(JSON.stringify(result));

                var allAttributeArray = [];

                for(var i = 0; i < result.length; i++) {

                    var stringResult = JSON.stringify(result[i]);

                    stringResult = stringResult.replace("{", "");
                    stringResult = stringResult.replace("}", "");

                    stringResult = stringResult.split("\"").join(" ");

                    allAttributeArray[i] = stringResult;

                }

            res.render("searchFilter", { searchData: allAttributeArray });

            }
            catch(err) {

                var notFound = "Please Enter correct information! No matches for this search: " + "Search Key: " + search_key + ", Search Field: " + search_field + ", Search Value: " + search_value;

                res.render("searchNotFound", { searchData: notFound });
            }

        });

    }

   
};




