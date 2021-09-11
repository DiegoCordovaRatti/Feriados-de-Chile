$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://www.feriadosapp.com/api/holidays.json",
        dataType: "json",
        success: function (data) {
            let datosApi = data.data
            for (let i = 0; i < datosApi.length; i++) {
                
                $("#tableBody").append(`
                <tr>
                    <th scope='row'>${datosApi[i].date}</th>
                    <td>${datosApi[i].title}</td>
                    <td>${datosApi[i].extra}</td>
                    <td>${datosApi[i].law}</td>
                </tr>
                `);
            }
        }
    });
});