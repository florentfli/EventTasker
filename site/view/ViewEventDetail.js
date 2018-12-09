var ViewEventDetail = (function () {

    var pageEvent = document.getElementById("page-event-detail").innerHTML;

    return function () {
        this.show = function (event) {

            var event = event.substring(1, event .length-1);
            event = JSON.parse(event);
            console.log(event.color);
            document.getElementById("container").innerHTML = pageEvent;

            var html = '<h2>Details</h2>' +
                '<h4>Name : <b>' + event.name + '</b></h4><br>' +
                '<h4>Date : <b>' + formatDateDisplay(event.date) + '</b></h4><br>' +
                '<h4>Days to go : <b>' + calculteDiffDate(event.date) + '</b></h4><br>' +
                '<h4>Description : </h4><br>' +
                '<p><b>'+event.description+'</b></p>';

            document.getElementById('event-details').innerHTML = html;
        }
    }
})();