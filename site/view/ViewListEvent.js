var ViewListEvent = (function () {

    var pageEvent = document.getElementById("page-list-event").innerHTML;

    function formatDateDisplay(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }

    function calculteDiffDate(date) {
        var oneDay = 24*60*60*1000;
        var today = new Date();

        return Math.ceil(Math.abs((today.getTime() - date.getTime())/(oneDay)));
    }

    return function (action) {
        //today.getFullYear()+'-'+ today.getMonth()+'-'+ today.getDay()
        this.show = function (listEvents) {

            document.getElementById("container").innerHTML = pageEvent;

            console.log("Events : " + listEvents);

            var listEvents = JSON.parse(listEvents);
            var today = new Date();
            var res = '';

            for (var counter in listEvents) {

                var event = listEvents[counter];
                var dateEvent = new Date(event.date);

                res += ' <tr style="background: '+event.color+';!important;">' +
                    '                        <td>' + event.name + '</td>\n' +
                    '                        <td>' + formatDateDisplay(dateEvent) + '</td>\n' +
                    '                        <td>' + calculteDiffDate(dateEvent) + '</td>\n' +
                    '                        <td>\n' +
                    '                            <p data-placement="top" data-toggle="tooltip" title="Edit">\n' +
                    '                                <button class="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal"\n' +
                    '                                        data-target="#edit"><span class="glyphicon glyphicon-pencil"></span></button>\n' +
                    '                            </p>\n' +
                    '                        </td>\n' +
                    '                        <td>\n' +
                    '                            <p data-placement="top" data-toggle="tooltip" title="Delete">\n' +
                    '                                <button class="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal"\n' +
                    '                                        data-target="#delete"><span class="glyphicon glyphicon-trash"></span></button>\n' +
                    '                            </p>\n' +
                    '                        </td>\n' +
                    '                        <td><a class="btn btn-info btn-xs"  href="#event"><span class="glyphicon glyphicon-chevron-right"></span></a></td>\n' +
                    '                    </tr>';
            }

            document.getElementById("today-date").innerHTML = '<h2>Today: ' + formatDateDisplay(today) + '</h2>';
            document.getElementById("table-event").innerHTML = res;

        }
    }
})();