$(document).ready(function () {
    $("#btn-aumentar").click(function () { 
        let actual = $(".pares").css("font-size"); //Cogemos el tamaño de fuente actual

        let tamanoActual = parseInt(actual); //Convertimos el tamaño actual a un numero entero

        let tamanoNuevo = tamanoActual + 2; //Aplicamos que suba de dos en dos px

        $(".pares").css("font-size", tamanoNuevo + "px");
        
    });

    $("#btn-disminuir").click(function () { 
        let actual = $(".pares").css("font-size"); //Cogemos el tamaño de fuente actual

        let tamanoActual = parseInt(actual); //Convertimos el tamaño actual a un numero entero

        let tamanoNuevo = tamanoActual - 2; //Aplicamos que suba de dos en dos px

        $(".pares").css("font-size", tamanoNuevo + "px");
    });
});