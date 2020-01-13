//registrar firebase
export const registrarUsuario = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);

//login 
export const logear = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);

//login  con Google
export const logInGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
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

export const saveUsers = () => {
  const user = firebase.auth().currentUser;
  if (user != null) 
  firebase.firestore().collection('usuarios').doc(user.uid).set({
    name : user.displayName,
    email : user.email,
    photoUrl : user.photoURL,
    uid : user.uid
  })
};

export const getDataUser = (user) => {
  return firebase.firestore().collection('usuarios').doc(user.uid).get();
  
}

export const currentUser = () => firebase.auth().currentUser;

export const postUser = (textarea) => {
return firebase.firestore().collection("publicaciones").add({
  contenido: textarea,
  uid: currentUser().uid,
  name: currentUser().displayName,
  email: currentUser().email,
  date: new Date(),
})}



export const showPost = () => {
return firebase.firestore().collection("publicaciones")
}

export const DeletePost = (id) => {
  return firebase.firestore().collection("publicaciones").doc(id).delete();
}

export const editPost = (id, contenido) => {
  return firebase.firestore().collection("publicaciones").doc(id).update({
    contenido: contenido
  });
}