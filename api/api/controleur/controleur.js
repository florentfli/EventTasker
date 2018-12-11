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
                    console.log('connexion of user ' + JSON.stringify(user));
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
            accessor.addEvent(name, date, description, color, function (err, event) {
                if (err) {
                    res.send(err);
                    res.json(event);
                } else {
                    console.log('Added event :' + JSON.stringify(event));
                    res.send(event);
                }
            });
        }
    } else {
        res.send('Error: Connexion denied.');
    }
};

exports.delete_event = function (req, res) {

    res.contentType('application/json');

    if (req.header('auth') === 'flo') {
        var id = req.body.id;

        //handles null error
        if (!id) {
            res.status(400).send({error: true, message: 'Please provide id'});
        }
        else {
            accessor.deleteEvent(id, function (err, event) {
                if (err) {
                    res.send(err);
                    res.json(event);
                } else {
                    console.log('Deleted event :' + JSON.stringify(event));
                    res.send(event);
                }
            });
        }
    } else {
        res.send('Error: Connexion denied.');
    }
};


exports.edit_event = function (req, res) {

    res.contentType('application/json');

    if (req.header('auth') === 'flo') {
        var id = req.body.id;
        var name = req.body.name;
        var date = req.body.date;
        var description = req.body.description;
        var color = req.body.color;

        //handles null error
        if (!id || !name || !date || !description || !color) {
            res.status(400).send({error: true, message: 'Please provide id/name/date/description/color'});
        }
        else {
            accessor.editEvent(id, name, description, date, color, function (err, event) {
                if (err) {
                    res.send(err);
                    res.json(event);
                } else {
                    console.log('Edited event :' + JSON.stringify(event));
                    res.send(event);
                }
            });
        }
    } else {
        res.send('Error: Connexion denied.');
    }
};


exports.get_event = function (req, res) {

    res.contentType('application/json');

    if (req.header('auth') === 'flo') {
        var id = req.body.id;

        //handles null error
        if (!id) {
            res.status(400).send({error: true, message: 'Please provide id'});
        }
        else {
            accessor.getEvent(id, function (err, event) {
                if (err) {
                    res.send(err);
                    res.json(event);
                } else {
                    console.log('Event :' + JSON.stringify(event));
                    res.send(event);
                }
            });
        }
    } else {
        res.send('Error: Connexion denied.');
    }
};


exports.get_counter = function (req, res) {

    res.contentType('application/json');

    if (req.header('auth') === 'flo') {
        accessor.getCounter(function (err, counter) {
            if (err) {
                res.send(err);
                res.json(counter);
            } else {
                console.log('get counter :' + JSON.stringify(counter));
                res.send(counter);
            }
        });
    } else {
        res.send('Error: Connexion denied.');
    }
};


exports.plus_counter = function (req, res) {

    res.contentType('application/json');

    if (req.header('auth') === 'flo') {

        accessor.plusCounter(function (err, event) {
            if (err) {
                res.send(err);
                res.json(event);
            } else {
                console.log('Event :' + JSON.stringify(event));
                res.send(event);
            }
        });

    } else {
        res.send('Error: Connexion denied.');
    }
};


exports.minus_counter = function (req, res) {

    res.contentType('application/json');

    if (req.header('auth') === 'flo') {
        accessor.minusCounter(function (err, event) {
            if (err) {
                res.send(err);
                res.json(event);
            } else {
                console.log('Event :' + JSON.stringify(event));
                res.send(event);
            }
        });

    } else {
        res.send('Error: Connexion denied.');
    }
};
