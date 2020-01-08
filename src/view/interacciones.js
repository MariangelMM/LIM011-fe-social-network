
import { outUser, postUser, showPost, DeletePost, editPost } from '../firebase/controladorfirebase.js'

export const INTERACCIONES = (user) => {
  const viewCatalogo = `  
    <header class="encabezado">
    <span id="nombreUsuario">${user.name}</span>
    <p>FOOD BOOK</p>
    <menu id="cerrarSesion">Cerrar sesión</i></menu>
    </header>
    <nav class="contenedor flex">
    <img class="" src="${user.photoUrl}" alt="foto de portada">
    <img id="fotoPerfil" class="photo" src="${user.photoUrl}" alt="foto de perfil">
    <p id="nombreUsuarioDestok" class="name-user">${user.name}</p>
    <section class="section-publics-muro">
    <form class="form">
    <textarea id="texto" placeholder="¿Qué quieres compartir?" name="" id="" cols="37" rows="4"></textarea>
    <div class="btn-coment">
    <button class="btn-share" id="compartir">Compartir</button>
    </div>
    <div id="publicPost"></div>
    </form>
    </nav> `;

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
                <div class="title-note">
                <p>Publicado por </p><i class="fas fa-times"></i>
                </div>
                <div id="postOriginal">
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
      const contEditar = containerPost.querySelector('#contenedorEditar');
      const editar = containerPost.querySelector(`#btn-update-${doc.id}`);
      editar.addEventListener('click', (e)=> {
        e.preventDefault();
       
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




