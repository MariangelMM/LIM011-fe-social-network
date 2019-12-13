export const registrar = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);

export const ingresar = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);

  export const autenticacion = () => firebase.auth()
  .onAuthStateChanged(function(user) {
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
    }});


  
  

