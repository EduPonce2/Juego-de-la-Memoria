var grupoTarjetas = ["😎", "🍦", "🐸", "👽", "👾", "🤖", "👹", "🐌","🐈‍⬛","🧟‍♂️","💩","🥶","🥹","🐭"];
var totalTarjetas = grupoTarjetas.concat(grupoTarjetas);

// Variables para controlar el juego
var primeraTarjeta = null;
var segundaTarjeta = null;
var sePuedeDescubrir = true;

function barajaTarjetas() {
  return totalTarjetas.sort(function() {
    return 0.5 - Math.random();
  });
}

function reparteTarjetas() {
  var mesa = document.querySelector("#mesa");
  var tarjetasBarajadas = barajaTarjetas();
  mesa.innerHTML = "";

  tarjetasBarajadas.forEach(function(elemento) {
    var tarjeta = document.createElement("div");

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

    var emoji1 = primeraTarjeta.querySelector(".tarjeta__contenido").textContent;
    var emoji2 = segundaTarjeta.querySelector(".tarjeta__contenido").textContent;

    if (emoji1 === emoji2) {
      // Son iguales
      primeraTarjeta = null;
      segundaTarjeta = null;
      sePuedeDescubrir = true;
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

// Inicia el juego
reparteTarjetas();
