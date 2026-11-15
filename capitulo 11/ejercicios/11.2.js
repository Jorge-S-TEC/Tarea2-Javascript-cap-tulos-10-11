// Ejercicio 11.2: 11.2.js
// Diálogos de alerta con fecha y hora actual, hace 24 horas, una semana y diez años.
function mostrarAhora() {
    var d = new Date();
    alert("Hora y fecha actual: " + d.toLocaleString());
}

function mostrarAyer() {
    var d = new Date();
    d.setTime( d.getTime() - ( 24 * 60 * 60 * 1000 ) );
    alert("Fecha y hora hace 24 horas: " + d.toLocaleString());
}

function mostrarSemana() {
    var d = new Date();
    d.setTime( d.getTime() - ( 7 * 24 * 60 * 60 * 1000 ) );
    alert("Fecha y hora hace una semana: " + d.toLocaleString());
}

function mostrarAnio() {
    var d = new Date();
    d.setFullYear( d.getFullYear() - 10 );
    alert("Fecha y hora hace diez años: " + d.toLocaleString());
}

function iniciar() {
    document.getElementById("btnAhora").addEventListener("click", mostrarAhora, false);
    document.getElementById("btnAyer").addEventListener("click", mostrarAyer, false);
    document.getElementById("btnSemana").addEventListener("click", mostrarSemana, false);
    document.getElementById("btnAnio").addEventListener("click", mostrarAnio, false);
}

window.addEventListener("load", iniciar, false);