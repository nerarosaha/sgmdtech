
//manipulate with cookies
function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + ";path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}
//sort
var sort_status;
//sort_status = readCookie("sort_status");
//if (sort_status == "" || sort_status == null || (sort_status != "1" && sort_status != "2" && sort_status != "3"))
//    sort_status = "1";
$(document).ready(function () {
    $(".select_order option[value='" + sort_status + "']").attr("selected", "selected");
    $(".select_order").change(function () {
        sort_status = $(this).val();
        createCookie("sort_status", sort_status, 7);
        location.reload();
    });
});
