import { firebaseConfig } from './firebaseconfig.js'
import {changeView} from './viewcontrole/rutas.js'
const init = () => { 
  //
    firebase.initializeApp(firebaseConfig);
    changeView(window.location.hash)
    window.addEventListener('hashchange', () =>
    changeView(window.location.hash));
  }
window.addEventListener('load', init);