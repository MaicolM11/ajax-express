
const URL = 'http://localhost:3000/persons';

$(document).ready(function () {
    $("#formPersons").submit(function (event) {
        event.preventDefault();   // Prevent the form from submitting via the browser.
        sendPersons();
    });
});

function sendPersons() {
    var formData = {
        id: $("#id").val(),
        firstname: $("#name").val(),
        lastname: $("#lastname").val()
    }
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: URL,
        data: JSON.stringify(formData),
        dataType: 'json',
        success: function (data) {
            addElements(data);
        }
    });
    resetData();
}

function addElements(data){
    $("#result").empty();
    $('#result').append('<tr><th>id</th> <th>Name</th><th>lastname</th></tr>');
    data.list.forEach(element => {
        $('#result').append(`<tr><td>${element.id}</td> 
                             <td>${element.firstname}</td> 
                             <td>${element.lastname}</td></tr>`);
    });
}

function resetData() {
    $("#id").val("");
    $("#name").val("");
    $("#lastname").val("");
}