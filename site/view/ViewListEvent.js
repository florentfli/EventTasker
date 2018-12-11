var ViewListEvent = (function () {

    var pageEvent = document.getElementById("page-list-event").innerHTML;

    return function (actionDelete, actionEdit) {
        //today.getFullYear()+'-'+ today.getMonth()+'-'+ today.getDay()
        this.show = function (listEvents) {

            document.getElementById("container").innerHTML = pageEvent;

            document.getElementById('list-menu').innerHTML= '<li class="nav-item active">\n' +
                '                        <a class="nav-link" href="#counter">Counter<span class="sr-only">(current)</span></a>\n' +
                '                    </li>';

            console.log("Events : " + listEvents);

            var listEvents = JSON.parse(listEvents);
            var today = new Date();
            var res = '';

            for (var counter in listEvents) {

                var event = listEvents[counter];
                var dateEvent = new Date(event.date);

                res += ' <tr style="background: ' + event.color + ';!important;">' +
                    '                        <td>' + event.name + '</td>\n' +
                    '                        <td>' + formatDateDisplay(dateEvent) + '</td>\n' +
                    '                        <td>' + calculteDiffDate(dateEvent) + '</td>\n' +
                    '                        <td>\n' +
                    '                            <p data-placement="top" data-toggle="tooltip" title="Edit">\n' +
                    '                                <button class="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal"\n' +
                    '                                        data-target="#edit" data-id="' + event.id + '"><span class="glyphicon glyphicon-pencil"></span></button>\n' +
                    '                            </p>\n' +
                    '                        </td>\n' +
                    '                        <td>\n' +
                    '                            <p data-placement="top" data-toggle="tooltip" title="Delete">\n' +
                    '                                <button class="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal"\n' +
                    '                                        data-target="#delete" data-id="' + event.id + '""><span class="glyphicon glyphicon-trash"></span></button>\n' +
                    '                            </p>\n' +
                    '                        </td>\n' +
                    '                        <td><a class="btn btn-info btn-xs"  href="#event\/' + event.id + '"><span class="glyphicon glyphicon-chevron-right"></span></a></td>\n' +
                    '                    </tr>';
            }

            document.getElementById("today-date").innerHTML = '<h5>Today: ' + formatDateDisplay(today) + '</h5>';
            document.getElementById("table-event").innerHTML = res;


            var id;
            var name;
            var date;
            var description;
            var color;

            $(document).ready(function () {
                $("#btnEditEvent").click(function () {
                    name = $('#editName').val();
                    date = $('#editDate').val();
                    description = $('#editDescription').val();
                    color = $('#editColor').val();

                    console.log('edit ' + name);

                    actionEdit(id, name, date, description, color);
                });
            });
            $('#edit').on('show.bs.modal', function (event) {
                var button = $(event.relatedTarget) // Button that triggered the modal
                id = button.data('id');

                for (var counter in listEvents) {
                    var event = listEvents[counter];
                    if (event.id === id) {
                        console.log('want to edit event : ' + event);
                        $('#editName').val(event.name);
                        $('#editDate').val(formatDateDisplay(event.date));
                        $('#editDescription').val(event.description);
                        $('#editColor').val(event.color);
                        break;
                    }
                }

                console.log('id event want to delete : ' + id);
            });


            $(document).ready(function () {
                $("#btnDeleteEvent").click(function () {
                    console.log('delete ' + id);
                    actionDelete(id);
                });
            });
            $('#delete').on('show.bs.modal', function (event) {
                var button = $(event.relatedTarget) // Button that triggered the modal
                id = button.data('id');
                console.log('id event want to delete : ' + id);
            })
        }
    }
})();