var ViewAddEvent = (function () {

    var pageAddEvent = document.getElementById("page-add-event").innerHTML;

    return function (actionAddEvent) {

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

            if (checkDateLater(new Date(date)) && name && date && description && color){
                actionAddEvent(name,date,description,color);
            } else{
                location.reload();
            }
        }

        function checkDateLater(date) {
            var oneDay = 24*60*60*1000;
            var today = new Date();

            return (Math.round(Math.abs((today.getTime() - date.getTime())/(oneDay)))) > 0;
        }
    }
})();