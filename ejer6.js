let n1, n2, n3;

do {
    n1 = parseInt(prompt("Ingrese el primer número:"));
} while (n1 <= 0);

do {
    n2 = parseInt(prompt("Ingrese el segundo número:"));
} while (n2 <= 0);

do {
    n3 = parseInt(prompt("Ingrese el tercer número:"));
} while (n3 <= 0);

alert("El número mayor es: " + Math.max(n1, n2, n3));
