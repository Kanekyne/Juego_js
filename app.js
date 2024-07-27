let numeroSecreto = 0;
let intentos = 0;
let numerosAleatorios = [];
let maximoIntentos = 10;

function asignarTexto(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  if (numeroSecreto === numeroDeUsuario) {
    asignarTexto(
      "p",
      `Acertaste el numero en ${intentos} ${
        intentos === 1 ? "intento" : "intentos"
      }.`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroSecreto > numeroDeUsuario) {
      asignarTexto("p", "El numero secreto es mayor.");
    } else {
      asignarTexto("p", "El numero secreto es menor.");
    }
    intentos++;
    limpiaCampo();
  }
}

function limpiaCampo() {
  valorCampo = document.querySelector("#valorUsuario").value = "";
}

function generadorNumero() {
  let numeroSecreto = Math.floor(Math.random() * maximoIntentos) + 1;
  console.log(numeroSecreto);
  console.log(numerosAleatorios);
  if (numerosAleatorios.length == maximoIntentos) {
    asignarTexto('p', 'Ya se adivinaron todos los numeros posibles');
  } else {
    if (numerosAleatorios.includes(numeroSecreto)) {
      return generadorNumero();
    } else {
      numerosAleatorios.push(numeroSecreto);
      return numeroSecreto;
    }
  }
}

function condicionesIniciales() {
  asignarTexto("h1", "Juego de adivinacíon.");
  asignarTexto("p", "Indica el numero que creas.");
  numeroSecreto = generadorNumero();
  intentos = 1;
  // console.log(numeroSecreto);
}

function reiniciarJuego() {
  // Limpiar el campo
  limpiaCampo();
  // Mostrar mensajes iniciales
  // Establecer otro numero secreto
  // Reiniciar el contador de intentos
  condicionesIniciales();
  // Deshabilitar el boton de nuevo juego
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
