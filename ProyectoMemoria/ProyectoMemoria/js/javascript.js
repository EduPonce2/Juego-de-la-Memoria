const grupoTarjetas = ["😎", "🍦", "🐸", "👽", "👾", "🤖", "👹", "🐌", "🐈‍⬛", "🧟‍♂️", "💩", "🥶", "🥹", "🐭"];
let totalTarjetas = grupoTarjetas.concat(grupoTarjetas);

// Variables para controlar el juego
let primeraTarjeta = null;
let segundaTarjeta = null;
let sePuedeDescubrir = true;
let intentos = 0;
let parejasEncontradas = 0;

function barajaTarjetas() {
  return totalTarjetas.sort(function() {
    return 0.5 - Math.random();
  });
}

function reparteTarjetas() {
  const mesa = document.querySelector("#mesa");
  const tarjetasBarajadas = barajaTarjetas();
  mesa.innerHTML = "";

  tarjetasBarajadas.forEach(function(elemento) {
    const tarjeta = document.createElement("div");

    tarjeta.innerHTML =
      "<div class='tarjeta'>" +
      "<div class='tarjeta__contenido'>" +
      elemento +
      "</div>" +
      "</div>";

    mesa.appendChild(tarjeta);
  });

  // Agregamos eventos después de repartir
  document.querySelectorAll(".tarjeta").forEach(function(elemento) {
    elemento.addEventListener("click", descubrir);
  });

  // Reiniciar contador y mensaje cuando se reparte
  intentos = 0;
  parejasEncontradas = 0;
  document.getElementById("intentos").textContent = 0;
  document.getElementById("mensajeFinal").textContent = "";
}

function descubrir() {
  if (!sePuedeDescubrir || this.classList.contains("descubierta")) {
    return;
  }

  this.classList.add("descubierta");

  if (!primeraTarjeta) {
    primeraTarjeta = this;
  } else {
    segundaTarjeta = this;
    sePuedeDescubrir = false;

    intentos++;
    document.getElementById("intentos").textContent = intentos;

    const emoji1 = primeraTarjeta.querySelector(".tarjeta__contenido").textContent;
    const emoji2 = segundaTarjeta.querySelector(".tarjeta__contenido").textContent;

    if (emoji1 === emoji2) {
      // Son iguales
      parejasEncontradas++;
      primeraTarjeta = null;
      segundaTarjeta = null;
      sePuedeDescubrir = true;

      if (parejasEncontradas === grupoTarjetas.length) {
        document.getElementById("mensajeFinal").textContent = "¡Ganaste en " + intentos + " intentos! 🎉";
      }

    } else {
      // No son iguales
      setTimeout(function() {
        primeraTarjeta.classList.remove("descubierta");
        segundaTarjeta.classList.remove("descubierta");
        primeraTarjeta = null;
        segundaTarjeta = null;
        sePuedeDescubrir = true;
      }, 1000);
    }
  }
}

reparteTarjetas();

