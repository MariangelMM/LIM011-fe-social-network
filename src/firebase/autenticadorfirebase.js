import { logInGoogle, logInFacebook, outUser } from './controladorfirebase.js'

 


export const promOutUser = () => {
  outUser().then(function() {
    console.log('Sign-out successful');
  }).catch(function(error) {
    console.log('An error happened');
  });
}

