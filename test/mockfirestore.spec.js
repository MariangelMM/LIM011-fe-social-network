import MockFirebase from 'mock-cloud-firestore';


import { postUser, DeletePost, showPost } from '../src/firebase/controladorfirebase';

const fixtureData = {
  collection: {
    doc: {
      post001: {
        post: 'probando mocks',
        tipo: 'publico',
        uid: 'user001',
        name: 'karen sulca',
        email: 'sulca753@gmail.com',
        date: '17/01/2020',


      },
    },
  },
};


global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

const objectpost = {
  post: 'probando mocks2',

};
const tipopost = {
  tipo: 'publico',
};
const datausuario = {

  uid: 'user001',
  displayName: 'karen sulca',
  email: 'sulca753@gmail.com',

};

describe('postUser', () => {
  it('debería ser una función', () => {
    expect(typeof postUser).toBe('function');
  });
  it('Debería poder agregar una nota', () => postUser(objectpost, tipopost, datausuario).then((data) => {
    // eslint-disable-next-line no-underscore-dangle
    expect(data._data.contenido.post).toBe('probando mocks2');
  }));
});

describe('DeletePost', () => {
  it('deberia ser una función', () => {
    expect(typeof DeletePost).toBe('function');
  });
  it('Deberia poder eliminar una nota con el id post001', done => DeletePost('post001').then(() => showPost(
    (data) => {
      const result = data.find(note => note.id === 'post001');
      expect(result).toBe(undefined);
      done();
    },
  )));
});
