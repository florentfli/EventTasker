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

    app.route('/counter')
        .get(controleur.get_counter);

    app.route('/counter/plus')
        .get(controleur.plus_counter);

    app.route('/counter/minus')
        .get(controleur.minus_counter);

};