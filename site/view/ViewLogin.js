var ViewLogin = (function () {

    var pageLogin = document.getElementById("page-login").innerHTML;

    return function (actionLogin) {

        this.show = function () {

            document.getElementById("container").innerHTML = pageLogin;

            var formLogin = document.getElementById("form-login");

            formLogin.addEventListener("submit", connexion);
        }

        var connexion = function (event) {
            event.preventDefault();

            var login = document.getElementById("login").value;
            var password = document.getElementById("password").value;

            console.log("login: " + login)
            console.log("password: " + password)

            actionLogin(login,password);
        }
    }
})();