$.ajax({
    url: "json/users_json.json",
    type: "get",
    dataType: "json",
    success: function (data) {
        let table_users = document.getElementById("table_users");
        let table = document.createElement("table");
        table.setAttribute('class', 'table table-striped');
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

        data.users.forEach((i, index) => {
            let tr2 = document.createElement("tr");
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
            let icone1 = document.createElement("i");
            icone1.setAttribute('class', 'fa fa-edit');
            button1.appendChild(icone1);
            td7.appendChild(button1);
            let button2 = document.createElement("button");
            let icone2 = document.createElement("i");
            icone2.setAttribute('class', 'fa fa-minus-circle');
            button2.appendChild(icone2);
            td7.appendChild(button2);
            tr2.appendChild(td7);
        });

        table.appendChild(tbody);
    }

});

$(document).on('click', '#send', function () {
    let form = $('#tab').serializeArray();
    console.log(localStorage.getItem('user'));
    if (!localStorage.getItem('user')) {
        localStorage.setItem('user', JSON.stringify({user: []}));
    }
    let data = JSON.parse(localStorage.getItem('user'));


    data.user.push({
        id:data.user.length + 1,
        name:form[0].value,
        surname:form[1].value,
        country:form[2].value,
    });
    localStorage.setItem('user',JSON.stringify(data));
    console.log(JSON.parse(localStorage.getItem('user')))
});




/*
test(JSON.parse(localStorage.getItem('user')))

function test (data) {
    let table_users = document.getElementById("table_users");
    let table = document.createElement("table");
    table.setAttribute('class', 'table table-striped');
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

    data.user.forEach((i, index) => {
        let tr2 = document.createElement("tr");
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
        let icone1 = document.createElement("i");
        icone1.setAttribute('class', 'fa fa-edit');
        button1.appendChild(icone1);
        td7.appendChild(button1);
        let button2 = document.createElement("button");
        let icone2 = document.createElement("i");
        icone2.setAttribute('class', 'fa fa-minus-circle');
        button2.appendChild(icone2);
        td7.appendChild(button2);
        tr2.appendChild(td7);
    });

    table.appendChild(tbody);
}*/
