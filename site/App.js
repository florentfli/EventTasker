(function () {
        var userDAO = new UserDAO();
        var eventDAO = new EventDAO();
        var counterDAO = new CounterDAO();

        this.init = function () {
            window.addEventListener("hashchange", navigate);
            this.navigate()
        };

        this.navigate = function () {

            var hash = window.location.hash;

            if (!hash) {
                checkIfConnected();

                var viewListEvent = new ViewListEvent(actionDeleteEvent, actionEditEvent);

                var callbackEvent = function (response) {
                    viewListEvent.show(response);
                };

                eventDAO.listEvents(callbackEvent)
            }
            else if (hash.match(/^#login/)) {
                var viewLogin = new ViewLogin(actionLogin);
                viewLogin.show();
            }
            else if (hash.match(/^#add_event/)) {
                var viewAddEvent = new ViewAddEvent(actionAddEvent);
                viewAddEvent.show();
            }
            else if (hash.match(/^#event\/([0-9]+)/)) {
                var navigation = hash.match(/^#event\/([0-9]+)/);
                var idEvent = navigation[1];

                var callbackEvent = function (event) {
                    var viewEventDetail = new ViewEventDetail();
                    viewEventDetail.show(event);
                };

                eventDAO.getEvent(idEvent, callbackEvent);
            }
            else if (hash.match(/^#counter/)) {
                var viewCounter = new ViewCounter(actionPlusCounter,actionMinusCounter);
                viewCounter.show();
            }
        };

        var navigatToHome = function () {
            window.location.hash = "#";
        };


        var actionLogin = function (login, password) {
            var callbackConnexion = function () {
                localStorage['user'] = JSON.stringify({
                    "login": login,
                    "password": password
                })
                navigatToHome();
            };

            userDAO.connexion(login, password, callbackConnexion)
        };

        var actionAddEvent = function (name, date, description, color) {
            var callbackConnexion = function () {
                navigatToHome();
            };

            eventDAO.addEvent(name, date, description, color, callbackConnexion)
        };

        var actionDeleteEvent = function (id) {
            var callbackDelete = function () {
                window.location.reload();
            };

            eventDAO.deleteEvent(id, callbackDelete)
        };
        var actionEditEvent = function (id, name, date, description, color) {
            var callbackConnexion = function () {
                window.location.reload();
            };

            eventDAO.editEvent(id, name, date, description, color, callbackConnexion)
        };

        var actionPlusCounter = function(){

        }
        var actionMinusCounter = function(){

        }

        init();
    }
)();
