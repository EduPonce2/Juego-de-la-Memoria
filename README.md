__BIENVENIDOS AL JUEGO DE LA MEMORIA 🤯__

*Este es un sencillo proyecto de un juego web donde se deben encontrar las parejas de cartas iguales en la menor cantidad de intentos posibles*

_El objetivo es coincidir pares de cartas que contienen emojis, cuando hagas clic en una carta, si coinciden, permanecen descubiertas, sino, se vuelven a ocultar_

**INSTALACION🤓**
1) Clonar este repositorio en tu computadora
2) git clone https://github.com\fabri\Juego-de-la-Memoria.git
3) Asegurate de tener los siguientes archivos en tu carpeta:

index.html

script.js

README.md

Abrir el archivo index.html en tu navegador favorito. 

**USO🤔**

Al abrir la página, el juego reparte las cartas de forma aleatoria.

Hacé clic en dos cartas para descubrir su contenido.

Si las cartas coinciden, permanecerán descubiertas.

Si no coinciden, se ocultarán nuevamente después de 1 segundo.

El contador de intentos se actualiza automáticamente.

¡Ganá descubriendo todas las parejas!

**CAPTURA DE PANTALLA**

![Juego en acción](captura1.png)

***FRAGMENTOS IMPORTANTES DEL CODIGO🚨***

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
      parejasEncontradas++;
      primeraTarjeta = null;
      segundaTarjeta = null;
      sePuedeDescubrir = true;
    } else {
   
  setTimeout(() => {
        primeraTarjeta.classList.remove("descubierta");
        segundaTarjeta.classList.remove("descubierta");
        primeraTarjeta = null;
        segundaTarjeta = null;
        sePuedeDescubrir = true;
      }, 1000);
    }
  }
}

**CONTRIBUCION🫂**

Toda contribuciones son bienvenidas mientras sea para mejorar este proyecto :)

Se puede hacer de la siguiente forma:

Forkeá el repositorio.

Creá una nueva rama (git checkout -b mejora-nueva).

Hacé tus cambios y hacé commit (git commit -m "Agrega nueva mejora").

Hacé push a la rama (git push origin mejora-nueva).

Abrí un Pull Request para revisión.

**CONTACTO☎️**

AUTOR/ES: PONCE EDUARDO Y AMARILLA FABRICIO

EMAIL: Eduponce2@gmail.com 
escfabricioamarilla@gmail.com

GITHUB:  https://github.com/Eduponce2 
 https://github.com/Fabri-amarilla
