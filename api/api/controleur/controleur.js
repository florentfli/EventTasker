'use strict';

var accessor = require('../donnee/model.js');

exports.list_all_events = function (req, res) {
    if (req.header('auth') === 'flo') {
        accessor.getAllEvents(function (err, event) {
            if (err) {
                res.send(err);
            }
            else {
                res.send(event);
            }
        });
    } else {
        res.send('Error: Connexion denied.');
    }
};

exports.list_all_users = function (req, res) {
    if (req.header('auth') === 'flo') {
        accessor.getAllUser(function (err, user) {
            if (err) {
                res.send(err);
            }
            else {
                console.log('res', user);
                res.send(user);
            }
        });
    } else {
        res.send('Error: Connexion denied.');
    }
};


exports.connecxion = function (req, res) {

    res.contentType('application/json');

    if (req.header('auth') === 'flo') {
        var login = req.body.login;
        var password = req.body.password;
        ;

        //handles null error
        if (!login || !password) {
            res.status(400).send({error: true, message: 'Please provide user/status'});
        }
        else {
            accessor.connect(login, password, function (err, user) {
                if (err) {
                    res.send(err);
                    res.json(user);
                } else {
                    console.log('connexion of user '+JSON.stringify(user));
                    res.send(user);
                }
            });
        }
    } else {
        res.send('Error: Connexion denied.');
    }
};


exports.add_event = function (req, res) {

    res.contentType('application/json');

    if (req.header('auth') === 'flo') {
        var name = req.body.name;
        var date = req.body.date;
        var description = req.body.description;
        var color = req.body.color;

        //handles null error
        if (!name || !date || !description || !color) {
            res.status(400).send({error: true, message: 'Please provide name/date/descritpion/color'});
        }
        else {
            accessor.addEvent(name, date,description,color, function (err, event) {
                if (err) {
                    res.send(err);
                    res.json(event);
                } else {
                    console.log('Added event :'+JSON.stringify(event));
                    res.send(event);
                }
            });
        }
    } else {
        res.send('Error: Connexion denied.');
    }
};


/*
var utilisateurDAO = require('../donnee/UserDAO');


exports.seConnecter = async function (requete, reponse) {
    try {
        let pseudoUtilisateur = requete.body[utilisateurDAO.NAME_LOGIN];
        let passeUtilisateur = requete.body[utilisateurDAO.NAME_PASSWORD];
        console.log(requete.body);
        const { rows : utilisateurs } = await utilisateurDAO.connect(pseudoUtilisateur, passeUtilisateur);

        if(typeof utilisateurs !== 'undefined' && utilisateurs.length > 0){
            return reponse.status(200).send(utilisateurs[0]);
        }
        return reponse.status(204).send();
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
};

exports.listUsers= async function (requete, reponse) {
    try {
        const { rows : utilisateurs } = await utilisateurDAO.listUsers();

        if(typeof utilisateurs !== 'undefined' && utilisateurs.length > 0){
            return reponse.status(200).send(utilisateurs[0]);
        }
        return reponse.status(204).send();
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
};

exports.postUtilisateur = async function (requete, reponse) {

    try {
        let pseudo = requete.body[utilisateurDAO.NAME_LOGIN];
        let passe = requete.body[utilisateurDAO.NAME_PASSWORD];
        console.log(pseudo);
        console.log(passe);

        if(!pseudo || !passe){
            return reponse.send('Pseudo ou mot de passe invalide');
        }
        const { rows : utilisateur } = await utilisateurDAO.addUser(pseudo, passe);

        return reponse.status(200).send({ 'message': 'Insertion réussie'});
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}*/
