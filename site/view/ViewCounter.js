var ViewCounter = (function () {

    var pageCounter = document.getElementById("page-counter").innerHTML;

    return function (actionCounterPlus,actionCounterMinus) {

        this.show = function (counter) {

            var number = JSON.parse(counter)[0].number;

            document.getElementById("container").innerHTML = pageCounter;

            document.getElementById('list-menu').innerHTML= '<li class="nav-item active">' +
                '                        <a class="nav-link" href="#">Events<span class="sr-only">(current)</span></a>' +
                '                    </li>';


            document.getElementById("counter-number").innerText = number;

            var formPlus = document.getElementById("form-counter-plus");
            var formMinus = document.getElementById("form-counter-minus");

            formPlus.addEventListener("submit", actionCounterPlus);
            formMinus.addEventListener("submit", actionCounterMinus);
        }
    }
})();