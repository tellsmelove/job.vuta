$("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#xyz label").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});