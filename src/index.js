  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCsMgoWIw4qFpyOZnmjmqSWBreHsh71xJY",
    authDomain: "food-book-78850.firebaseapp.com",
    databaseURL: "https://food-book-78850.firebaseio.com",
    projectId: "food-book-78850",
    storageBucket: "food-book-78850.appspot.com",
    messagingSenderId: "428801812215",
    appId: "1:428801812215:web:4ccfb72c2939bd0ab955f2",
    measurementId: "G-0LJ7T7YDCP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


const sesion = document.getElementById('btn_registrar');
sesion.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log(email);
    console.log(password);

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  console.log(errorCode);
  console.log(errorMessage);
});
});
