$(document).ready(function () {
    $("#btn-ocultar").click(function () { 
        $(".pares").hide();
    });

    $("#btn-mostrar").click(function () { 
        $(".pares").show();
    });

    $("#btn-encabezado").click(function () { 
        $("#encabezado").toggle();
    });

});