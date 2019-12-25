$.ajax({
    url: "json/users_json.json",
    type: "get",
    dataType: "json",
    success: function (data) {
        let table_users = document.getElementById("table_users");
        let table = document.createElement("table");
        table.setAttribute('class', 'table table-striped');
        table.setAttribute('id', 'table1');
        table_users.appendChild(table);
        let thead = document.createElement("thead");
        thead.setAttribute('class', 'thead-dark');
        let tr = document.createElement('tr');
        thead.appendChild(tr);

        Object.keys(data.users[0]).forEach(item => {
            let th = document.createElement("th");
            if (item === "id")
                item = "#";
            if (item === "edit")
                item = "";
            th.innerText = item;
            tr.appendChild(th);
        });
        table.appendChild(thead);
        let tbody = document.createElement("tbody");
        tbody.setAttribute('id', 'tbody1');
        table.appendChild(tbody);

        data.users.forEach((i, index) => {

/*            $('#tbody1').append("<tr id='" + i.id + "'>\n" +
                "    <td>" + index + "</td>\n" +
                "    <td>" + i.name + "</td>\n" +
                "    <td>" + i.surname + "</td>\n" +
                "    <td>" + i.country + "</td>\n" +
                "    <td>" + i.city + "</td>\n" +
                "    <td>" + i.dateOfBirth + "</td>\n" +
                "    <td>" + i.gender + "</td>\n" +
                "    <td>\n" +
                "        <button class='edit'><i class='fa fa-edit'></i></button>\n" +
                "        <button class='delete' accesskey='" + id + "'><i class='fa fa-minus-circle'></i></button>\n" +
                "    </td>\n" +
                "</tr>");*/

            let tr2 = document.createElement("tr");
            tr2.setAttribute('id', i.id);
            tbody.appendChild(tr2);
            let td = document.createElement("td");
            td.innerText = index + 1;
            tr2.appendChild(td);
            let td1 = document.createElement("td");
            td1.innerText = i.name;
            tr2.appendChild(td1);
            let td2 = document.createElement("td");
            td2.innerText = i.surname;
            tr2.appendChild(td2);
            let td3 = document.createElement("td");
            td3.innerText = i.country;
            tr2.appendChild(td3);
            let td4 = document.createElement("td");
            td4.innerText = i.city;
            tr2.appendChild(td4);
            let td5 = document.createElement("td");
            td5.innerText = i.dateOfBirth;
            tr2.appendChild(td5);
            let td6 = document.createElement("td");
            td6.innerText = i.gender;
            tr2.appendChild(td6);
            let td7 = document.createElement("td");
            let button1 = document.createElement("button");
            button1.setAttribute('title', 'edit');
            button1.setAttribute('id', 'edit');
            let icone1 = document.createElement("i");
            icone1.setAttribute('class', 'fa fa-edit');
            button1.appendChild(icone1);
            td7.appendChild(button1);
            let button2 = document.createElement("button");
            button2.setAttribute('title', 'delete');
            button2.setAttribute('id', 'delete');
            let icone2 = document.createElement("i");
            icone2.setAttribute('class', 'fa fa-minus-circle');
            button2.appendChild(icone2);
            td7.appendChild(button2);
            tr2.appendChild(td7);
        });
        table.appendChild(tbody);
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

        $('#table1').append("<tr id='tr_" + id + "'>\n" +
            "    <td>" + id + "</td>\n" +
            "    <td class='data'>" + form[0].value + "</td>\n" +
            "    <td class='data'>" + form[1].value + "</td>\n" +
            "    <td class='data'>" + form[2].value + "</td>\n" +
            "    <td class='data'>" + form[3].value + "</td>\n" +
            "    <td class='data'>" + form[4].value + "</td>\n" +
            "    <td class='data'>" + form[5].value + "</td>\n" +
            "    <td class=''>\n" +
            "        <button class='edit' id='" + id + "'><i class='fa fa-edit'></i></button>\n" +
            "        <button class='delete' id='" + id + "'><i class='fa fa-minus-circle'></i></button>\n" +
            "    </td>\n" +
            "</tr>");
        $('#tab')[0].reset();
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

    //$('#send').css({backgroundColor: 'red'});
    $('#update').remove();
    $('#but1').append("<button type='button' class='btn btn-primary' accesskey='" + id + "' id='update'>Update</button>");

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



