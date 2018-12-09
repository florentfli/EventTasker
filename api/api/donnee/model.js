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
        else {
            result(null, res);
        }

    });
};

User.getAllEvents = function getAllEvents(result) {
    sql.query("Select * from event WHERE date >= NOW() ORDER BY date", function (err, res) {

        if (err) {
            console.log("Error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
User.addEvent = function (name, date, description, color, result) {
    sql.query("INSERT INTO event (name, description, date, color) VALUES (?,?,?,?)", [name, description, date, color], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
User.deleteEvent = function (id, result) {
    sql.query("DELETE FROM event WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
User.editEvent = function (id, name, description, date, color, result) {
    sql.query("UPDATE event SET name = ?, date = ?, description = ?,  color = ? WHERE id = ?", [name,date,description,color,id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = User;
