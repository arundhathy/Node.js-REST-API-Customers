const mysql = require('mysql');
const dbConfig = require('C:/Users/arund/Desktop/TKM Docs/nodeJS/customers/app/config/db.config.js');

//create connection to database
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

//open connection
connection.connect(error => {
    if(error) throw error();
    console.log('successfully connected to database');
});

module.exports = connection;