import MockFirebase from 'mock-cloud-firestore';


import { postUser } from '../src/firebase/controladorfirebase';

const fixtureData = {
  __collection__: {
    notes: {
      __doc__: {
        abc123: {
          title: 'terminar la pildora',

        },
        abc125: {
          title: 'lavar ropa',

        },
      },
    },
  },
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });


describe('postUser', () => {
  it('Debería poder agregar una nota', () => postUser('preparar la pildora').then((data) => {
    console.log(data);
    expect(data).toBe('la nota fue agregada');
  }));
});
