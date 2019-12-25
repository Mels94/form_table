$(document).on('click', '#send', function () {
    $(".remove").remove();
    let form = $('#tab').serializeArray();

    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify({users: []}));
    }
    let data = JSON.parse(localStorage.getItem('users'));

    data.users.push({
        id: data.users.length,
        name: form[0].value,
        surname: form[1].value,
        country: form[2].value,
        city: form[3].value,
        birthday: form[4].value,
        gender: form[5].value,
        edit: ""
    });


    let table_users = document.getElementById("table_users");
    let table = document.createElement("table");
    table.setAttribute('class', 'table table-striped remove');
    table_users.appendChild(table);


    let thead = document.createElement("thead");
    thead.setAttribute('class', 'thead-dark');

    localStorage.setItem('users', JSON.stringify(data));

    let tr = document.createElement('tr');
    thead.appendChild(tr);


    //window.location.reload();

    data = JSON.parse(localStorage.getItem('users'));



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
        td5.innerText = i.bday;
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

});

/*        $(document).on('click', '#delete', function () {
            let id = $(this).closest('tr').attr('id');
            let ask = confirm('do you want to delete?');
            if (ask === true) {
                $('#' + id).remove();
            }
        });

        $(document).on('click', '#edit', function () {
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


            console.log(name);
            console.log(surname);
            console.log(country);
            console.log(city);
            console.log(bday);
            console.log(gender);
        });*/


/*$(document).on('click', '#send', function () {
    //window.location.replace("#table");
    let form_ = $('#tab');
    let form = form_.serializeArray();
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify({users: []}));
    }
    let data1 = JSON.parse(localStorage.getItem('users'));

    data1.users.push({
        id: data1.users.length + 3,
        name: form[0].value,
        surname: form[1].value,
        country: form[2].value,
        city: form[3].value,
        bday: form[4].value,
        gender: form[5].value,
        edit: ""
    });
    localStorage.setItem('users', JSON.stringify(data1));
    window.location.reload();
    // let table1 = document.getElementById("table1");
    // let tbody1 = document.getElementById("tbody1");
    //
    // data1.user.forEach((i, index) => {
    //     let tr3 = document.createElement("tr");
    //     tr3.setAttribute('id', i.id);
    //     tbody1.appendChild(tr3);
    //     let td = document.createElement("td");
    //     td.innerText = index + 4;
    //     tr3.appendChild(td);
    //     let td1 = document.createElement("td");
    //     td1.innerText = i.name;
    //     tr3.appendChild(td1);
    //     let td2 = document.createElement("td");
    //     td2.innerText = i.surname;
    //     tr3.appendChild(td2);
    //     let td3 = document.createElement("td");
    //     td3.innerText = i.country;
    //     tr3.appendChild(td3);
    //     let td4 = document.createElement("td");
    //     td4.innerText = i.city;
    //     tr3.appendChild(td4);
    //     let td5 = document.createElement("td");
    //     td5.innerText = i.bday;
    //     tr3.appendChild(td5);
    //     let td6 = document.createElement("td");
    //     td6.innerText = i.gender;
    //     tr3.appendChild(td6);
    //     let td7 = document.createElement("td");
    //     let button1 = document.createElement("button");
    //     button1.setAttribute('title', 'edit');
    //     button1.setAttribute('id', 'edit1');
    //     let icone1 = document.createElement("i");
    //     icone1.setAttribute('class', 'fa fa-edit');
    //     button1.appendChild(icone1);
    //     td7.appendChild(button1);
    //     let button2 = document.createElement("button");
    //     button2.setAttribute('title', 'delete');
    //     button2.setAttribute('id', 'delete1');
    //     let icone2 = document.createElement("i");
    //     icone2.setAttribute('class', 'fa fa-minus-circle');
    //     button2.appendChild(icone2);
    //     td7.appendChild(button2);
    //     tr3.appendChild(td7);
});
// table1.appendChild(tbody1);*/


/*$(document).on('click', '#delete1', function () {
    let id = $(this).closest('tr').attr('id');
    console.log(id);
    let ask = confirm('do you want to delete?');
    if (ask === true) {
        $('#' + id).remove();
    }
});*/

/*$(document).on('click', '#edit1', function () {
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


    console.log(name);
    console.log(surname);
    console.log(country);
    console.log(city);
    console.log(bday);
    console.log(gender);
});*/



