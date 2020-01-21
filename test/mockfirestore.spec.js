import MockFirebase from 'mock-cloud-firestore';


import { postUser, showPost } from '../src/firebase/controladorfirebase';

const fixtureData = {
  __collection__: {
    publicaciones: {
      __doc__: {
        post001: {
          post: 'probando mocks',
          tipo: 'publico',
          uid: 'user001',
          name: 'mariangel mora',
          email: 'mariangel@gmail.com',
          date: '20/01/2020',


        },
      },
    },
  },
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

const objectpost = {
  post: 'probando mocks 2',

};
const tipopost = {
  tipo: 'publico',
};
const datausuario = {

  uid: 'user002',
  displayName: 'karen sulca',
  email: 'sulca753@gmail.com',

};

describe('postUser', () => {
  it('debería ser una función', () => {
    expect(typeof postUser).toBe('function');
  });
  it('Debería poder agregar una nota', done => postUser(objectpost, tipopost, datausuario).then((data) => {
    // eslint-disable-next-line no-underscore-dangle
    expect(data._data.contenido.post).toBe('probando mocks 2');
    done();
  }));
});

describe('showPost', () => {
  it('debería ser una función', () => {
    expect(typeof showPost).toBe('function');
  });
  it('deberia mostrar los post', done => showPost((data) => {
    // console.log(data);
    expect(data).toHaveLength(2);
    done();
  }));
});
