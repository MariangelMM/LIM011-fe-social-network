// registrar firebase
export const registrarUsuario = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);

// login
export const logear = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);

// login  con Google
export const logInGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

// login con Facebook
export const logInFacebook = () => {
  const facebook = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(facebook);
};

// cerrar sesión
export const outUser = () => firebase.auth().signOut();
//
export const currentUser = () => {
  const user = firebase.auth().currentUser;
  return user;
};

export const saveUsers = () => {
  const user = firebase.auth().currentUser;
  if (user != null) {
    firebase.firestore().collection('usuarios').doc(user.uid).set({
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      uid: user.uid,
    });
  }
};

export const getDataUser = user => firebase.firestore().collection('usuarios').doc(user.uid).get();

export const fecha = (fechas) => {
  const date = {
    day: fechas.getDate(),
    month: fechas.getMonth() + 1,
    year: fechas.getFullYear(),
    hours: fechas.getHours(),
    minutes: fechas.getMinutes(),
  };
  // console.log(date);
  return date;
};

export const postUser = (textarea, tipopost) => firebase.firestore().collection('publicaciones').add({
  contenido: textarea,
  tipopos: tipopost,
  uid: currentUser().uid,
  name: currentUser().displayName,
  email: currentUser().email,
  date: new Date(),
  fecha: `${fecha(new Date()).day}/${fecha(new Date()).month}/${fecha(new Date()).year} a las ${fecha(new Date()).hours}:${fecha(new Date()).minutes}`,
});

export const showPost = () => firebase.firestore().collection('publicaciones');
// eliminar un post
export const DeletePost = id => firebase.firestore().collection('publicaciones').doc(id).delete();
// editar un post
export const editPost = (id, contenido) => firebase.firestore().collection('publicaciones').doc(id).update({
  contenido,
});

// coleccion de registro de usuarios
export const coleccionRegisterUser = (nameCollection, id, dataUserRegister) => {
  const coleccion = firebase.firestore().collection(nameCollection).doc(id).set(dataUserRegister);
  return coleccion;
};
