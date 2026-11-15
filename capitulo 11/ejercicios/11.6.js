// Ejercicio 11.6: 11.6.js
// Uso de operadores relacionales y de igualdad para comparar cadenas.
function compararCadenas() {
    var s1 = document.getElementById("cadena1").value;
    var s2 = document.getElementById("cadena2").value;
    var mensaje = "";

    if ( s1 === s2 ) {
        mensaje = "<p>La cadena 1 es igual a la cadena 2.</p>";
    } else if ( s1 < s2 ) {
        mensaje = "<p>La cadena 1 es menor que la cadena 2.</p>";
    } else {
        mensaje = "<p>La cadena 1 es mayor que la cadena 2.</p>";
    }

    document.getElementById("resultadoComparacion").innerHTML = mensaje;
}

function iniciar() {
    document.getElementById("btnComparar").addEventListener("click", compararCadenas, false);
}

window.addEventListener("load", iniciar, false);