var CounterDAO = function () {

    this.plusCounter = function (callback) {
        var url = API_URL + "/counter/plus";
        var request = new XMLHttpRequest();

        request.addEventListener("readystatechange", function () {
            if (request.readyState === 4 && request.status === 200) {
                callback();
            }
        });

        request.open("GET", url);
        request.setRequestHeader("auth", API_AUTH);
        request.setRequestHeader("Content-Type", "application/json");

        request.send(null);
    };

    this.minusCounter = function (callback) {
        var url = API_URL + "/counter/minus";
        var request = new XMLHttpRequest();

        request.addEventListener("readystatechange", function () {
            if (request.readyState === 4 && request.status === 200) {
                callback();
            }
        });

        request.open("GET", url);
        request.setRequestHeader("auth", API_AUTH);
        request.setRequestHeader("Content-Type", "application/json");

        request.send(null);
    };

    this.getCounter= function (callback) {
        var url = API_URL + "/counter";
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
};
