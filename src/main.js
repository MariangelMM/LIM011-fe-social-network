import { changeView } from './viewcontrole/index.js'
import { firebaseConfig } from './firebaseconfig.js'

const init = () => {

    firebase.initializeApp(firebaseConfig);
    changeView(window.location.hash)
    window.addEventListener('hashchange', () => changeView(window.location.hash));
}
window.addEventListener('load', init);