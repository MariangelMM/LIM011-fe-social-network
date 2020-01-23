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
export const cerrarSesion = () => firebase.auth().signOut();

export const currentUser = () => firebase.auth().currentUser;


export const saveUsers = (datausuario) => {
  if (datausuario != null) {
    firebase.firestore().collection('usuarios').doc(datausuario.uid).set({
      name: datausuario.displayName,
      email: datausuario.email,
      photoURL: datausuario.photoURL,
      uid: datausuario.uid,
    });
  }
};

export const getDataUserById = user => firebase.firestore().collection('usuarios').doc(user.uid).get();

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

export const createPostUser = (textarea, tipopost, datausuario) => firebase.firestore().collection('publicaciones').add({
  contenido: textarea,
  tipo: tipopost,
  uid: datausuario.uid,
  name: datausuario.displayName,
  email: datausuario.email,
  date: new Date(),
  fecha: `${fecha(new Date()).day}/${fecha(new Date()).month}/${fecha(new Date()).year} a las ${fecha(new Date()).hours}:${fecha(new Date()).minutes}`,
});

export const showPost = (funcionQueRecibeLaData) => {
  const result = firebase.firestore().collection('publicaciones')
    .onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      funcionQueRecibeLaData(data);
    });
  return result;
};

// eliminar un post
export const DeletePost = id => firebase.firestore().collection('publicaciones').doc(id).delete();

// coleccion de registro de usuarios
export const coleccionRegisterUser = (nameCollection, id, dataUserRegister) => {
  const coleccion = firebase.firestore().collection(nameCollection).doc(id).set(dataUserRegister);
  return coleccion;
};

// editar un post
export const editPostText = (id, contenido) => firebase.firestore().collection('publicaciones').doc(id).update({
  contenido,
});
