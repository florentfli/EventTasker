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