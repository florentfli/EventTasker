var checkIfConnected = function () {

    if (typeof localStorage === 'undefined') {
        window.location.hash = "#login";
        return;
    } else if (typeof localStorage['user'] === 'undefined') {
        window.location.hash = "#login";
        return;
    } else if (localStorage['user']) {
        if (!JSON.parse(localStorage['user']).login) {
            window.location.hash = "#login";
        }
    }
};