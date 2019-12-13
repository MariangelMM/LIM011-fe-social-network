/*import { firebaseConfig } from './example.js';



  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  
     firebase.auth().createUserWithEmailAndPassword(email, contraseña).catch(function(error) {
        // si hay algun error
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        });;
    });

    const login = document.querySelector('#login');

    login.addEventListener('click', (e) => {
      e.preventDefault();
    const emailIS = document.querySelector('#emailIS').value;
      const contraseñaIS = document.querySelector('#contraseñaIS').value;
      firebase.auth().signInWithEmailAndPassword(emailIS, contraseñaIS).catch(function(error) {
        
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
    });
      
    const observador = () =>  {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log('existe usuario activo');
          aparece();
          var displayName = user.displayName;
         
          var email = user.email;
          console.log(email);
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // ...
        } else {
         console.log('no existe usuario activo');
        }
      });
      

    }
    observador();
    const aparece = () => {
      const aparece2 = document.querySelector('#semuestra');
      aparece2.innerHTML = 'esto solo lo ve el usuario activo';
      
    }*/