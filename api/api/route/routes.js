'use strict';

module.exports = function(app) {

    var controleur = require('../controleur/controleur');

    const cors = require('cors');
    app.use(cors());
    app.options('*', cors());
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    app.route('/user')
        .get(controleur.list_all_users);

    app.route('/connexion')
        .post(controleur.connecxion);

};