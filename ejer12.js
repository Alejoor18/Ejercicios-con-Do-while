let modelo;

do {
    modelo = parseInt(prompt("Ingrese el número de modelo de su automóvil:"));
} while (isNaN(modelo) || modelo <= 0); // Asegura que sea un número válido y positivo y el IsNan es para que sea exclusivamente un numero

let modelosDefectuosos = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];

if (modelosDefectuosos.includes(modelo)) {
    alert("El automóvil está defectuoso, llevar a garantía.");
} else {
    alert("El modelo ingresado no presenta defectos conocidos.");
}
