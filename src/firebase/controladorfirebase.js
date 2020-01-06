//registrar firebase
export const registrarUsuario = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);

//login 
export const logear = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);

//login  con Google
export const logInGoogle = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider)
};

// login con Facebook

export const logInFacebook = () => {
  const facebook = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(facebook)
 }


 export const outUser = () => {
  return firebase.auth().signOut();
};

export const getDataUser = (user) => {
  return firebase.firestore().collection('usuarios').doc(user.uid).get();
  
}

export const postUser = (textarea) => {
return firebase.firestore().collection("publicaciones").add({
  contenido: textarea,
})}
export const showPost = () => {
return firebase.firestore().collection("publicaciones")
}