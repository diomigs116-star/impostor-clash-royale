// Lista de cartas disponibles
const cartas = [
    "Esqueleto",
    "Mago",
    "Gigante",
    "Montapuerco",
    "Caballero",
    "Arquera",
    "Duende",
    "Curandera"
];

// Variable global para guardar la carta de la partida
let cartaPartida = null;

// Iniciar partida -> genera UNA sola carta
function iniciarPartida() {
    const esImpostor = Math.random() < 0.25;

    if (esImpostor) {
        cartaPartida = "IMPOSTOR";
    } else {
        const randomIndex = Math.floor(Math.random() * cartas.length);
        cartaPartida = cartas[randomIndex];
    }

    mostrarCarta(cartaPartida);
}

// Mostrar la carta del jugador actual
function verMiCarta() {
    if (cartaPartida === null) {
        alert("Primero iniciá la partida.");
        return;
    }
    mostrarCarta(cartaPartida);
}

// Solo vuelve a mostrar la misma carta
function siguienteJugador() {
    if (cartaPartida === null) {
        alert("Primero iniciá la partida.");
        return;
    }
    mostrarCarta(cartaPartida);
}

// Reinicia todo
function reiniciarPartida() {
    cartaPartida = null;
    mostrarCarta("—");
}

// Actualiza el texto de la carta en pantalla
function mostrarCarta(texto) {
    const carta = document.getElementById("carta");
    carta.textContent = texto;
}
