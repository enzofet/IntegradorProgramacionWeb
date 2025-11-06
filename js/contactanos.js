const formContacto = document.querySelector("form");
const nombre = document.getElementById("fnombre");
const email = document.getElementById("femail");
const asunto = document.getElementById("fasunto");
const telefono = document.getElementById("ftelefono");
const mensaje = document.getElementById("fmensaje");
formContacto.addEventListener("submit", validarForm);

function validarForm(evento) {
  evento.preventDefault();
  limpiarErrores();
  let validado = true;
  const nombreRegex = /^[\p{L}\-']{2,}$/u;
  if (typeof nombre.value !== "string" || nombre.value.trim() === "") {
    mostrarError(nombre, "Ingrese un nombre en valido");
    validado = false;
  } else if (!nombreRegex.test(nombre.value.trim())) {
    mostrarError(
      nombre,
      "Ingrese un nombre sin numeros con longitud minima de 2."
    );
    validado = false;
  }

  const emailRegex = /^([A-Za-z0-9-_.])+@([a-zA-Z0-9])+\.([a-z]{2,4})+$/;
  if (typeof email.value !== "string" || email.value.trim() === "") {
    mostrarError(email, "Ingrese un email valido y que no este vacio.")
    validado = false;
    } else if(!emailRegex.test(email.value.trim())){
        mostrarError(email, "Ingrese un email con el formato valido.")
        validado = false;
    }

  if (typeof asunto.value !== 'string' || asunto.value.trim().length < 10) {
        mostrarError(asunto, "Ingrese un asunto de más de 10 caracteres.")
        validado = false;
    }

  if (isNaN(telefono.value.trim()) || telefono.value.trim() == "") {
    mostrarError(telefono, "No puede dejar el campo vacio o ingresar letras.");
    validado = false;
}

  if (typeof mensaje.value !== 'string' || mensaje.value == "") {
    mostrarError(mensaje, "Campo vacio o no valido.");
    validado = false;
  } else if(mensaje.value.length < 20 || mensaje.value.length > 500){
    mostrarError(mensaje, "Ingrese una consulta entre 10 a 500 caracteres.");
    validado = false;
  }

  if(validado){
    formContacto.reset();
  }
  
  }
  

function mostrarError(input, mensaje) {

    let errorAnterior = input.parentNode.querySelector(".error-mensaje");
    if(errorAnterior){
        errorAnterior.textContent = mensaje;
    } else{
        const error = document.createElement("span");
    const inputError = input;
    error.classList.add("error-mensaje");
    error.style.color = "red";
    error.style.fontSize = "0.7rem";
    error.textContent = mensaje;
    inputError.classList.add("input-error");
    inputError.parentNode.appendChild(error);
    }
    
  }

  function limpiarErrores() {
    const errores = document.querySelectorAll(".error-mensaje");
    const bordesError = document.querySelectorAll(".input-error");
    errores.forEach(error => {
        error.remove();
    });

    bordesError.forEach(error =>{
        error.classList.remove("input-error");
    });
}