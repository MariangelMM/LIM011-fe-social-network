/* if (emailUser !== '' && passwordUser !== '') {
    createUserAuth(emailUser, passwordUser)
      .then((result) => {
        console.log(result);
        const uidUser = result.user.uid;
        const dataUser = {
          displayName: nameCompleteUser,
          photoURL: 'https://icons8.com/icon/23265/ios-filled',
          email: result.user.email,
        };
        addInFirestore('probando', uidUser, dataUser);
        window.location.hash = '#/home';
      }).catch((error) => {
        const errorCode = error.code;

        switch (errorCode) {
          case 'auth/invalid-email':
            errorMessage.innerHTML = 'La dirección de correo electrónico no es valida';
            break;
          case 'auth/email-already-in-use':
            errorMessage.innerHTML = 'La dirección de correo electrónico ya esta en uso';
            break;
          case 'auth/weak-password':
            errorMessage.innerHTML = 'La contraseña debe tener al menos 6 caracteres.';
            break;
          default:
            errorMessage.innerHTML = 'Se produjo un error';
        }
      });
  } else {
    errorMessage.innerHTML = 'Ingresar todos los campos';
  }
};

export default createUser; */