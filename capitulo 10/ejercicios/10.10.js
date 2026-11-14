// Ejercicio 10.10: Comisiones.js
var contadores = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // Rangos de a) hasta i)

function registrarVenta() {
    var ventas = parseFloat( document.getElementById("ventasBrutas").value );
    
    if ( isNaN( ventas ) || ventas < 0 ) {
        alert( "Por favor ingrese un valor válido." );
        return;
    }

    // Calcular salario: $200 + 9% de ventas brutas
    var salario = 200 + ( 0.09 * ventas );
    var salarioEntero = Math.floor( salario ); // Se trunca a monto entero

    // Determinar rango y actualizar contador
    if ( salarioEntero >= 200 && salarioEntero <= 299 ) contadores[0]++;
    else if ( salarioEntero >= 300 && salarioEntero <= 399 ) contadores[1]++;
    else if ( salarioEntero >= 400 && salarioEntero <= 499 ) contadores[2]++;
    else if ( salarioEntero >= 500 && salarioEntero <= 599 ) contadores[3]++;
    else if ( salarioEntero >= 600 && salarioEntero <= 699 ) contadores[4]++;
    else if ( salarioEntero >= 700 && salarioEntero <= 799 ) contadores[5]++;
    else if ( salarioEntero >= 800 && salarioEntero <= 899 ) contadores[6]++;
    else if ( salarioEntero >= 900 && salarioEntero <= 999 ) contadores[7]++;
    else if ( salarioEntero >= 1000 ) contadores[8]++;

    mostrarResultados();
}

function mostrarResumen() {
    var res = "<h3>Distribución de Salarios:</h3><ul>" +
              "<li>a) $200 a 299: " + contadores[0] + "</li>" +
              "<li>b) $300 a 399: " + contadores[1] + "</li>" +
              "<li>c) $400 a 499: " + contadores[2] + "</li>" +
              "<li>d) $500 a 599: " + contadores[3] + "</li>" +
              "<li>e) $600 a 699: " + contadores[4] + "</li>" +
              "<li>f) $700 a 799: " + contadores[5] + "</li>" +
              "<li>g) $800 a 899: " + contadores[6] + "</li>" +
              "<li>h) $900 a 999: " + contadores[7] + "</li>" +
              "<li>i) $1000 y más: " + contadores[8] + "</li></ul>";
    document.getElementById("resultadoRangos").innerHTML = res;
}

function iniciar() {
    document.getElementById("btnRegistrar").addEventListener("click", registrarVenta, false);
}

window.addEventListener("load", iniciar, false);