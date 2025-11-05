const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const dni = document.getElementById('DNI');
const cursos = document.getElementById('cursos');
const fechaNacimiento = document.getElementById('fechanacimiento');
const genero = document.getElementById('genero');
const btnInscribirse = document.getElementById('inscribirse');


function validarFormulario(event) {
  event.preventDefault();
  const patronTelefono = /^\d{7,15}$/;
  const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const patronDNI = /^\d{7,8}$/; 

  if (nombre.value.trim() === '' ||
    apellido.value.trim() === '' ||
    email.value.trim() === '' ||
    telefono.value.trim() === '' ||
    dni.value.trim() === '' ||
    cursos.value === '...' ||
    fechaNacimiento.value === '' ||
    genero.value === '...') {

    alert('Por favor, complete todos los campos antes de continuar.');
    return;
  }

  if (!patronEmail.test(email.value)) {
    alert('Por favor, ingrese un e-mail válido.');
    return;
  }

  if (!patronTelefono.test(telefono.value)) {
    alert('Por favor, ingrese un teléfono válido (solo números, entre 7 y 15 dígitos).');
    return;
  }
  
  if (!patronDNI.test(dni.value)) {
    alert('Por favor, ingrese un DNI válido (solo números, sin puntos, entre 7 y 8 dígitos).');
    return;
  }

  const fechaNac = new Date(fechaNacimiento.value);
  const hoy = new Date();
  const edad = hoy.getFullYear() - fechaNac.getFullYear();
  const diferenciaMes = hoy.getMonth() - fechaNac.getMonth();
  if (diferenciaMes < 0 || (diferenciaMes === 0 && hoy.getDate() < fechaNac.getDate())){
    edad--;
  }

  if (isNaN(fechaNac) || edad < 12) {
    alert('Debe ingresar una fecha de nacimiento válida (mayor de 12 años).');
    return;
  }

  alert(`🎉 Inscripción realizada con éxito. ¡Gracias por inscribirte, ${nombre.value}!`);

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
