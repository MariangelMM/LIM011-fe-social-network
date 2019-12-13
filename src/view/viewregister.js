import { registra } from '../controllerfirebase.js'
export const REGISTRO = () => {
    const viewRegister = `
    <img class="logo" src="logo.png" alt="">
    <form id="registrar" action="">
    <input id="nombre" type="text" placeholder="NOMBRE"  class="inputs"><br>
    <input id="apellido" type="text" placeholder="APELLIDO"  class="inputs"><br>
    <input id="email" type="text" placeholder="ejemplo@gmail.com"  class="inputs"><br>
    <input id="contraseña" type="password" placeholder="&#128272; Contraseña"  class="inputs"><br>
    
    <button id="registrate">REGISTRATE</button>
  </form>`;

    const divElem = document.createElement('div');
    divElem.innerHTML = viewRegister;

     divElem.querySelector('#registrate').addEventListener('click',  () => {
     const email = document.querySelector('#email').value;
     const contraseña = document.querySelector('#contraseña').value;
     registra(email, contraseña);

console.log(email);

console.log(contraseña);

})
    return divElem;
    
  };  
