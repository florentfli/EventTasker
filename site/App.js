(function () {

        this.init = function () {
            window.addEventListener("hashchange", navigate);
            this.navigate()
        };

        this.navigate = function () {

            var hash = window.location.hash;

            if (!hash) {
                var viewLogin = new ViewLogin();
                viewLogin.show();
            }
        };

        var navigatToHome = function () {
            window.location.hash = "";
        };


        init();
    }
)();
