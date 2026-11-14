var unicos = [];
var contadorIngresos = 0;

function procesarNumero() {
    var val = parseInt( document.getElementById("numInput").value );
    
    if ( isNaN(val) || val < 10 || val > 100 ) {
        alert("El número debe estar entre 10 y 100.");
        return;
    }

    if ( unicos.indexOf( val ) === -1 ) {
        unicos.push( val );
        document.getElementById("salidaUnicos").innerHTML += "<p>Número aceptado: " + val + "</p>";
        contadorIngresos++;
    } else {
        document.getElementById("salidaUnicos").innerHTML += "<p style='color:red;'>Número duplicado (ignorado): " + val + "</p>";
    }

    if ( contadorIngresos >= 10 ) {
        alert("¡Se han ingresado 10 números únicos exitosamente!");
    }
}

function iniciar() {
    document.getElementById("btnIngresar").addEventListener("click", procesarNumero, false);
}

window.addEventListener("load", iniciar, false);