import MockFirebase from 'mock-cloud-firestore';

import {
  postUser, showPost, DeletePost, editPost, saveUsers,
} from '../src/firebase/controladorfirebase';

const fixtureData = {
  __collection__: {
    publicaciones: {
      __doc__: {
        post001: {
          contenido: 'probando mocks',
          tipo: 'publico',
          uid: 'user001',
          name: 'mariangel mora',
          email: 'mariangel@gmail.com',
          date: '20/01/2020',


        },
        post002: {
          contenido: 'probando mocks 3',
          tipo: 'privado',
          uid: 'user001',
          name: 'karen',
          email: 'karen123@gmail.com',
          date: '20/01/2020',


        },
      },
    },
    usuarios: {
      uid: 'user004',
      displayName: 'Karmen Sulmo',
      email: 'sulmokarmen@gmail.com',
    },
  },
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

const edipost = {
  contenido: 'mensaje editado',
};

const objectpost = {
  contenido: 'probando mocks 2',

};

const tipopost = {
  tipo: 'publico',
};
const datausuario = {
  uid: 'user002',
  displayName: 'karen sulca',
  email: 'sulca753@gmail.com',

};
const dataUsuario1 = {
  uid: 'user005',
  name: 'karmen sulmo',
  email: 'karmen@gmail.com',
};


describe('postUser', () => {
  it('debería ser una función', () => {
    expect(typeof postUser).toBe('function');
  });
  it('Debería poder agregar una nota', done => postUser(objectpost, tipopost, datausuario).then((data) => {
    // eslint-disable-next-line no-underscore-dangle
    expect(data._data.contenido.contenido).toBe('probando mocks 2');
    done();
  }));
});

describe('showPost', () => {
  it('debería ser una función', () => {
    expect(typeof showPost).toBe('function');
  });
  it('deberia mostrar los post', done => showPost((data) => {
    // console.log(data);
    expect(data).toHaveLength(3);
    done();
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

describe('editPost', () => {
  it('deberia ser una función', () => {
    expect(typeof editPost).toBe('function');
  });
  it('deberia poder editar una nota', done => editPost('post002', edipost.contenido).then(() => showPost(
    (data) => {
      const result = data.find(note => note.id === 'post002');
      expect(result.contenido).toBe('mensaje editado');
      done();
    },
  )));
});


describe('saveUsers', () => {
  it('debería ser una función', () => {
    expect(typeof saveUsers).toBe('function');
  });
  it('Debería poder agregar una coleccion', done => saveUsers(dataUsuario1).then(() => {
    console.log(dataUsuario1);
    // eslint-disable-next-line no-underscore-dangle
    // expect(data._data.contenido.contenido).toBe('probando mocks 2');
    done();
  }));
});
