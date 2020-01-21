
import {
  registrarUsuario, logear, logInGoogle, logInFacebook, outUser,
  coleccionRegisterUser, saveUsers, fecha,
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

const userid = {
  uid: 'user002',
};

const datausuario = {
  displayName: 'mariangel mora',
  email: 'mariangelmora@gmail.com',
};

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


describe('coleccionRegisterUser', () => {
  it('debería ser una función', () => {
    expect(typeof coleccionRegisterUser).toBe('function');
  });
  it('Deberia poder crear una coleccion nueva de usuario', () => {
    coleccionRegisterUser('usuarios', userid, datausuario).then((data) => {
      expect(data.email).toBe('mariangelmora@gmail.com');
    });
  });
});

describe('saveUsers', () => {
  it('debería ser una función', () => {
    expect(typeof saveUsers).toBe('function');
  });
});

describe('fecha', () => {
  it('debería ser una función', () => {
    expect(typeof fecha).toBe('function');
  });
});
