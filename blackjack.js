const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el número de jugadores (1 o 2): ", (respuesta) => {
    let Primera_cartaCa = Math.floor(Math.random() * 11) + 1;
    let segunda_cartaCa = Math.floor(Math.random() * 11) + 1;

    if (respuesta == 1) {
        let Primera_carta = Math.floor(Math.random() * 11) + 1;
        let segunda_carta = Math.floor(Math.random() * 11) + 1;
        console.log("Tu primera carta es:" + Primera_carta);
        console.log("Tu segunda carta es:" + segunda_carta);
        console.log("La primera carta del casino es:" + Primera_cartaCa);

        let respuesta;
        let tercera_carta = 0;
        do {
            respuesta = prompt("¿Quieres pedir cartas? (si/no): ");
            if (respuesta === "si") {
                tercera_carta = Math.floor(Math.random() * 11) + 1;
                console.log("Tu tercera carta es:" + tercera_carta);
            }
        } while (respuesta !== "si" && respuesta !== "no");

        let puntaje_jugador = Primera_carta + segunda_carta + tercera_carta;
        let puntaje_casino = Primera_cartaCa + segunda_cartaCa;

        console.log("El casino tiene un total de:" + puntaje_casino);
        console.log("Usted tiene un total de:" + puntaje_jugador);

        if (puntaje_jugador > 21 || puntaje_jugador < puntaje_casino) {
            console.log("Perdiste");
        } else if (puntaje_jugador === puntaje_casino) {
            console.log("Empate");
        } else {
            console.log("Ganaste");
        }
    }
});
