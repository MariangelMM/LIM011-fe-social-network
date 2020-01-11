import { registrarUsuario , saveUsers} from '../firebase/controladorfirebase.js'

export const REGISTRO = () => {
  const viewRegistro = `
    <div class="registro flex">
    <form class="formulario1 flex">
    
        <img class="logo1" src="./imagenes/loguito.png" alt="Logo">
        <input class="inputs flex" id="name" placeholder="Nombre Completo" type="text">
        <input class="inputs flex" id="email" placeholder="ejemplo@hotmail.com" type="email"> 
        <input class="inputs flex" id="password" placeholder="Contraseña Nueva" type="password">
        <button class="boton" type="submit" id="btn_registrar" >REGISTRAR</button>
      </form>
   </div>`
   
  const divElem = document.createElement('div');
  divElem.innerHTML = viewRegistro;
 
  divElem.querySelector('#btn_registrar').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    registrarUsuario(email, password)
      .then(function () {
        
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        const url = window.location.href;
        const nuevaUrl = url.replace(/registro/, 'interacciones');
        console.log(nuevaUrl);
        window.location.href = nuevaUrl;
      })
      .then(function () {
        saveUsers();
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert('Debes ingresar un correo electrónico válido' + '\n La contraseña debe tener al menos 6 caracteres')
      });


  
});

  return divElem;
}
