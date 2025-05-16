console.log("¡Bienvenido al juego Adivina el Número!");

const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 3;

while (intentos > 0) {
  let entrada = prompt(" Ingresa un número del 1 al 10:");
  
  // Validación
  if (entrada === null) {
    alert(" Has cancelado el juego.");
    break;
  }

  let numero = Number(entrada);

  if (isNaN(numero) || numero < 1 || numero > 10) {
    alert("Por favor, ingresa un número válido entre 1 y 10.");
    continue;
  }

  // Comparación
  if (numero === numeroSecreto) {
    alert("¡Adivinaste el número! ¡Ganaste!");
    console.log(" Juego terminado: Ganaste.");
    break;
  } else if (numero < numeroSecreto) {
    alert(" Demasiado bajo.");
  } else {
    alert(" Demasiado alto.");
  }

  intentos--;

  if (intentos > 0) {
    alert(`Te quedan ${intentos} intento(s).`);
  } else {
    alert(`Te quedaste sin intentos. El número era ${numeroSecreto}.`);
    console.log(" Juego terminado: Perdiste.");
  }
}
