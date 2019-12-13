// registro de usuarios
export const registra = (email, contraseña) => firebase.auth().createUserWithEmailAndPassword(email, contraseña).catch(function(error) {
    // si hay algun error
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
});

// login de usuarios
export const logIn = (emailIS, contraseñaIS) =>  firebase.auth().signInWithEmailAndPassword(emailIS, contraseñaIS).catch(function(error) {
        
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });

  // login con Google

  export const logInGoogle = () => {
    const google = new firebase.auth.GoogleAuthProvider();  
      firebase.auth().signInWithPopup(google).then(function(result) {
    alert('ha iniciado sesion')
    // This gives you a Google Access Token. You can use it to access the Google API.
    // The signed-in user info.
    let user = result.user;
    console.log(user)
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    // The email of the user's account used.
    let email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    let credential = error.credential;
    // ...
  });
}

// login con Facebook

export const logInFacebook = () => {
 const facebook = new firebase.auth.FacebookAuthProvider();
 firebase.auth().signInWithPopup(facebook).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}