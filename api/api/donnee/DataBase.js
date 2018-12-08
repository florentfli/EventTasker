import dotenv from 'dotenv';
var mysql = require('mysql');


var dataBase = function () {
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
    dataBase.db = new mysql.createPool({
        user: process.env.BDD_UTILISATEUR,
        host: process.env.BDD_HOTE,
        database: process.env.BDD_NOM,
        password: process.env.BDD_MOT_DE_PASSE,
        //port: process.env.BDD_PORT,
    })

   // BaseDeDonnees.db.connect();
}

dataBase.Disconnect = async function () {
    if (dataBase.db) {
        dataBase.db.close();
    }
}
