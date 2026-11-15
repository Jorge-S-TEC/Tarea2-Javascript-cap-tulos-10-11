// Ejercicio 11.10: 11.10.js
// Utiliza split para separar el código de área y el número telefónico.
function extraerTelefono() {
    var tel = document.getElementById("telefonoInput").value;
    
    // Reemplazar paréntesis y guiones para facilitar el split limpio
    var limpio = tel.replace("(", "").replace(")", "-");
    var tokens = limpio.split("-");

    if ( tokens.length >= 3 ) {
        document.getElementById("areaOutput").value = tokens[ 0 ];
        document.getElementById("numeroOutput").value = tokens[ 1 ] + "-" + tokens[ 2 ];
    } else {
        alert("Formato incorrecto. Use (555)555-5555");
    }
}

function iniciar() {
    document.getElementById("btnExtraer").addEventListener("click", extraerTelefono, false);
}

window.addEventListener("load", iniciar, false);