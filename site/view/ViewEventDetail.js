var ViewEventDetail = (function () {

    var pageEvent = document.getElementById("page-event-detail").innerHTML;

    return function () {
        this.show = function (event) {

            document.getElementById("container").innerHTML = pageEvent;

        }
    }
})();