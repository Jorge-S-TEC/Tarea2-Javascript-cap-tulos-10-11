// Ejercicio 11.5: 11.5.js
// Funciones usando Math.round en vez de Math.floor.
function redondearAEntero( numero ) {
    return Math.round( numero );
}

function redondearADecimas( numero ) {
    return Math.round( numero * 10 ) / 10;
}

function redondearACentesimas( numero ) {
    return Math.round( numero * 100 ) / 100;
}

function redondearAMilesimas( numero ) {
    return Math.round( numero * 1000 ) / 1000;
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