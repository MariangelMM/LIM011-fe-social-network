import { componentes } from '../view/index.js';
import { getDataUser } from '../firebase/controladorfirebase.js';

// eslint-disable-next-line consistent-return
export const changeView = (router) => {
  const container = document.getElementById('container');
  container.innerHTML = ' ';
  switch (router) {
    // eslint-disable-next-line no-sequences
    case '#/',
    '#/home':
    { return container.appendChild(componentes.home()); }
    case '#/registro':
    { return container.appendChild(componentes.registro()); }
    case '#/interacciones':
    {
      const user = {
        uid: firebase.auth().currentUser.uid,
      };
      getDataUser(user)
        .then((doc) => {
          const dataDelUsuario = doc.data();
          container.appendChild(componentes.interacciones(dataDelUsuario));
        });
      break;
    }
    default:
    { return container.appendChild(componentes.home()); }
  }
};
