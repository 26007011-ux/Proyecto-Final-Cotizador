// Precio base
var precio_base = 2000;

// Recargos por edad
var edad_18 = 0.1;
var edad_25 = 0.2;
var edad_50 = 0.3;

// Recargo hijos
var hijos_recargo = 0.2;

var recargo_total = 0;
var recargo = 0;

// Datos del usuario
var nombre = prompt("Ingrese su nombre");
var edad = prompt("¿Cuántos años tiene? Ingrese solo números");

var edad_numero = parseInt(edad);

// Validar mayoría de edad
if (edad_numero < 18 || isNaN(edad_numero)) {
    alert("No se puede asegurar a menores de edad.");
} else {

    // Recargo por edad del asegurado
    if (edad_numero >= 18 && edad_numero <= 24) {
        recargo = precio_base * edad_18;
    } else if (edad_numero >= 25 && edad_numero <= 49) {
        recargo = precio_base * edad_25;
    } else {
        recargo = precio_base * edad_50;
    }

    recargo_total += recargo;

    // Estado civil
    var casado = prompt("¿Está casado? (SI/NO)");

    if (casado && casado.toUpperCase() === "SI") {

        var edad_conyuge = prompt("¿Qué edad tiene su esposo/a?");
        var edad_conyuge_numero = parseInt(edad_conyuge);

        if (!isNaN(edad_conyuge_numero)) {

            if (edad_conyuge_numero >= 18 && edad_conyuge_numero <= 24) {
                recargo = precio_base * edad_18;
            } else if (edad_conyuge_numero >= 25 && edad_conyuge_numero <= 49) {
                recargo = precio_base * edad_25;
            } else {
                recargo = precio_base * edad_50;
            }

            recargo_total += recargo;
        }
    }

    // Hijos
    var hijos = prompt("¿Tiene hijos? (SI/NO)");

    if (hijos && hijos.toUpperCase() === "SI") {

        var cantidad_hijos = prompt("¿Cuántos hijos tiene?");
        var numero_hijos = parseInt(cantidad_hijos);

        if (!isNaN(numero_hijos) && numero_hijos > 0) {
            recargo = precio_base * hijos_recargo * numero_hijos;
            recargo_total += recargo;
        }
    }

    var precio_final = precio_base + recargo_total;

    alert("Para el asegurado: " + nombre);
    alert("Recargo total: Q." + recargo_total);
    alert("Precio final del seguro: Q." + precio_final);
}

