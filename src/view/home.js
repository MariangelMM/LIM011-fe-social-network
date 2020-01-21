import {
  logear, logInFacebook, logInGoogle, saveUsers,
} from '../firebase/controladorfirebase.js';

export const HOME = () => {
  const viewHome = `
   <main class="contenedor flex">
      <img class="logo" src="./imagenes/loguito.png">
      <form class="formulario flex">
          <p class="parrafo"> Bienvenid@ , Conéctate con tu red social preferida <br> y comparte tus conocimientos de cocina. </p>
          <input class="inputs flex" id="email" placeholder="ejemplo@hotmail.com" type="text">
          <input class="inputs flex" id="password" placeholder="Contraseña" type="password">
          <div id='msj-error'>
          <p id='conten-error' class='mensajeerror'> </p> </div>
          <button class="boton" type="button" id="btn_ingresar">INGRESA</button>
         
          <div class="logo_redes">
          <input id="facebook" type=image src="./imagenes/facebook.svg">
          <input id="google" type=image src="./imagenes/google.svg">
      </div>
          <p class="parrafo">¿No tienes una cuenta? <a href="#/registro" id="enlace_registrar" class="azul bold">Regístrate</a></p>
      </form>
    </main> `;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewHome;

  divElem.querySelector('#btn_ingresar').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const mensajeError = document.getElementById('conten-error');
    logear(email, password)
      .then(() => {
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';

        window.location.href = '#/interacciones';
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        switch (errorCode) {
          case 'auth/invalid-email':
            mensajeError.innerHTML = `
            &#10062; Debes ingresar un correo electronico valido`;

            break;
          case 'auth/wrong-password':
            mensajeError.innerHTML = `
            &#10062; La contraseña no es válida o el usuario no tiene una contraseña`;
            break;
          case 'auth/user-not-found':
            mensajeError.innerHTML = `
            &#10062; No hay registro de usuario correspondiente a este identificador. El usuario puede haber sido eliminado`;

            break;


          default:
            break;
        }
      });
  });

  // click google
  divElem.querySelector('#google').addEventListener('click', (e) => {
    e.preventDefault();

    logInGoogle().then(() => {
      window.location.href = '#/interacciones';
      saveUsers();
    });
  });

  // click facebbok
  divElem.querySelector('#facebook').addEventListener('click', (e) => {
    e.preventDefault();

    logInFacebook().then(() => {
      window.location.href = '#/interacciones';
      saveUsers();
    });
  });

  return divElem;
};
