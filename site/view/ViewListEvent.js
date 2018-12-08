var ViewListEvent = (function () {

    checkIfConnected();

    var pageLogin = document.getElementById("page-list-event").innerHTML;

    return function () {

        this.show = function () {

            document.getElementById("container").innerHTML = pageLogin;

        }
    }
})();