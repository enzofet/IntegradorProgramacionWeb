const images = document.querySelectorAll(".carrousel-images img");
let contador = 0;
const flechaPrev = document.getElementsByClassName("flecha-anterior")[0];
const flechaNext = document.getElementsByClassName("flecha-siguiente")[0];
const totalImagenes = images.length;
function retrocederImagen(){
    let imagen = images[contador].id("imagen-frente"); 
}

flechaPrev.addEventListener("click", retrocederImagen);

