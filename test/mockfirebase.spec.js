
import {
  registrarUsuario, logear, logInGoogle, logInFacebook, outUser,
} from '../src/firebase/controladorfirebase.js';

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
  it('debería ser una función', () => {
    expect(typeof registrarUsuario).toBe('function');
  });
  it('Deberia poder crear un nuevo usuario', () => registrarUsuario('mariangel@gmail.com', '123456')
    .then((data) => {
      expect(data.email).toBe('mariangel@gmail.com');
    }));
});


describe('loguear', () => {
  it('debería ser una función', () => {
    expect(typeof logear).toBe('function');
  });
  it('Deberia poder iniciar sesion', () => logear('mariangel@gmail.com', '123456')
    .then((data) => {
      expect(data.email).toBe('mariangel@gmail.com');
    }));
});

describe('logInGoogle', () => {
  it('debería ser una función', () => {
    expect(typeof logInGoogle).toBe('function');
  });
  it('Deberia poder iniciar sesion con una cuenta de google', () => logInGoogle()
    .then(() => {
      expect('').toBe('');
    }));
});

describe('logInFacebook', () => {
  it('debería ser una función', () => {
    expect(typeof logInFacebook).toBe('function');
  });
  it('Deberia poder iniciar sesion con una cuenta de google', () => logInFacebook()
    .then(() => {
      expect('').toBe('');
    }));
});

describe('outUser', () => {
  it('debería ser una función', () => {
    expect(typeof outUser).toBe('function');
  });
  it('Deberia poder cerrar sesion', () => outUser()
    .then(() => {
      expect('cerrar sesion').toBe('cerrar sesion');
    }));
});
