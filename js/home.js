const images = document.querySelectorAll(".carrousel-images img");
const frontImage = document.querySelector("#img frente")
let contador = 0;
const flechaPrev = document.getElementsByClassName("flecha-anterior")[0];
const flechaNext = document.getElementsByClassName("flecha-siguiente")[0];
const totalImagenes = images.length;
function retrocederImagen() {
  
  contador++;
}

flechaPrev.addEventListener("click", retrocederImagen);
