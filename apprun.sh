#!/usr/bin/env bash
npm install express

&& npm install body-parser && npm install express-session && npm install mysql && npm install ejs && ls && mysql --user='root' --password='password' < databasemodel.sql && node app.js
