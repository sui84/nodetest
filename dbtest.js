 var sql = require('mssql'); 

var config = {
    user: 'sa',
    password: 'P@ssw0rd',
    server: 'SC-201609232107\\SQLEXPRESS', // You can use 'localhost\\instance' to connect to named instance
    database: 'log',
    options: {
       encrypt: true // Use this if you're on Windows Azure
    },
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
}




sql.connect("mssql://sa:P@ssw0rd@SC-201609232107\\SQLEXPRESS:1433/log").then(function() {
//sql.connect("mssql://sa:123@localhost:1433/test").then(function() {
    // Query
    new sql.Request().query('select * from sys_user').then(function(recordset) {
        console.log(recordset);
    }).catch(function(err) {
       console.log(err);
    });
    // Stored Procedure
}).catch(function(err) {
    console.log(err);
});