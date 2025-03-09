let nombre;
do {
    nombre = prompt("Ingrese su nombre:");
} while (!nombre);

let horas;
do {
    horas = parseInt(prompt("Ingrese el número de horas trabajadas:"));
} while (horas <= 0);

let tarifa = horas <= 10 ? 30000 : 33000;
let salario = horas * tarifa;

alert(`Señor/a, ${nombre}, el número de horas es ${horas} y su salario es $${salario}`);
