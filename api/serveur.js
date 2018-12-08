require('babel-register')({
    presets: [ 'env' ]
});
import "@babel/polyfill";

var dotenv = require('dotenv');
dotenv.load();
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
port = process.env.BDD_PORT || 8080;


const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    user: process.env.BDD_UTILISATEUR,
    host: process.env.BDD_HOTE,
    database: process.env.BDD_NOM,
    password: process.env.BDD_MOT_DE_PASSE
    //port: process.env.BDD_PORT
});

// connect to database
mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/route/routes');
routes(app); //register the route


/*require('babel-register')({
    presets: [ 'env' ]
})
import express from 'express';
import "@babel/polyfill";
var dotenv = require('dotenv');
dotenv.load();

dotenv.config();
const app = express();
const port = 8080;
/*
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authentification");
    next();
});
app.use(express.json());

app.get('/', (req, res) => {

    return res.status(200).send('Vous êtes bien connecté au serveur');
});

//utilisation des routes
let routesUtilisateurs =require('./api/route/routes');

routesUtilisateurs(app);

app.listen(port);
console.log('Le serveur tourne sur le port ', port);*/
