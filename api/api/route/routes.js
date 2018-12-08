'use strict';
var controleur = require('../controleur/controleur');

module.exports = function(app) {
var password="flo";


    app.post('/connexion' , (req, res) => {
        if(req.headers.authentification !== password){
            console.log("Routage connexion : access denied")
            return res.status(401).send("Access denied");
        }
        console.log('Routage connexion : connexion d un utilisateur');
       return controleur.seConnecter(req, res);
    });

    app.post('/user' , (req, res) => {
        if(req.headers.authentification !== password){
            console.log("Routage connexion : access denied")
            return res.status(401).send("Access denied");
        }
        console.log('Routage inscription : post d un utilisateur');
        return controleur.postUtilisateur(req, res);
    });

};