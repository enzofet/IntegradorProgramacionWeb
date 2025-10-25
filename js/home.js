const imagesCarrousel = document.querySelectorAll(".imagen");
const containerCarrousel = document.querySelector("#imagenes");



containerCarrousel.classList.add("imagen-frente");
containerCarrousel.firstElementChild.classList.add("imagen-frente");
const flechaPrev = document.getElementsByClassName("flecha-anterior")[0];
const flechaNext = document.getElementsByClassName("flecha-siguiente")[0];

flechaNext.addEventListener("click", avanzarImagen);
flechaPrev.addEventListener("click", retrocederImagen);

let contador = 0;

function retrocederImagen() {
  
}

function avanzarImagen() {
    const firstImagen = containerCarrousel.firstElementChild;
    containerCarrousel.firstElementChild.classList.remove("imagen-frente");
    containerCarrousel.removeChild(firstImagen);
    containerCarrousel.appendChild(firstImagen);
    containerCarrousel.firstElementChild.classList.add("imagen-frente");
}

/*function avanzarImagen() {
  if(contador != imagesCarrousel.length -1){
    const firstImagen = containerCarrousel.firstElementChild;
    imagesCarrousel[contador].classList.remove("imagen-frente");
    containerCarrousel.removeChild(firstImagen);
    containerCarrousel.appendChild(firstImagen);
    contador++;
    imagesCarrousel[contador].classList.add("imagen-frente");
  } else {
    contador = 0;
    moverElemento();
  }
}*/




