//registrar firebase
export const registrarUsuario = ( email, password) => firebase.auth()
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

// cerrar sesión
 export const outUser = () => {
  return firebase.auth().signOut();
};
//
export const currentUser = () => firebase.auth().currentUser;

export const saveUsers = () => {
  const user = firebase.auth().currentUser;
  if (user != null) 
  firebase.firestore().collection('usuarios').doc(user.uid).set({
    name : user.displayName,
    email : user.email,
    photoURL : user.photoURL,
    uid : user.uid
  })
};

export const getDataUser = (user) => {
  return firebase.firestore().collection('usuarios').doc(user.uid).get();
  
}

export const fecha = (fecha) => {
  const date = {
  day : fecha.getDate(),
  month : fecha.getMonth() +1,
  year : fecha.getFullYear(),
  hours : fecha.getHours(),
  minutes : fecha.getMinutes(),
  }
 // console.log(date);
  return date;
 
}

export const postUser = (textarea) => {
return firebase.firestore().collection("publicaciones").add({
  contenido: textarea,
  uid: currentUser().uid,
  name: currentUser().name,
  email: currentUser().email,
  date: new Date(),
  fecha : `${fecha(new Date()).day}/${fecha(new Date()).month}/${fecha(new Date()).year} a las ${fecha(new Date()).hours}:${fecha(new Date()).minutes}`,
})}


export const showPost = () => {
return firebase.firestore().collection("publicaciones")
}
//eliminar un post
export const DeletePost = (id) => {
  return firebase.firestore().collection("publicaciones").doc(id).delete();
}
//editar un post
export const editPost = (id, contenido) => {
  return firebase.firestore().collection("publicaciones").doc(id).update({
    contenido: contenido
  });
}

//coleccion de registro de usuarios

export const coleccionRegisterUser = (nameCollection, id, dataUserRegister) => {
   const coleccion = firebase.firestore().collection(nameCollection).doc(id).set(dataUserRegister);
  return coleccion;

}