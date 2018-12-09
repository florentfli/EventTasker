(function () {
        var userDAO = new UserDAO();
        var eventDAO = new EventDAO();

        this.init = function () {
            window.addEventListener("hashchange", navigate);
            this.navigate()
        };

        this.navigate = function () {

            var hash = window.location.hash;

            if (!hash) {
                checkIfConnected();

                var viewListEvent = new ViewListEvent();
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
                var viewAddEvent = new ViewAddEvent();
                viewAddEvent.show();
            }
        };

        var navigatToHome = function () {
            window.location.hash = "#";
        };


        var actionLogin = function (login,password) {
            var callbackConnexion = function(){
                localStorage['user'] = JSON.stringify({
                    "login":login,
                    "password":password
                })
                navigatToHome();
            }

            userDAO.connexion(login,password,callbackConnexion)
        }

        init();
    }
)();
