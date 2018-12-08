var ViewLogin = (function () {

    var pageLogin = document.getElementById("page-login").innerHTML;

    return function () {

        this.show = function () {

            document.getElementById("container").innerHTML = pageLogin;

        }
    }
})();