import { logear, logInFacebook, logInGoogle, saveUsers } from '../firebase/controladorfirebase.js'

export const HOME = () => {
  const viewHome = `
    <div class="contenedor flex">
    <img class="logo" src="./imagenes/loguito.png">
    <form class="formulario flex">
          <p class="parrafo"> Bienvenid@ , Conéctate con tu red social preferida <br> y comparte tus conocimientos de cocina. </p>
          <input class="inputs flex" id="email" placeholder="ejemplo@hotmail.com" type="text">
          <input class="inputs flex" id="password" placeholder="Contraseña" type="password">
          <button class="boton" type="button" id="btn_ingresar">INGRESA</button>
        <div class="logo_redes">
            <input id="facebook" type=image src="./imagenes/facebook.svg">
            <input id="google" type=image src="./imagenes/google.svg">
        </div>
            
            <p class="parrafo">¿No tienes una cuenta? <a href="#/registro" id="enlace_registrar" class="azul bold">Regístrate</a></p>
          </div>
    </form>
    </div> `;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewHome;
  divElem.querySelector('#btn_ingresar').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    logear(email, password)
   .then(function() {
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    const url = window.location.href;
    window.location.href = '#/interacciones';
})
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert('Debes ingresar un correo electrónico válido' + '\n Verifique su contraseña')
    });
  });
      



  // click google
  divElem.querySelector('#google').addEventListener('click' , (e) => {
    e.preventDefault()
    
   logInGoogle().then(function() {
    window.location.href = '#/interacciones';
    saveUsers();
   });
  });

  // click facebbok
  divElem.querySelector('#facebook').addEventListener('click' , (e) => {
    e.preventDefault()
    
    logInFacebook().then(function() {
      window.location.href = '#/interacciones';
      saveUsers();
  })
  });


return divElem; 

  };
