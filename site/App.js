(function () {
        var userDAO = new UserDAO();

        this.init = function () {
            window.addEventListener("hashchange", navigate);
            this.navigate()
        };

        this.navigate = function () {

            var hash = window.location.hash;

            if (!hash) {
                var viewListEvent = new ViewListEvent();
                viewListEvent.show();
            }
            else if (hash.match(/^#login/)) {
                var viewLogin = new ViewLogin(actionLogin);
                viewLogin.show();
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
