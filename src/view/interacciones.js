
import { outUser, postUser, showPost, DeletePost, editPost } from '../firebase/controladorfirebase.js'

export const INTERACCIONES = (user, posts) => {
  const viewCatalogo = ` 
  <header>
    <nav>
      <span id="nombreUsuario">${user.name}</span>
      <p>FOOD BOOK</p>
      <menu id="cerrarSesion">Cerrar sesión</i>
    </nav>
  </header>
  
  <div class="body">
    <div class="profile-section">
      <img class="cover-page" src="${user.photoUrl}" alt="foto de portada">
      <div class="info-user">
        <img id="fotoPerfil" class="avatar" src="${user.photoUrl}" alt="foto de perfil">
        <div>
          <p id="nombreUsuarioDestok" class="name-user">${user.name}</p>
        </div>
      </div>
    </div>
    <div class="publications-section">
      <form class="form">
        <textarea class="message-post" id="texto" placeholder="¿Qué quieres compartir?" cols="30" rows="4"></textarea>
        <div class="buttons">
          <button class="btn-post" id="compartir">Compartir</button>
         </div>
      </form>
      <div id="publicPost" >
      </div>
    </div>
  </div> `;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewCatalogo;

  // PUBLICAR 
  const publicar = divElement.querySelector('#compartir');
  publicar.addEventListener('click', (e) => {
    e.preventDefault()
    const textarea = divElement.querySelector('#texto').value;

    postUser(textarea).then(function (docRef) {
      divElement.querySelector('#texto').value = '';
    })
      .catch(function (error) {
        console.error("Error: ", error);
      });
  });
  // LISTAR PUBLICACIONES 
  const publicPost = divElement.querySelector('#publicPost');

  showPost().onSnapshot((querySnapshot) => {
    publicPost.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const containerPost = document.createElement('div');
      containerPost.classList.add('post');
      containerPost.innerHTML = `
                <div class="div-post">
                <div class="post-header">
                <p class="message-post">Publicado por </p><i class="fas fa-times"></i>
                </div>
                <div id="contPostOriginal">
                  <p class="text-coment">${doc.data().contenido}</p>
                  <button id="btn-delete-${doc.id}">X</button>
                  <button id="btn-update-${doc.id}">EDITAR</button>
                  </div>
                  <div id='contenedorEditar' class='hide'>
                  <textarea id='postEditar'  cols="30" rows="10"></textarea>
                  <button id="guardarEdit" >GUARDAR</button>
                  </div>
             `
      //eliminar post 
      publicPost.appendChild(containerPost)

      const eliminar = containerPost.querySelector(`#btn-delete-${doc.id}`);
      eliminar.addEventListener('click', (e) => {
        e.preventDefault();
        DeletePost(doc.id);

      })
      //EDITAR POST 
      const contPostOriginal = containerPost.querySelector('#contPostOriginal');
      const contEditar = containerPost.querySelector('#contenedorEditar');
      const editar = containerPost.querySelector(`#btn-update-${doc.id}`);
      editar.addEventListener('click', (e)=> {
        e.preventDefault();
        contPostOriginal.classList.add('hide');
        contEditar.classList.remove('hide');
        
      
/*         const textoEdit = divElement.querySelector('#texto').value;
        editPost(doc.id, textoEdit); */
      }) 


    })
  });

  //cerrar sesion
  const outSesion = divElement.querySelector('#cerrarSesion');
  outSesion.addEventListener('click', (e) => {
    e.preventDefault();
    outUser().then(() => {
      window.location.hash = '#/';
    })
  });





  return divElement;
};




