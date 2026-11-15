// Ejercicio 11.8: 11.8.js
// Producción aleatoria de versos con rima AABBA.
function generarQuintilla() {
    var rimaA = [" Había un gato muy formal,", " Un pequeño panecillo,", " Cierto día un loquillo,"];
    var rimaB = [" que saltaba sin cesar.", " que rodaba en el pasillo.", " que buscaba un estribillo."];

    var l1 = rimaA[ Math.floor( Math.random() * rimaA.length ) ];
    var l2 = l1.replace("formal", "normal").replace("panecillo", "gatillo").replace("loquillo", "bolsillo"); // simulando rima
    var l3 = rimaB[ Math.floor( Math.random() * rimaB.length ) ];
    var l4 = rimaB[ Math.floor( Math.random() * rimaB.length ) ];
    var l5 = l1;

    var quintilla = "1." + l1 + "\n2." + l2 + "\n3." + l3 + "\n4." + l4 + "\n5." + l5;
    document.getElementById("areaQuintilla").value = quintilla;
}

function iniciar() {
    document.getElementById("btnQuintilla").addEventListener("click", generarQuintilla, false);
}

window.addEventListener("load", iniciar, false);