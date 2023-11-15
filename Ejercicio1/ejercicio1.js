$(document).ready(function () {
    $("#btn-ocultar").click(function () { 
        $("p").hide();
        $("h1").hide();
    });

    $("#btn-mostrar").click(function () { 
        $("p").show();
        $("h1").show();
    });
});