const imagesCarrousel = document.querySelectorAll(".imagen");
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
}

let formContacto = document.forms["form-contacto"];
formContacto.addEventListener("submit", validarForm);

function validarForm() {
  let nombre = formContacto["fnombre"].value;
  let email = formContacto["femail"].value;
  let asunto = formContacto["fasunto"].value;
  let telefono = formContacto["ftelefono"].value;
  let mensaje = formContacto["fmensaje"].value;

  if(nombre == "" || email == "" || asunto == "" || telefono == "" || mensaje == ""){
    return false;
  } 

  

}

