import { components } from '../view/index.js'

 export const changeView = (route) => {
     const container = document.getElementById('container');
     container.innerHTML = '';
      switch (route) {
         case '#/home':
              { return container.appendChild(components.home()) }

         case '#/registrate' : 
              { return container.appendChild(components.registro()) } 
           

         default:
               { return container.appendChild(components.home()) }
        }
       
          
    };