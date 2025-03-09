let fisica, quimica, biologia, matematicas, informatica;

do {
    fisica = parseInt(prompt("Ingrese su calificación en Física:"));
} while (isNaN(fisica) || fisica < 0 || fisica > 10);

do {
    quimica = parseInt(prompt("Ingrese su calificación en Química:"));
} while (isNaN(quimica) || quimica < 0 || quimica > 10);

do {
    biologia = parseInt(prompt("Ingrese su calificación en Biología:"));
} while (isNaN(biologia) || biologia < 0 || biologia > 10);

do {
    matematicas = parseInt(prompt("Ingrese su calificación en Matemáticas:"));
} while (isNaN(matematicas) || matematicas < 0 || matematicas > 10);

do {
    informatica = parseInt(prompt("Ingrese su calificación en Informática:"));
} while (isNaN(informatica) || informatica < 0 || informatica > 10);

let sumaCalificaciones = fisica + quimica + biologia + matematicas + informatica;
let porcentajeFinal = (sumaCalificaciones / 50) * 100;

let calificacion;
if (porcentajeFinal < 60) {
    calificacion = "Mala";
} else if (porcentajeFinal <= 80) {
    calificacion = "Buena";
} else {
    calificacion = "Excelente";
}

alert("Tu porcentaje es " + porcentajeFinal + "% y tu calificación es " + calificacion + ".");
