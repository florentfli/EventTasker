'use strict';

module.exports = function (app) {

    var controleur = require('../controleur/controleur');

    const cors = require('cors');
    app.use(cors());
    app.options('*', cors());

    app.route('/user')
        .get(controleur.list_all_users);

    app.route('/connexion')
        .post(controleur.connecxion);

    app.route('/event')
        .get(controleur.list_all_events);

    app.route('/get_event')
        .post(controleur.get_event);

    app.route('/event')
        .post(controleur.add_event);

    app.route('/delete_event')
        .post(controleur.delete_event);

    app.route('/edit_event')
        .post(controleur.edit_event);
};