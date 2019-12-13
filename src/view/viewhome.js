import { logIn , logInGoogle , logInFacebook} from '../controllerfirebase.js'

export const HOME =  () => {
    const viewHome = `
    <img class="logo" src="logo.png" alt="">
    <form id="loginn" action="">
      <p>¡Bienvenidx a FoodBook!</p>
      <input type="text" id="emailIS" placeholder="CORREO ELECTRONICO" class="inputs"><br>
      <input type="password" id="contraseñaIS" placeholder="CONTRASEÑA" class="inputs"><br>
      <button id="login">LOG IN!</button>
      <p>O bien ingresa con...</p>
      <button id="facebook">FACEBOOK</button><br>
      <button id="google">GOOGLE</button>

  
      <p>¿No tienes cuenta?
         <a href="#/registrate">Regístrate.</a>
      </p>
   </form>`; 

    const divElemt = document.createElement('div');
    divElemt.innerHTML = viewHome;
    
    divElemt.querySelector('#login').addEventListener('click', () => {
      const emailIS = document.querySelector('#emailIS').value;
      const contraseñaIS = document.querySelector('#contraseñaIS').value;
      logIn(emailIS, contraseñaIS);

    
    });

    // click google
    divElemt.querySelector('#google').addEventListener('click' , (e) => {
      e.preventDefault()
      
     logInGoogle();
    });
// click facebook

divElemt.querySelector('#facebook').addEventListener('click', (e) => {
  e.preventDefault();

  logInFacebook();
  
});

    return divElemt; 
    };

