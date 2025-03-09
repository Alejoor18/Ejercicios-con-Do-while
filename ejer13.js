let operador;
do {
    operador = prompt("Ingrese su operador (Claro, Tigo o Movistar):");
} while (operador !== "Claro" && operador !== "Tigo" && operador !== "Movistar");

let minutos;
do {
    minutos = parseInt(prompt("Ingrese la cantidad de minutos internacionales consumidos:"));
} while (isNaN(minutos) || minutos < 0); // Asegura que sean minutos válidos

let cargoFijo = 0, valorMinuto = 0, valorDatos = 0;

if (operador === "Tigo") {
    cargoFijo = 45000;
    valorMinuto = 200;
    valorDatos = 12000;
} else if (operador === "Claro") {
    cargoFijo = 30000;
    valorMinuto = 100;
    valorDatos = 18000;
} else if (operador === "Movistar") {
    cargoFijo = 40000;
    valorMinuto = 250;
    valorDatos = 8000;
}

let total = cargoFijo + (minutos * valorMinuto) + valorDatos;
alert("El costo total de su paquete es: $" + total);
