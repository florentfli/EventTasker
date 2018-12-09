var EventDAO = function () {

    this.listEvents = function (callback) {
        var url = API_URL + "/event";
        var request = new XMLHttpRequest();

        request.addEventListener("readystatechange", function () {
            if (request.readyState === 4 && request.status === 200) {
                callback(request.responseText);
            }
        });

        request.open("GET", url);
        request.setRequestHeader("auth", API_AUTH);
        request.setRequestHeader("Content-Type", "application/json");

        request.send(null);
    };

    this.addEvent = function (name,date,description,color,callback) {
        var url = API_URL + "/event";
        var request = new XMLHttpRequest();
        var data = JSON.stringify({
           "name":name,
           "description":description,
           "date":date,
           "color":color
        });

        request.addEventListener("readystatechange", function () {
            if (request.readyState === 4 && request.status === 200) {
                callback(request.responseText);
            }
        });

        request.open("POST", url);
        request.setRequestHeader("auth", API_AUTH);
        request.setRequestHeader("Content-Type", "application/json");

        request.send(data);
    };

};
