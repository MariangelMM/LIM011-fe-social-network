import { registrarUsuario, coleccionRegisterUser } from '../firebase/controladorfirebase.js';

export const REGISTRO = () => {
  const viewRegistro = `
    <div class="registro flex">
      <form class="formulario1 flex">
        <img class="logo1" src="./imagenes/loguito.png" alt="Logo">
        <input class="inputs" flex" id="name" placeholder="Nombre Completo" type="text">
        <input class="inputs" flex" id="lastName" placeholder="Apellido Completo" type="text">
        <input class="inputs" flex" id="email" placeholder="ejemplo@hotmail.com" type="email"> 
        <input class="inputs" flex" id="password" placeholder="Contraseña Nueva" type="password">
        <button class="boton" type="submit" id="btn_registrar" >REGISTRAR</button>
      </form>
   </div>`;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewRegistro;

  const createUser = (e) => {
    e.preventDefault();
    const name = divElem.querySelector('#name ').value;
    const lastName = divElem.querySelector('#lastName').value;
    const email = divElem.querySelector('#email').value;
    const password = divElem.querySelector('#password').value;
    const nameCompleteUser = `${name} ${lastName}`;

    if (email !== '' && password !== '') {
      registrarUsuario(email, password)
        .then((result) => {
          const uidUser = result.user.uid;
          const dataUser = {
            name: nameCompleteUser,
            photoURL: './imagenes/userXimage.png',
            email: result.user.email,
          };
          coleccionRegisterUser('usuarios', uidUser, dataUser).then(() => {
            const user = firebase.auth().currentUser;
            user.updateProfile({
              displayName: name,
            });
          });
        });
    }
  };

  divElem.querySelector('#btn_registrar').addEventListener('click', createUser);


  return divElem;
};
