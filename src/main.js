
import { changeView } from './view-controller/router.js';
import { firebaseConfig } from '../firebaseconfig.js';

const init = () => {
     // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    changeView(window.location.hash);
    window.addEventListener('hashchange' , () => changeView(window.location.hash));
    
};

window.addEventListener('load', init)

