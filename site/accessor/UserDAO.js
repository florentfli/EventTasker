var UserDAO = function () {

    this.connexion = function lister(login,password, callback) {
        var data = JSON.stringify({
            "login": login,
            "password": password
        });

        var url = API_URL + "/connexion";
        var request = new XMLHttpRequest();

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
