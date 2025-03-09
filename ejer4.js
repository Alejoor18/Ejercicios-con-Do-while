let numero;
do {
    numero = parseInt(prompt("Ingrese un número:"));
} while (isNaN(numero));

if (numero % 2 === 0) {
    alert("El número es par.");
} else {
    alert("El número es impar.");
}
