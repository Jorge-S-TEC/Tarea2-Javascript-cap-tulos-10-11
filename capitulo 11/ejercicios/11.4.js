// Ejercicio 11.4: 11.4.js
// Definición de funciones para redondear a entero, décimas, centésimas y milésimas.
function redondearAEntero( numero ) {
    return Math.floor( numero + .5 );
}

function redondearADecimas( numero ) {
    return Math.floor( numero * 10 + .5 ) / 10;
}

function redondearACentesimas( numero ) {
    return Math.floor( numero * 100 + .5 ) / 100;
}

function redondearAMilesimas( numero ) {
    return Math.floor( numero * 1000 + .5 ) / 1000;
}

function procesar() {
    var x = parseFloat( document.getElementById("numeroInput").value );
    if (isNaN(x)) {
        alert("Por favor ingrese un número válido.");
        return;
    }

    var res = "<p>Valor original: " + x + "</p>" +
              "<p>Redondeado a entero: " + redondearAEntero(x) + "</p>" +
              "<p>Redondeado a décimas: " + redondearADecimas(x) + "</p>" +
              "<p>Redondeado a centésimas: " + redondearACentesimas(x) + "</p>" +
              "<p>Redondeado a milésimas: " + redondearAMilesimas(x) + "</p>";

    document.getElementById("resultados").innerHTML = res;
}

function iniciar() {
    document.getElementById("btnProcesar").addEventListener("click", procesar, false);
}

window.addEventListener("load", iniciar, false);