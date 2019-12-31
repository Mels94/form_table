$.ajax({
    url: "json/users_json.json",
    type: "get",
    dataType: "json",
    success: function (data) {
        $('#table_users').append(`<table class='table table-striped' id='table1'>
                                    <thead class='thead-dark'>
                                        <tr id='tr_th'></tr>
                                    </thead>
                                </table>`);

        Object.keys(data.users[0]).forEach(item => {
            if (item === "id")
                item = "#";
            if (item === "edit")
                item = "";
            $('#tr_th').append(`<th>${item}</th>`);
        });
        $('#table1').append(`<tbody id='tbody1'></tbody>`);

        data.users.forEach((i, index) => {
            $('#tbody1').append(`<tr id=${i.id}>
                    <td>${index + 1}</td>
                    <td>${i.name}</td>
                    <td>${i.surname}</td>
                    <td>${i.country}</td>
                    <td>${i.city}</td>
                    <td>${i.dateOfBirth}</td>
                    <td>${i.gender}</td>
                    <td>
                        <button class='edit1'><i class='fa fa-edit'></i></button>
                        <button class='delete1'><i class='fa fa-minus-circle'></i></button>
                    </td>
                </tr>`);
        });
    }
});

let id = 4;
$(document).on('click', '#send', function () {
    if (
        $("input[name='name']").val() !== "" &&
        $("input[name='surname']").val() !== "" &&
        $("input[name='country']").val() !== "" &&
        $("input[name='city']").val() !== "" &&
        $("input[name='bday']").val() !== "" &&
        $("input[name='gender']").val() !== ""
    ) {

        let form = $('#tab').serializeArray();

        $('#table1').append(`<tr id='tr_${id}'>
                <td>${id}</td>"
                <td class='data'>${form[0].value}</td>
                <td class='data'>${form[1].value}</td>
                <td class='data'>${form[2].value}</td>
                <td class='data'>${form[3].value}</td>
                <td class='data'>${form[4].value}</td>
                <td class='data'>${form[5].value}</td>
                <td class=''>
                    <button class='edit' id='${id}'><i class='fa fa-edit'></i></button>
                    <button class='delete' id='${id}'><i class='fa fa-minus-circle'></i></button>
                </td>
            </tr>`);
        $('#tab')[0].reset();
        $('#tab input').css({border: '1px solid #ced4da'});
        $("input[name='gender']").attr('checked', false);
        id++;

        $('.nav-item a[href="#login"]').removeClass("active");
        $('.nav-item a[href="#table"]').addClass("active");
        $('#login').removeClass("active in").addClass("fade");
        $('#table').removeClass("fade").addClass("active in");

    } else {
        $('#tab input').css({border: '1px solid red'});
    }

});


$(document).on('click', '.edit', function () {

    let id = $(this).closest('tr')[0].children[0].innerText;
    let name = $(this).closest('tr')[0].children[1].innerText;
    let surname = $(this).closest('tr')[0].children[2].innerText;
    let country = $(this).closest('tr')[0].children[3].innerText;
    let city = $(this).closest('tr')[0].children[4].innerText;
    let bday = $(this).closest('tr')[0].children[5].innerText;
    let gender = $(this).closest('tr')[0].children[6].innerText;

    $("input[name='name']").val(name);
    $("input[name='surname']").val(surname);
    $("input[name='country']").val(country);
    $("input[name='city']").val(city);
    $("input[name='bday']").val(bday);
    $("input[value='" + gender + "']").attr('checked', true);

    $('#update').remove();
    $('#but1').append(`<button type='button' class='btn btn-danger' accesskey='${id}' id='update'>Update</button>`);

    $('#send').css({display: "none"});

    $('.nav-item a[href="#table"]').removeClass("active");
    $('.nav-item a[href="#login"]').addClass("active");
    $('#login').removeClass("fade").addClass("active in");
    $('#table').removeClass("active in").addClass("fade");
});

$(document).on('click', '#update', function () {
    let key = $(this).attr('accesskey');
    let trData = $('#tr_' + key);
    let formData = $('#tab').serializeArray();
    let count = 0;
    for (let i of $(trData[0].children)) {
        if (i.className === 'data') {
            i.innerText = formData[count].value;
            count++;
        }
    }
    $('#tab')[0].reset();
    $('#update').remove();

    $('.nav-item a[href="#login"]').removeClass("active");
    $('.nav-item a[href="#table"]').addClass("active");
    $('#login').removeClass("active in").addClass("fade");
    $('#table').removeClass("fade").addClass("active in");
});

$(document).on('click', '.delete', function () {
    let id = $(this).closest('tr').attr('id');
    let ask = confirm('do you want to delete?');
    if (ask === true) {
        $('#' + id).remove();
    }
});





