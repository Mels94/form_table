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

        data.users.forEach((i, index) => {
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





/*        $(document).on('click', '#delete', function () {
            let id = $(this).closest('tr').attr('id');
            let ask = confirm('do you want to delete?');
            if (ask === true) {
                $('#' + id).remove();
            }
        });*/

/*        $(document).on('click', '#edit', function () {
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
            $("input[name='gender']").val(gender);

        });*/

    }
});

let id = 4;
$(document).on('click', '#send', function () {
    let form = $('#tab').serializeArray();

    //console.log(form[0].value);
    //console.log(form[1].value);

    console.log(form);

    /*form.forEach((i, index) => {*/

    //console.log(i);
$('#table1').append("<tr id='tr_"+ id +"'>\n" +
    "    <td>"+id+"</td>\n" +
    "    <td>"+form[0].value+"</td>\n" +
    "    <td>"+form[1].value+"</td>\n" +
    "    <td>"+form[2].value+"</td>\n" +
    "    <td>"+form[3].value+"</td>\n" +
    "    <td>"+form[4].value+"</td>\n" +
    "    <td>"+form[5].value+"</td>\n" +
    "    <td>\n" +
    "        <button class='edit'><i class='fa fa-edit'></i></button>\n" +
    "        <button class='delete' accesskey='"+ id +"'><i class='fa fa-minus-circle'></i></button>\n" +
    "    </td>\n" +
    "</tr>");
id++;


/*
    let tr3 = document.createElement("tr");
    //tr3.setAttribute('id', form.length + 1);
    tbody.appendChild(tr3);
    let td = document.createElement("td");
    td.innerText = "ase";
    tr3.appendChild(td);
    let td1 = document.createElement("td");
    td1.innerText = form[0].value;
    tr3.appendChild(td1);
    let td2 = document.createElement("td");
    td2.innerText = form[1].value;
    tr3.appendChild(td2);
    let td3 = document.createElement("td");
    td3.innerText = form[2].value;
    tr3.appendChild(td3);
    let td4 = document.createElement("td");
    td4.innerText = form[3].value;
    tr3.appendChild(td4);
    let td5 = document.createElement("td");
    td5.innerText = form[4].value;
    tr3.appendChild(td5);
    let td6 = document.createElement("td");
    td6.innerText = form[5].value;
    tr3.appendChild(td6);
    let td7 = document.createElement("td");
    let button1 = document.createElement("button");
    button1.setAttribute('title', 'edit');
    button1.setAttribute('id', 'edit1');
    let icone1 = document.createElement("i");
    icone1.setAttribute('class', 'fa fa-edit');
    button1.appendChild(icone1);
    td7.appendChild(button1);
    let button2 = document.createElement("button");
    button2.setAttribute('title', 'delete');
    button2.setAttribute('id', 'delete1');
    let icone2 = document.createElement("i");
    icone2.setAttribute('class', 'fa fa-minus-circle');
    button2.appendChild(icone2);
    td7.appendChild(button2);
    tr3.appendChild(td7);


    });
    table.appendChild(tbody);*/



});

$(document).on('click', '.delete', function () {
let id = $(this).attr('accessKey');
    let tr = $('#tr_'+id);
    let arr = [];
    for (let i of tr){
        arr.push(i.innerText)
    }
    console.log(arr);
});

/*$(document).on('click', '#send', function () {
    let form = $('#tab').serializeArray();


    //console.log(form[0].value);
    //console.log(form[1].value);

    //console.log(form);



    let table1 = document.getElementById("table1");
    let tbody1 = document.getElementById("tbody1");


    form.forEach((i, index) => {
        //console.log(i.name);

        console.log(i);



        let tr3 = document.createElement("tr");
        tr3.setAttribute('id', index);
        tbody1.appendChild(tr3);
        console.log(i.id);
        let td = document.createElement("td");
        td.innerText = index;
        tr3.appendChild(td);
        let td1 = document.createElement("td");
        td1.innerText = form[0].value;
        tr3.appendChild(td1);
        let td2 = document.createElement("td");
        td2.innerText = form[1].value;
        tr3.appendChild(td2);
        let td3 = document.createElement("td");
        td3.innerText = form[2].value;
        tr3.appendChild(td3);
        let td4 = document.createElement("td");
        td4.innerText = form[3].value;
        tr3.appendChild(td4);
        let td5 = document.createElement("td");
        td5.innerText = i.bday;
        tr3.appendChild(td5);
        let td6 = document.createElement("td");
        td6.innerText = i.gender;
        tr3.appendChild(td6);
        let td7 = document.createElement("td");
        let button1 = document.createElement("button");
        button1.setAttribute('title', 'edit');
        button1.setAttribute('id', 'edit1');
        let icone1 = document.createElement("i");
        icone1.setAttribute('class', 'fa fa-edit');
        button1.appendChild(icone1);
        td7.appendChild(button1);
        let button2 = document.createElement("button");
        button2.setAttribute('title', 'delete');
        button2.setAttribute('id', 'delete1');
        let icone2 = document.createElement("i");
        icone2.setAttribute('class', 'fa fa-minus-circle');
        button2.appendChild(icone2);
        td7.appendChild(button2);
        tr3.appendChild(td7);
    });
    table1.appendChild(tbody1);



});*/


/*    $(document).on('click', '#delete1', function () {
        let id = $(this).closest('tr').attr('id');
        console.log(id);
        let ask = confirm('do you want to delete?');
        if (ask === true) {
            $('#' + id).remove();
        }
    });*/

/*    $(document).on('click', '#edit1', function () {
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
        $("input[name='gender']").val(gender);

    });*/

