var ViewCounter = (function () {

    var pageCounter = document.getElementById("page-counter").innerHTML;

    return function (actionCounterPlus,actionCounterMinus) {

        this.show = function () {

            document.getElementById("container").innerHTML = pageCounter;

            document.getElementById('list-menu').innerHTML= '<li class="nav-item active">\n' +
                '                        <a class="nav-link" href="#">Events<span class="sr-only">(current)</span></a>' +
                '                    </li>';

            var formPlus = document.getElementById("form-counter-plus");
            var formMinus = document.getElementById("form-counter-plus");

            formPlus.addEventListener("submit", actionCounterPlus);
            formMinus.addEventListener("submit", actionCounterMinus);
        }
    }
})();