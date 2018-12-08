'use strict';

var User = require('../donnee/UserDAO.js');

exports.list_all_users = function (req, res) {
    if (req.header('auth') === 'flo') {
        User.getAllUser(function (err, user) {
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
            User.connect(login, password, function (err, user) {
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
