
import { outUser, postUser , showPost} from '../firebase/controladorfirebase.js'

export const INTERACCIONES = (user, posts) => {
  console.log('llegue a la vista', user)
  const db = firebase.firestore();
  const viewCatalogo = `  
  
<header class="encabezado">
<span id="nombreUsuario">Nombre</span>
<p>FOOD BOOK</p>
<menu id="cerrarSesion">Cerrar sesión</i></menu>
</header>

<nav class="contenedor flex">
<img class="" src="" alt="foto de portada">
<img id="fotoPerfil" class="photo" src="" alt="foto de perfil">
<p id="nombreUsuarioDestok" class="name-user">Nombre Usuario</p>


<section class="section-publics-muro">
<form class="form">
<textarea id="texto" placeholder="¿Qué quieres compartir?" name="" id="" cols="37" rows="4"></textarea>
<div class="btn-coment">
<button class="btn-share" id="compartir">Compartir</button>
</div>
<div id="comentarios" class="coment"></div>
</form>

</nav> 

`;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewCatalogo;

  // PUBLICAR 
  const publicar = divElement.querySelector('#compartir');
  publicar.addEventListener('click', (e) => {
    e.preventDefault()
    const textarea = divElement.querySelector('#texto').value;   
      postUser(textarea).then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        divElement.querySelector('#texto').value = '';
      })
      .catch(function (error) {
        console.error("Error: ", error);
      });
  });
  // LISTAR PUBLICACIONES 
  const comentarios = divElement.querySelector('#comentarios');
  showPost().onSnapshot((querySnapshot) => {
    comentarios.innerHTML = '';
    querySnapshot.forEach((doc) => {

      console.log(`${doc.id} => ${doc.data().contenido} `);

      comentarios.innerHTML += `
              <div class = "comment">
                <div class="title-note">
                <p>Publicado por </p><i class="fas fa-times"></i>
                </div>
                  <p class="text-coment">${doc.data().contenido}</p>
                  <button id="btn-delete">X</button>
              </div>
             `
    });
  });


  const outSesion = divElement.querySelector('#cerrarSesion');
  outSesion.addEventListener('click', (e) => {
    e.preventDefault();
    outUser().then(() => {
      window.location.hash = '#/';
    })
    
    
  });

  //asignancion datos básicos a perfil

  const fotoPerfil = divElement.querySelector('#fotoPerfil');
  const nombreUsuario = divElement.querySelector('#nombreUsuario');
  const nombreUsuarioDestok = divElement.querySelector('#nombreUsuarioDestok');

  fotoPerfil.src = user.photoUrl;
  nombreUsuario.innerHTML = user.name;
  nombreUsuarioDestok.innerHTML = user.name;

  
  console.log('llegue añl final')

  return divElement;
};




