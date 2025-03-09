let opcion;
do {
    opcion = prompt("Ingrese el tamaño del sándwich (pequeño o grande):");
} while (opcion !== "pequeño" && opcion !== "grande");

let precioBase = (opcion === "pequeño") ? 6000 : 12000;
let total = precioBase;

let respuesta;

do {
    respuesta = prompt("¿Desea tocineta? (sí o no):");
} while (respuesta !== "sí" && respuesta !== "no");
if (respuesta === "sí") total += 3000;

do {
    respuesta = prompt("¿Desea pavo? (sí o no):");
} while (respuesta !== "sí" && respuesta !== "no");
if (respuesta === "sí") total += 3000;

do {
    respuesta = prompt("¿Desea queso? (sí o no):");
} while (respuesta !== "sí" && respuesta !== "no");
if (respuesta === "sí") total += 2500;

alert("El costo total de su sándwich es: $" + total);
