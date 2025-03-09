let numero;
do {
    numero = parseInt(prompt("Ingrese un número:"));
} while (!numero);

if (numero % 2 === 0) {
    console.log("El número " + numero + " es par.");
} else {
    console.log("El número " + numero + " es impar.");
}
