const imagenes = [
  "../img/carrousel/alemania.jpg",
  "../img/carrousel/brasil.jpg",
  "../img/carrousel/francia.jpg",
  "../img/carrousel/inglaterra.jpg",
  "../img/carrousel/italia.jpg",
  "../img/carrousel/japon.jpg"
];


const enlaces = [
    "#alemania",
    "#brasil",
    "#francia",
    "#inglaterra",
    "#italia",
    "#japon"
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