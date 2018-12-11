'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createPool({
    connectionLimit: 1000,
    connectTimeout: 60 * 60 * 1000,
    acquireTimeout: 60 * 60 * 1000,
    timeout: 60 * 60 * 1000,
    user: process.env.BDD_UTILISATEUR,
    host: process.env.BDD_HOTE,
    database: process.env.BDD_NOM,
    password: process.env.BDD_MOT_DE_PASSE
    //port: process.env.BDD_PORT
});

module.exports = connection;
