import { componentes } from '../view/index.js';
export const changeView = (route) => {
    const container = document.getElementById('container');
    container.innerHTML = ' ';
    switch (route) {
        case '#/home':
            { return container.appendChild(componentes.home()) }
        case '#/registro':
            { return container.appendChild(componentes.registro()) }
        default:
            { return container.appendChild(componentes.home()) }

    }
};