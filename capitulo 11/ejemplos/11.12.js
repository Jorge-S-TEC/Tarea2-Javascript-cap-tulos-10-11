function iniciar() {
    var fechaActual = new Date();

    // Métodos de formato de cadenas y valueOf
    document.getElementById("cadenas").innerHTML =
        "<p>toString: " + fechaActual.toString() + "</p>" +
        "<p>toLocaleString: " + fechaActual.toLocaleString() + "</p>" +
        "<p>toUTCString: " + fechaActual.toUTCString() + "</p>" +
        "<p>valueOf: " + fechaActual.valueOf() + "</p>";

    // Métodos get para la zona horaria local
    document.getElementById("metodosGet").innerHTML =
        "<p>getDate: " + fechaActual.getDate() + "</p>" +
        "<p>getDay: " + fechaActual.getDay() + "</p>" +
        "<p>getMonth: " + fechaActual.getMonth() + "</p>" +
        "<p>getFullYear: " + fechaActual.getFullYear() + "</p>" +
        "<p>getTime: " + fechaActual.getTime() + "</p>" +
        "<p>getHours: " + fechaActual.getHours() + "</p>" +
        "<p>getMinutes: " + fechaActual.getMinutes() + "</p>" +
        "<p>getSeconds: " + fechaActual.getSeconds() + "</p>" +
        "<p>getMilliseconds: " + fechaActual.getMilliseconds() + "</p>" +
        "<p>getTimezoneOffset: " + fechaActual.getTimezoneOffset() + "</p>";

    // Creación de un objeto Date con argumentos específicos
    var otraFecha = new Date(2011, 2, 18, 1, 5, 0, 0);
    document.getElementById("nuevosArgumentos").innerHTML =
        "<p>Date: " + otraFecha + "</p>";

    // Métodos set para modificar los valores de la fecha
    otraFecha.setDate(31);
    otraFecha.setMonth(11);
    otraFecha.setFullYear(2011);
    otraFecha.setHours(23);
    otraFecha.setMinutes(59);
    otraFecha.setSeconds(59);

    document.getElementById("metodosSet").innerHTML =
        "<p>Fecha modificada: " + otraFecha + "</p>";
}

window.addEventListener("load", iniciar, false);