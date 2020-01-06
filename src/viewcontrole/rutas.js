import { componentes } from '../view/index.js';
import { getDataUser } from "../firebase/controladorfirebase.js";

export const changeView = (router) => {
    const container = document.getElementById('container');
    console.log(router)
    container.innerHTML = ' ';
    switch (router) {
        case '#/',
            '#/home':
            { return container.appendChild(componentes.home()) }
        case '#/registro':
            { return container.appendChild(componentes.registro()) }
        case '#/interacciones':
            {   const user = {
                    uid: firebase.auth().currentUser.uid,
                }
                getDataUser(user)
                    .then((doc) => {
                        const dataDelUsuario = doc.data();
                        container.appendChild(componentes.interacciones(dataDelUsuario))
                    })
                break;
            }
        default:
            { return container.appendChild(componentes.home()) }
    }
};