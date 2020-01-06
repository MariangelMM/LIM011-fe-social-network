//registrar firebase
export const registrarUsuario = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);

//login 
export const logear = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);

export const observador = () => firebase.auth()
  .onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      console.log('sesion iniciada') 
      
    }
});

//login  con Google
export const logInGoogle = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    var user = result.user;
  
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
};

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

 //agregar post 
 export const añadirPost = (textarea) =>
  firebase.firestore().collection('publicaciones').add({
    post: textarea,
  });

  //cerrar sesion
   export const outUser = () => {
     return firebase.auth().signOut();
   };
   















































