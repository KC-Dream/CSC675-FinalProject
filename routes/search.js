

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

            if(err) {
                //throw err;

                var notFound = "No matches for this search: " + search;

                res.render("searchResult", { searchData: notFound });
            }

            console.log(result);
            
            console.log(JSON.stringify(result));

            var allAttributeArray = [];

            for(var i = 0; i < result.length; i++) {

                //console.log(result[i]);

                var stringResult = JSON.stringify(result[i]);

                //stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                stringResult = stringResult.replace("{", "");
                stringResult = stringResult.replace("}", "");

                //Replace all Strings
                stringResult = stringResult.split("\"").join(" ");

                //console.log(stringResult);

                allAttributeArray[i] = stringResult;

            }

            res.render("searchResult", { searchData: allAttributeArray, searchKey: search }, );

            // ^ This passes 1 data to route, do {arr, arr}. {arr2, arr2}, {arr3, arr3} to pass multiple data

            //can apply filter here too instead of ejs
        });

        /* Above "User" gets all the users,

        to apply filters type: SELECT name, address FROM User

        */

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

        /*

        var sql = "SELECT table_name FROM information_schema.tables WHERE table_schema = 'csc675db'";
        
        var query = req.app.db.query(sql, function(err, result, fields) {

            if(err) {
                throw err;
            }
            
            console.log(result);
            res.render("search", { result: JSON.stringify(result) }); 
        });

        */
    }

    if(req.method == "POST") {

        var post = req.body;
        var search_key = post.searchKey;
        var search_field = post.searchField;
        var search_value = post.searchValue;

        console.log("SEARCH METHOD = POST");
        //console.log("Search Result = " + search);

        //var sql = "show tables";
        //[ RowDataPacket { Tables_in_csc675db: 'User' } ]

        //var sql = "SELECT * FROM " + "" + search + "";

        console.log(search_key);
        console.log(search_field);
        console.log(search_value);

        //var sql = "SELECT * FROM " + "" + search_key + " WHERE " + search_field + "=" + search_value + "";

        //var sql = "SELECT " + search_field + " FROM " + "" + search_key + "";
        
        //working
        //var sql = "SELECT * FROM " + "" + search_key + "";

        var sql = "SELECT firstname FROM " + "" + search_key + "";

        var query = req.app.db.query(sql, function(err, result, fields) {

            if(err) {
                //throw err;

                var notFound = "No matches for this search: " + search_key;

                res.render("searchResult", { searchData: notFound });
            }

            console.log(result);
            
            console.log(JSON.stringify(result));

            var allAttributeArray = [];

            for(var i = 0; i < result.length; i++) {

                //console.log(result[i]);

                var stringResult = JSON.stringify(result[i]);

                //stringResult = stringResult.replace("{\"TABLE_NAME\":\"", "");

                stringResult = stringResult.replace("{", "");
                stringResult = stringResult.replace("}", "");

                //Replace all Strings
                stringResult = stringResult.split("\"").join(" ");

                //console.log(stringResult);

                allAttributeArray[i] = stringResult;

            }

            res.render("searchFilter", { searchFilterData: allAttributeArray });

            // ^ This passes 1 data to route, do {arr, arr}. {arr2, arr2}, {arr3, arr3} to pass multiple data

            //can apply filter here too instead of ejs
        });

    }

    /*

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
        
    }
    */
};


/*

*/