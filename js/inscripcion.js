const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const dni = document.getElementById('DNI');
const cursos = document.getElementById('cursos');
const fechaNacimiento = document.getElementById('fechanacimiento');
const genero = document.getElementById('genero');
const btnInscribirse = document.getElementById('inscribirse');
const mensajesDiv = document.getElementById('mensajes');

function validarFormulario(event) {
  event.preventDefault();
  mensajesDiv.innerHTML = "";

  const patronTelefono = /^\d{7,15}$/;
  const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const patronDNI = /^\d{7,8}$/; 

  const errores = [];

 
  const mensaje = document.createElement('div');
  mensaje.id = 'mensaje';
  mensaje.style.margin = "1rem auto";
  mensaje.style.width = "70%";
  mensaje.style.padding = "1rem";
  mensaje.style.borderRadius = "0.5rem";
  mensaje.style.textAlign = "center";
  mensaje.style.fontWeight = "bold";
  mensaje.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";

  const todosVacios = 
    nombre.value.trim() === '' &&
    apellido.value.trim() === '' &&
    email.value.trim() === '' &&
    telefono.value.trim() === '' &&
    dni.value.trim() === '' &&
    cursos.value === '...' &&
    fechaNacimiento.value === '' &&
    genero.value === '...';

  if (todosVacios) {
    mensaje.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    mensaje.style.color = "#800036";
    mensaje.innerHTML = "Por favor, complete todos los campos antes de continuar.";
    mensajesDiv.appendChild(mensaje);
    return;
  }

  if (nombre.value.trim() === '' || apellido.value.trim() === '' || email.value.trim() === '' ||
      telefono.value.trim() === '' || dni.value.trim() === '' || cursos.value === '...' ||
      fechaNacimiento.value === '' || genero.value === '...') {

    errores.push('Faltan campos por completar.');
  }

  if (email.value.trim() !== '' && !patronEmail.test(email.value)) {

    errores.push('El e-mail no tiene un formato válido.');
  }

  if (telefono.value.trim() !== '' && !patronTelefono.test(telefono.value)) {

    errores.push('El teléfono debe tener entre 7 y 15 dígitos numéricos.');
  }

  if (dni.value.trim() !== '' && !patronDNI.test(dni.value)) {

    errores.push('El DNI debe tener entre 7 y 8 dígitos (solo números, sin puntos).');
  }

  if (fechaNacimiento.value !== '') {
    const fechaNac = new Date(fechaNacimiento.value);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    const diferenciaMes = hoy.getMonth() - fechaNac.getMonth();
    if (diferenciaMes < 0 || (diferenciaMes === 0 && hoy.getDate() < fechaNac.getDate())) {
      edad--;
    }
    if (isNaN(fechaNac) || edad < 12) {

      errores.push('Debe ingresar una fecha de nacimiento válida (mayor de 12 años).');
    }
  }

  if (errores.length > 0) {
    mensaje.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    mensaje.style.color = "#800036";
    mensaje.innerHTML = errores.join("<br>");
    mensajesDiv.appendChild(mensaje);
    return;
  }

  mensaje.style.backgroundColor = "green";
  mensaje.style.color = "white";
  mensaje.innerHTML = `
    <h3>🎉 Inscripción realizada con éxito</h3>
    <p><strong>Nombre:</strong> ${nombre.value} ${apellido.value}</p>
    <p>Recibirá un E-mail en ${email.value} con detalles de la inscripción.</p>
  `;
  mensajesDiv.appendChild(mensaje);

  nombre.value = '';
  apellido.value = '';
  email.value = '';
  telefono.value = '';
  dni.value = '';
  cursos.value = '...';
  fechaNacimiento.value = '';
  genero.value = '...';
}

btnInscribirse.addEventListener('click', validarFormulario);
