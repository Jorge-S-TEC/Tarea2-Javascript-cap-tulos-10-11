function calcularPrimos() {
    var primos = new Array( 1000 );
    
    // a) Inicializar todos en 1 (true)
    for ( var i = 0; i < primos.length; ++i ) {
        primos[ i ] = 1;
    }

    // b) 0 y 1 no son primos
    primos[ 0 ] = 0;
    primos[ 1 ] = 0;

    // Aplicar la Criba
    for ( var i = 2; i < Math.sqrt( 1000 ); ++i ) {
        if ( primos[ i ] === 1 ) {
            for ( var j = i * 2; j < 1000; j += i ) {
                primos[ j ] = 0;
            }
        }
    }

    var listaPrimos = "";
    for ( var k = 1; k < 1000; ++k ) {
        if ( primos[ k ] === 1 ) {
            listaPrimos += k + ", ";
        }
    }

    document.getElementById("resultadoPrimos").innerHTML = "<p>" + listaPrimos + "</p>";
}

function iniciar() {
    document.getElementById("btnPrimos").addEventListener("click", calcularPrimos, false);
}

window.addEventListener("load", iniciar, false);