// Ejercicio 11.7: 11.7.js
// Generación aleatoria de enunciados con artículo, sustantivo, verbo y preposición.
function generarOraciones() {
    var articulo = ["el", "un", "algún", "ningún"];
    var sustantivo = ["niño", "niña", "perro", "ciudad", "auto"];
    var verbos = ["manejó", "saltó", "corrió", "caminó", "omitió"];
    var preposiciones = ["a", "desde", "encima de", "debajo de", "sobre"];

    var resultado = "Había una vez...\n";

    for ( var i = 0; i < 20; ++i ) {
        var art1 = articulo[ Math.floor( Math.random() * articulo.length ) ];
        var sus1 = sustantivo[ Math.floor( Math.random() * sustantivo.length ) ];
        var verb = verbos[ Math.floor( Math.random() * verbos.length ) ];
        var prep = preposiciones[ Math.floor( Math.random() * preposiciones.length ) ];
        var art2 = articulo[ Math.floor( Math.random() * articulo.length ) ];
        var sus2 = sustantivo[ Math.floor( Math.random() * sustantivo.length ) ];

        // Concatenar y capitalizar primera letra
        var enunciado = art1 + " " + sus1 + " " + verb + " " + prep + " " + art2 + " " + sus2 + ".";
        enunciado = enunciado.charAt( 0 ).toUpperCase() + enunciado.slice( 1 );

        resultado += enunciado + "\n";
    }

    resultado += "FIN.";
    document.getElementById("historiaArea").value = resultado;
}

function iniciar() {
    document.getElementById("btnGenerar").addEventListener("click", generarOraciones, false);
}

window.addEventListener("load", iniciar, false);