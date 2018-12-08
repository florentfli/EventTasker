'user strict';
var sql = require('./DataBase');

//Task object constructor
var User = function(user){
    this.task = user.task;
    this.status = user.status;
    this.created_at = new Date();
};
User.createUser = function createUser(newUser, result) {
    sql.query("INSERT INTO user set ?", newUser, function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
User.getTaskById = function createUser(userId, result) {
    sql.query("Select * from user where id = ? ", userId, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);

        }
    });
};
User.getAllUser = function getAllUser(result) {
    sql.query("Select * from user", function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }

            console.log('users : ', res);

            result(null, res);

    });
};

module.exports= User;


/*
var baseDeDonnees = require('./DataBase').getInstance();

export const NAME_TABLE = "user";
export const NAME_LOGIN = "login";
export const NAME_PASSWORD = "password";

exports.connect = async function (login, mot_de_passe) {
    const SELECT_USER = 'select * FROM ' + NAME_TABLE + ' WHERE ' + NAME_LOGIN + '= $1 AND ' + NAME_PASSWORD + '=$2';
    return baseDeDonnees.query(SELECT_USER, [login, mot_de_passe]);
};

exports.addUser = async function (login, password) {
    const INSERT_USER = 'insert into ' + NAME_TABLE + '(' + NAME_LOGIN + ', ' + NAME_PASSWORD + ') values($1, $2);';
    console.log(INSERT_USER);
    return baseDeDonnees.query(INSERT_USER, [login, password]);
};

exports.listUsers = async function (callbck) {
    const INSERT_USER = 'SELECT * FROM user;';

    baseDeDonnees.query(INSERT_USER, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        callbck(result)
    });
};*/
