import { registrarUsuario } from '../src/firebase/controladorfirebase.js';

// configurando firebase mock
const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth,
  () => mockfirestore,
);

describe('registrarUsuario', () => {
  it('Deberia poder crear un nuevo usuario', () => registrarUsuario('mariangel@gmail.com', '123456')
    .then((data) => {
      expect(data.email).toBe('mariangel@gmail.com');
    }));
});

// describe('logear', () => {
//   it('Deberia poder iniciar sesion', () => logear('mariangel@gmail.com', '123456')
//     .then((data) => {
//       expect(data.email).toBe('mariangel@gmail.com');
//     }));
// });

// describe('logInGoogle', () => {
//   it('Deberia poder iniciar sesion con una cuenta de google', () => logInGoogle()
//     .then(() => {
//       expect('').toBe('');
//     }));
// });

// describe('logInFacebook', () => {
//   it('Deberia poder iniciar sesion con una cuenta de google', () => logInFacebook()
//     .then(() => {
//       expect('').toBe('');
//     }));
// });

// describe('outUser', () => {
//   it('Deberia poder cerrar sesion', () => outUser()
//     .then(() => {
//       expect('fin de sesion').toBe('fin de sesion');
//     }));
// });
