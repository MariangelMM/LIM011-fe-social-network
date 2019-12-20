import { componentes } from '../view/index.js';

export const changeView = (router) => {
    const container = document.getElementById('container');
    container.innerHTML = ' ';
    switch (router) {
        case '#/home':
            { return container.appendChild(componentes.home()) }
        case '#/registro':
            { return container.appendChild(componentes.registro()) }
        case '#/interacciones':
            { return container.appendChild(componentes.interacciones()) }
        default:
            { return container.appendChild(componentes.home()) }
    }
};