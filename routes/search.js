

exports.searchData = function(req, res) {

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

                allTableArray[i] = stringResult;

                //console.log(allTableArray);

            }

           res.render("search", { result : allTableArray }); 

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




