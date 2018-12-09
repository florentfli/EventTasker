'use strict';
var sql = require('./DataBase');
var md5 = require('js-md5');

//Task object constructor
var User = function (user) {
    this.login = user.login;
    this.password = user.password;
};

User.connect = function createUser(login, password, result) {
    sql.query("SELECT * FROM user WHERE login = ? AND password = ?", [login, md5(password)], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res);
            result(null, res);
        }
    });
};
User.getAllUser = function getAllUser(result) {
    sql.query("Select * from user", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        }

        console.log('users : ', res);

        result(null, res);

    });
};

User.getAllEvents = function getAllEvents(result) {
    sql.query("Select * from event", function (err, res) {

        if (err) {
            console.log("Error: ", err);
            result(err, null);
        }

        console.log('Events : ', res);

        result(null, res);
    });
};
User.addEvent = function (name, date,description,color,result) {
    sql.query("INSERT INTO event (name, description, date, color) VALUES (?,?,?,?)", [name,description,date,color], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res);
            result(null, res);
        }
    });
};

module.exports = User;
