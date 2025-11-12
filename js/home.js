
const imagenes = [
  "./img/carrousel/alemania.jpg",
  "./img/carrousel/brasil.jpg",
  "./img/carrousel/francia.jpg",
  "./img/carrousel/inglaterra.jpg",
  "./img/carrousel/italia.jpg",
  "./img/carrousel/japon.jpg"
];


const enlaces = [
    "./html/cursos.html",
    "./html/cursos.html",
    "./html/cursos.html",
    "./html/cursos.html",
    "./html/cursos.html",
    "./html/cursos.html"
];

const carrousel = document.querySelector(".carrousel");
const btnIzq = document.getElementById("izquierdo");
const btnDer = document.getElementById("derecho");

let indice = 0;

function mostrarImagenes(){
    carrousel.innerHTML = "";

    for(let i = 0; i < 3; i++){
        let indiceImagen = (indice + i) % imagenes.length;

        const div = document.createElement("div");
        div.classList.add("carrousel-imagen");

        const img = document.createElement("img");
        img.classList.add("imagen");
        img.src = imagenes[indiceImagen];
        img.alt = "imagen " + (indiceImagen + 1);

        
        const a = document.createElement("a");
        a.href = enlaces[indiceImagen] || "#";
        a.appendChild(img);

        div.appendChild(a);
        carrousel.appendChild(div);
    }
}

function avanzar(){
    indice = (indice + 1 + imagenes.length) % imagenes.length;
    mostrarImagenes();
}

function retroceder (){
    indice = (indice - 1 + imagenes.length) % imagenes.length;
    mostrarImagenes();
}

btnDer.addEventListener("click", avanzar);
btnIzq.addEventListener("click", retroceder);

mostrarImagenes();

//Tuve que cambiarlo a ultimo momento porque vi en el ejercicio que era con un Array. Fet Enzo
/*const imagesCarrousel = document.querySelectorAll(".imagen");
const containerCarrousel = document.querySelector("#imagenes");

containerCarrousel.classList.add("imagen-frente");
containerCarrousel.firstElementChild.classList.add("imagen-frente");

const flechaPrev = document.getElementsByClassName("flecha-anterior")[0];
const flechaNext = document.getElementsByClassName("flecha-siguiente")[0];

flechaNext.addEventListener("click", avanzarImagen);
flechaPrev.addEventListener("click", retrocederImagen);

function retrocederImagen() {
  const lastImage = containerCarrousel.lastElementChild;
  containerCarrousel.firstElementChild.classList.remove("imagen-frente");
  containerCarrousel.insertBefore(
    lastImage,
    containerCarrousel.firstElementChild
  );
  containerCarrousel.firstElementChild.classList.add("imagen-frente");
}

function avanzarImagen() {
  const firstImage = containerCarrousel.firstElementChild;
  containerCarrousel.firstElementChild.classList.remove("imagen-frente");
  containerCarrousel.removeChild(firstImage);
  containerCarrousel.appendChild(firstImage);
  containerCarrousel.firstElementChild.classList.add("imagen-frente");
}*/



