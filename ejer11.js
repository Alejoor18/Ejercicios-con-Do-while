let pitido, discoGira;

do {
    pitido = prompt("¿La computadora emite un pitido al iniciar? (si/no)");
} while (pitido !== "si" && pitido !== "no");

do {
    discoGira = prompt("¿El disco duro gira? (si/no)");
} while (discoGira !== "si" && discoGira !== "no");

if (pitido === "si" && discoGira === "si") {
    alert("Póngase en contacto con el técnico de apoyo");
} else if (pitido === "si" && discoGira === "no") {
    alert("Verificar contactos de la unidad");
} else if (pitido === "no" && discoGira === "no") {
    alert("Traiga la computadora para repararla en la central");
} else {
    alert("Compruebe las conexiones de altavoces");
}
