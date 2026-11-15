// Ejercicio 11.9: 11.9.js
// Convierte palabras al formato de latín cerdo agregando la primera letra al final + "ae".
function imprimirPalabraEnLatin( palabra ) {
    if ( palabra.length < 2 ) return palabra;
    var primeraLetra = palabra.charAt( 0 );
    var resto = palabra.slice( 1 );
    return resto + primeraLetra + "ae";
}

function traducirFrase() {
    var texto = document.getElementById("fraseEspañol").value.trim();
    if ( !texto ) return;

    var palabras = texto.split( " " );
    var resultadoTraduccion = "";

    for ( var i = 0; i < palabras.length; ++i ) {
        resultadoTraduccion += imprimirPalabraEnLatin( palabras[ i ] ) + " ";
    }

    document.getElementById("resultadoLatin").value = resultadoTraduccion.trim();
}

function iniciar() {
    document.getElementById("btnTraducir").addEventListener("click", traducirFrase, false);
}

window.addEventListener("load", iniciar, false);