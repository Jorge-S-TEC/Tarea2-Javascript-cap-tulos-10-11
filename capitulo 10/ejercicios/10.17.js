function iniciarCarrera() {
    var posTortuga = 1;
    var posLiebre = 1;
    var salida = "PUM!!!\nY ARRANCAN!!!\n";

    while ( posTortuga < 70 && posLiebre < 70 ) {
        // Generar entero aleatorio i entre 1 y 10
        var i = Math.floor( 1 + Math.random() * 10 );

        // Movimiento de la Tortuga
        if ( i >= 1 && i <= 5 ) { posTortuga += 3; }        // Paso pesado rápido
        else if ( i >= 6 && i <= 7 ) { posTortuga -= 6; }   // Resbalón
        else if ( i >= 8 && i <= 10 ) { posTortuga += 1; }  // Paso pesado lento

        // Movimiento de la Liebre
        var j = Math.floor( 1 + Math.random() * 10 );
        if ( j >= 1 && j <= 2 ) { /* Dormir (0 movimientos) */ }
        else if ( j >= 3 && j <= 4 ) { posLiebre += 9; }    // Gran salto
        else if ( j === 5 ) { posLiebre -= 12; }            // Gran resbalón
        else if ( j >= 6 && j <= 8 ) { posLiebre += 1; }    // Pequeño salto
        else if ( j >= 9 && j <= 10 ) { posLiebre -= 2; }   // Pequeño resbalón

        // Control de límites inferiores
        if ( posTortuga < 1 ) posTortuga = 1;
        if ( posLiebre < 1 ) posLiebre = 1;
        if ( posTortuga > 70 ) posTortuga = 70;
        if ( posLiebre > 70 ) posLiebre = 70;

        // Dibujar pista de 70 posiciones
        var pista = "";
        for ( var p = 1; p <= 70; ++p ) {
            if ( p === posTortuga && p === posLiebre ) {
                pista += "OUCH!!!";
            } else if ( p === posTortuga ) {
                pista += "T";
            } else if ( p === posLiebre ) {
                pista += "H";
            } else {
                pista += "-";
            }
        }
        salida += pista + "\n";
    }

    if ( posTortuga >= 70 && posLiebre >= 70 ) {
        salida += "¡Es un empate!";
    } else if ( posTortuga >= 70 ) {
        salida += "LA TORTUGA GANA!!! YAY!!!";
    } else {
        salida += "La liebre gana. Qué mal.";
    }

    document.getElementById("pistaCarrera").textContent = salida;
}

function iniciar() {
    document.getElementById("btnCarrera").addEventListener("click", iniciarCarrera, false);
}

window.addEventListener("load", iniciar, false);