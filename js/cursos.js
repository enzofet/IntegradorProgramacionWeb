const imagenes = [
  "../img/carrousel/flayer2x1.jpg",
  "../img/carrousel/flayer30italiano.jpg",
  "../img/carrousel/Flayer50italiano.jpg",
  "../img/carrousel/flayer2x1.jpg",
  "../img/carrousel/flayer30italiano.jpg",
  "../img/carrousel/Flayer50italiano.jpg"
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

        div.appendChild(img);
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