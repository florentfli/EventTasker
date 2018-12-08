'user strict';
import dotenv from 'dotenv';

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

/*
connection.connect(function(err) {
    if (err) throw err;
});*/

module.exports = connection;


/*var dataBase = function () {
};

module.exports = dataBase;

dataBase.getInstance = function () {
    if (typeof dataBase.db === 'undefined') {
        dataBase.Initialiser();
    }
    return dataBase.db;
}

dataBase.Initialiser = function () {
    // BaseDeDonnees.db = new postgresql.Client(chaineDeConnection);
    dataBase.db = new mysql.createConnection({
        user: process.env.BDD_UTILISATEUR,
        host: process.env.BDD_HOTE,
        database: process.env.BDD_NOM,
        password: process.env.BDD_MOT_DE_PASSE,
        insecureAuth: true,
        port: process.env.BDD_PORT
    });
    dataBase.db.connect(function (err) {
        if (err) throw err;
    });
};

dataBase.Disconnect = async function () {
    if (dataBase.db) {
        dataBase.db.close();
    }
}*/
