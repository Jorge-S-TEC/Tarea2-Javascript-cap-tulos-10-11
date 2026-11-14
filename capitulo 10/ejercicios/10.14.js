function simularTiros() {
    // Arreglo de frecuencias para sumas de 2 a 12 (índices 0 a 12)
    var frecuenciasSuma = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    
    for ( var i = 0; i < 36000; ++i ) {
        var dado1 = Math.floor( 1 + Math.random() * 6 );
        var dado2 = Math.floor( 1 + Math.random() * 6 );
        var suma = dado1 + dado2;
        frecuenciasSuma[ suma ]++;
    }

    var html = "<table border='1'><tr><th>Suma</th><th>Frecuencia</th><th>Porcentaje Teórico Aprox.</th></tr>";
    for ( var s = 2; s <= 12; ++s ) {
        var porcentaje = ( frecuenciasSuma[s] / 36000 ) * 100;
        html += "<tr><td>" + s + "</td><td>" + frecuenciasSuma[s] + "</td><td>" + porcentaje.toFixed(2) + "%</td></tr>";
    }
    html += "</table>";
    document.getElementById("resultadoSimulacion").innerHTML = html;
}

function iniciar() {
    document.getElementById("btnSimular").addEventListener("click", simularTiros, false);
}

window.addEventListener("load", iniciar, false);