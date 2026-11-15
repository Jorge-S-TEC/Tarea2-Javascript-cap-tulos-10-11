// Ejercicio 11.3: 11.3.js
// Muestra tablas de valores de retorno para funciones Math en un textarea.
function iniciar() {
    var salida = "Función\t\tArgumento\tResultado\n";
    salida += "--------------------------------------------------\n";
    
    var valores = [-4.5, -2.3, 0, 2.3, 4.5];
    
    for (var i = 0; i < valores.length; ++i) {
        var x = valores[i];
        salida += "Math.abs(" + x + ")\t\t\t" + Math.abs(x) + "\n";
        salida += "Math.ceil(" + x + ")\t\t\t" + Math.ceil(x) + "\n";
        salida += "Math.floor(" + x + ")\t\t" + Math.floor(x) + "\n";
        salida += "Math.round(" + x + ")\t\t" + Math.round(x) + "\n";
        salida += "Math.sqrt(" + Math.abs(x) + ")\t\t" + Math.sqrt(Math.abs(x)).toFixed(2) + "\n\n";
    }
    
    document.getElementById("areaResultados").value = salida;
}

window.addEventListener("load", iniciar, false);