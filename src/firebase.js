  /*import { firebaseConfig } from './example.js';
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const registro = document.getElementById('btn_registrar');
registro.addEventListener('click', (e) => {
  e.preventDefault()
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode);
  console.log(errorMessage);
});
});

const ingreso = document.getElementById('btn_ingresar');
ingreso.addEventListener('click', (e) => {
  e.preventDefault()
    const emailRegistro = document.getElementById('email_ingreso').value;
    const passwordRegistro = document.getElementById('password_ingreso').value;

    console.log(emailRegistro);
    console.log(passwordRegistro);


firebase.auth().signInWithEmailAndPassword(emailRegistro, passwordRegistro).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;

  console.log(errorCode);
  console.log(errorMessage);
  // ...
});
});
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log('si existe');
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
  } else {
    console.log('no existe');
    // User is signed out.
    // ...
  }
});*/