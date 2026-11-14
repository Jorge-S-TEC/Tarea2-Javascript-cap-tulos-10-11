function ejecutarTortuga() {
    // Inicializar piso de 20x20 en ceros
    var piso = [];
    for ( var i = 0; i < 20; ++i ) {
        piso[ i ] = [];
        for ( var j = 0; j < 20; ++j ) {
            piso[ i ][ j ] = 0;
        }
    }

    var x = 0, y = 0; // Posición inicial
    var plumaAbajo = false;
    var orientacion = 0; // 0: derecha, 1: abajo, 2: izquierda, 3: arriba

    // Comandos de ejemplo para dibujar un cuadrado de 12x12
    var comandos = [2, "5,12", 3, "5,12", 3, "5,12", 3, "5,12", 1, 6, 9];
    
    // Simplificación de procesamiento secuencial de ejemplo
    // Pluma abajo
    plumaAbajo = true;
    
    // Avanzar 12 a la derecha
    for(var k=0; k<12; k++) { if(plumaAbajo) piso[x][y] = 1; y++; }
    // Girar a la derecha y avanzar 12 abajo
    for(var k=0; k<12; k++) { if(plumaAbajo) piso[x][y] = 1; x++; }
    // Girar a la derecha y avanzar 12 izquierda
    for(var k=0; k<12; k++) { if(plumaAbajo) piso[x][y] = 1; y--; }
    // Girar a la derecha y avanzar 12 arriba
    for(var k=0; k<12; k++) { if(plumaAbajo) piso[x][y] = 1; x--; }

    plumaAbajo = false;

    // Imprimir piso
    var resultadoTexto = "";
    for ( var r = 0; r < 20; ++r ) {
        for ( var c = 0; c < 20; ++c ) {
            resultadoTexto += ( piso[r][c] === 1 ) ? "*" : " ";
        }
        resultadoTexto += "\n";
    }
    document.getElementById("lienzoTortuga").textContent = resultadoTexto;
}

function iniciar() {
    document.getElementById("btnEjecutar").addEventListener("click", ejecutarTortuga, false);
}

window.addEventListener("load", iniciar, false);