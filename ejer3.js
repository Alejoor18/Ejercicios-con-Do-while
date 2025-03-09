let tipoLavadora;
do {
    tipoLavadora = parseInt(prompt("Ingrese el tipo de lavadora (1 para grande, 2 para pequeña):"));
} while (tipoLavadora !== 1 && tipoLavadora !== 2);

let cantidad;
do {
    cantidad = parseInt(prompt("Ingrese la cantidad de lavadoras alquiladas:"));
} while (cantidad <= 0);

let horas;
do {
    horas = parseInt(prompt("Ingrese las horas de alquiler:"));
} while (horas <= 0);

let costoPorHora = tipoLavadora === 1 ? 4000 : 3000;
let costoTotal = cantidad * horas * costoPorHora;

if (cantidad > 3) {
    let descuento = costoTotal * 0.03;
    costoTotal -= descuento;
}

alert("Costo total por alquilar " + cantidad + " lavadoras tipo " + tipoLavadora + " por " + horas + " horas: $" + costoTotal);
