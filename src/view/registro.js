import { registrarUsuario , saveUsers ,coleccionRegisterUser} from '../firebase/controladorfirebase.js'

export const REGISTRO = () => {
  const viewRegistro = `
    <div class="registro flex">
      <img src="./imagenes/loguito.png" alt="Logo">
      <form class="formulario">
        <input class="inputs flex" id="name" placeholder="Nombre Completo" type="text">
        <input class="inputs flex" id="lastName" placeholder="Nombre Completo" type="text">
        <input class="inputs flex" id="email" placeholder="ejemplo@hotmail.com" type="email"> 
        <input class="inputs flex" id="password" placeholder="Contraseña Nueva" type="password">
      </form>
      <button class="boton verde" type="submit" id="btn_registrar" >REGISTRAR</button>
   </div>`

   const createUser = () => {
    const divElem = document.createElement('div');
    divElem.innerHTML = viewRegistro;
    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const nameCompleteUser = name + ' ' + lastName;
    
    if ( email !== '' && password !== '') {
      registrarUsuario(email, password)
      .then((result) =>{
        const uidUser = result.user.uid;
        const dataUser = {
          displayName: nameCompleteUser,
          photoURL: './imagenes/userXimage.png',
          email: result.user.email
        };
        coleccionRegisterUser('dataUserRegister', uidUser, dataUser);
        console.log(coleccionRegisterUser())
      })
      }
    }
  
  divElem.querySelector('#btn_registrar').addEventListener('click', createUser() );
  
  return divElem;
}
  
  /* () => {

    registrarUsuario(email, password)
      .then(function () {
        
        document.getElementById('name').value = '';
        document.getElementById('lastName').value = '';
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
 

  
}); */

 