import MockFirebase from 'mock-cloud-firestore';


import { postUser, showPost } from '../src/firebase/controladorfirebase';

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
  post: 'probando mocks',

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
  it('Debería poder agregar una nota', () => postUser(objectpost, tipopost, datausuario).then((data) => {
    // eslint-disable-next-line no-underscore-dangle
    expect(data._data.contenido.post).toBe('probando mocks');
  }));
});

describe('showPost', () => {
  it('deberia retornar los post', () => showPost(() => {
  }));
});
