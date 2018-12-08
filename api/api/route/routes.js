'use strict';

module.exports = function(app) {

    //var password="flo";
    var controleur = require('../controleur/controleur');

    app.route('/user')
        .get(controleur.list_all_users);

    /*app.route('/tasks/:taskId')
        .get(todoList.read_a_task)
        .put(todoList.update_a_task)
        .delete(todoList.delete_a_task);*/
};

    /*app.get('/users' , (req, res) => {
        if(req.headers.authentification !== password){
            console.log("Routage connexion : access denied")
            return res.status(401).send("Access denied");
        }
        console.log('Routage connexion : connexion d un utilisateur');
        return controleur.listUsers(req, res);
    });

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

};*/