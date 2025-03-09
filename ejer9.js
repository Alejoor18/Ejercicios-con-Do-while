let angulo1, angulo2, angulo3;

do {
    angulo1 = parseInt(prompt("Ingrese el primer ángulo:"));
} while (angulo1 <= 0);

do {
    angulo2 = parseInt(prompt("Ingrese el segundo ángulo:"));
} while (angulo2 <= 0);

do {
    angulo3 = parseInt(prompt("Ingrese el tercer ángulo:"));
} while (angulo3 <= 0);

if (angulo1 + angulo2 + angulo3 === 180) {
    alert("El triángulo es válido.");
} else {
    alert("El triángulo no es válido.");
}
