import { logInGoogle, logInFacebook, outUser } from './controladorfirebase.js'

 export const promAuthFace = () => {
     logInFacebook()};
       
 export const promAuthGoogle = () => {
     logInGoogle()
 };


export const promOutUser = () => {
  outUser().then(function() {
    console.log('Sign-out successful');
  }).catch(function(error) {
    console.log('An error happened');
  });
}




 export const saveUsers = () => {
    var user = firebase.auth().currentUser;

    if (user != null) 
    firebase.firestore().collection('usuarios').doc(user.uid).set({
      name : user.displayName,
      email : user.email,
      photoUrl : user.photoURL,
      uid : user.uid
    })
 };
