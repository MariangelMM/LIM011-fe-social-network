import { registrar, autenticacion } from './controladorfirebase.js'

export default () => {
  const viewRegistro = `
    <div class="registro flex">
   <img src="./imagenes/loguito.png" alt="Logo">
      <form class="formulario">
            <input class="inputs flex" id="name" placeholder="Nombre" type="text">
            <input class="inputs flex" id="surname" placeholder="Apellido" type="text">
            <input class="inputs flex" id="email" placeholder="ejemplo@hotmail.com" type="email"> <br>
            <input class="inputs flex" id="password" placeholder="Contraseña Nueva" type="password">
          </form>
          <button class="boton verde" type="submit" id="btn_registrar">REGISTRAR</button>
        </div>

    `
  const divElem = document.createElement('div');
  divElem.innerHTML = viewRegistro;
  divElem.querySelector('#btn_registrar').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const mensajeError = document.querySelector('#error').value;

 registrar(email, password)
 .then(() => alert("Datos Guardados"))
 .catch(function (error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  alert('Debes ingresar un correo electrónico válido' + '\n La contraseña debe tener al menos 6 caracteres' )
  });
 autenticacion();
    
  });
  return divElem;
}


