const formiInscripcion = document.querySelector(".form-inscripcion");
const formaContainer = document.querySelector(".formulario");

const nombre = document.getElementById('fnombre');
const apellido = document.getElementById('fapellido');
const email = document.getElementById('femail');
const telefono = document.getElementById('ftelefono');
const dni = document.getElementById('fDNI');
const cursos = document.getElementById('fcursos');
const fechaNacimiento = document.getElementById('ffechanacimiento');
const genero = document.getElementById('fgenero');

const btnInscribirse = document.querySelector(".enviar-formulario");

const hoy = new Date();
const añoMax = hoy.getFullYear() - 12;
const mes = String(hoy.getMonth() + 1).padStart(2, '0');
const dia = String(hoy.getDate()).padStart(2, '0');

const fechaMax = `${añoMax}-${mes}-${dia}`;

fechaNacimiento.min = '1900-01-01';
fechaNacimiento.max = fechaMax;

formiInscripcion.addEventListener('submit', validarFormulario);

function validarFormulario(event) {
  event.preventDefault();
  limpiarErrores();

  let validado = true;

  const patronTelefono = /^\d{7,15}$/;
  const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const patronDNI = /^\d{7,8}$/;

  if (nombre.value.trim() === '') {
    mostrarError(nombre, 'Por favor ingrese un nombre válido.');
    validado = false;
  }

  if (apellido.value.trim() === '') {
    mostrarError(apellido, 'Por favor ingrese un apellido válido.');
    validado = false;
  }

  if (!patronEmail.test(email.value.trim())) {
    mostrarError(email, 'Por favor ingrese un email válido.');
    validado = false;
  }

  if(isNaN(telefono.value.trim()) || telefono.value.trim() === '') {
    mostrarError(telefono, 'El campo no puede estar vacío o contener letras.');
    validado = false;

  } else if (!patronTelefono.test(telefono.value.trim())) {
    mostrarError(telefono, 'Por favor ingrese un teléfono válido (7 a 15 dígitos y sin guiones).');
    validado = false;
  }

  if(isNaN(dni.value.trim()) || dni.value.trim() === '') {
    mostrarError(dni, 'El campo no puede estar vacío o contener letras.');
    validado = false;

  } else if (!patronDNI.test(dni.value.trim())) {
    mostrarError(dni, 'Por favor ingrese un DNI válido (7 u 8 dígitos y sin puntos).');
    validado = false;
  }

  if (cursos.value === '' || cursos.value === '...') {
    mostrarError(cursos, 'Por favor seleccione un curso.');
    validado = false;
  }

if (!fechaNacimiento.value) {
  mostrarError(fechaNacimiento, 'Por favor ingrese una fecha de nacimiento.');
  validado = false;

} else {
  const fechaNac = new Date(fechaNacimiento.value);
  const fechaMin = new Date('1900-01-01');

  const fechaMaxValidacion = new Date();
  fechaMaxValidacion.setFullYear(hoy.getFullYear() - 12);

  if (isNaN(fechaNac.getTime())) {
    mostrarError(fechaNacimiento, 'Por favor ingrese una fecha válida.');
    validado = false;

  } else if (fechaNac < fechaMin) {
    mostrarError(fechaNacimiento, 'La fecha no puede ser menor a 1900-01-01.');
    validado = false;

  } else if (fechaNac > fechaMaxValidacion) {
    mostrarError(fechaNacimiento, 'Debe tener al menos 12 años.');
    validado = false;
  }
}


  if (genero.value === '' || genero.value === '...') {
    mostrarError(genero, 'Por favor seleccione un género.');
    validado = false;
  }

  if (validado) {
    const contenedorMsjExito = document.createElement('div');
    const tituloMsj = document.createElement('h2');
    const msj = document.createElement('p');

    tituloMsj.textContent = 'Inscripción realizada exitosamente.';
    msj.textContent = `Gracias por inscribirte. Nos pondremos en contacto contigo a través de ${email.value} pronto.`;

    contenedorMsjExito.appendChild(tituloMsj);
    contenedorMsjExito.appendChild(msj);
    contenedorMsjExito.classList.add('mensaje-exito');

    formaContainer.replaceChild(contenedorMsjExito, formiInscripcion);
    formiInscripcion.reset();
  }
}

function mostrarError(input, mensaje) {

  let errorAnterior = input.parentNode.querySelector(".error-mensaje");

  if (errorAnterior) {
    errorAnterior.textContent = mensaje;
  } else {
    const error = document.createElement("span");
    error.classList.add("error-mensaje");
    error.style.color = "red";
    error.style.fontSize = "0.7rem";
    error.textContent = mensaje;

    input.classList.add("input-error");
    input.parentNode.appendChild(error);
  }
}

function limpiarErrores() {
  const errores = document.querySelectorAll(".error-mensaje");
  const bordesError = document.querySelectorAll(".input-error");

  errores.forEach(error => error.remove());
  bordesError.forEach(input => input.classList.remove("input-error"));
}
