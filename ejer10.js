let copias;
do {
    copias = parseInt(prompt("Ingrese la cantidad de copias a imprimir:"));
} while (copias <= 0);

let precioPorCopia;

if (copias >= 1000) {
    precioPorCopia = 50;
} else if (copias >= 750) {
    precioPorCopia = 80;
} else if (copias >= 500) {
    precioPorCopia = 100;
} else {
    precioPorCopia = 120;
}

let precioTotal = copias * precioPorCopia;

alert("Precio por copia: $" + precioPorCopia + " Y su Precio total: $" + precioTotal);
