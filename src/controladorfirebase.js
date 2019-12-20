export const registrar = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);

export const ingresar = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);

export const observador = () => firebase.auth()
  .onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      console.log('sesion iniciada') 
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
    }
  });



//Auth con Google
export const google = () => {

  const db = firebase.firestore();
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    var user = result.user;
    var name = user.displayName;
    console.log(name);
    
    db.collection('usuarios').add({
      nombre: name,


    })
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

export const facebook = () => {
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
