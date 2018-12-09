var ViewAddEvent = (function () {

    var pageAddEvent = document.getElementById("page-add-event").innerHTML;

    return function (actionLogin) {

        this.show = function () {

            document.getElementById("container").innerHTML = pageAddEvent;

            var formLogin = document.getElementById("form-add-event");

            formLogin.addEventListener("submit", addEvent);
        }

        var addEvent = function (event) {
            event.preventDefault();

            var name = document.getElementById("name").value;
            var date = document.getElementById("date").value;
            var description = document.getElementById("description").value;
            var color = document.getElementById("color").value;

            console.log("name: " + name)

            //actionLogin(login,password);
        }
    }
})();