
import { outUser, postUser , showPost, DeletePost} from '../firebase/controladorfirebase.js'

export const INTERACCIONES = (user, posts) => {
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
    <div id="comentarios" class="coment"></div>
    </form>
    </nav> `;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewCatalogo;

  // PUBLICAR 
  const publicar = divElement.querySelector('#compartir');
  console.log(document)
  publicar.addEventListener('click', (e) => {
    e.preventDefault()

    const textarea = divElement.querySelector('#texto').value;   

      postUser(textarea).then(function (docRef) {
        console.log("nombre del usuario", docRef.user);
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
       
        comentarios.innerHTML += `
              <div class = "comment">
                <div class="title-note">
                <p>Publicado por </p><i class="fas fa-times"></i>
                </div>
                  <p class="text-coment">${doc.data().contenido}</p>
                  <button id="btn-delete-${doc.id}">X</button>
              </div>
             `
             //eliminar post 
             const eliminar = divElement.querySelector(`#btn-delete-${doc.id}`)
             eliminar.addEventListener('click', (e) => {
              e.preventDefault();
              const deleteNoteOnClick = (doc) => DeletePost(doc.id);
              deleteNoteOnClick(doc);
             })
             
   })
    });
    


  const outSesion = divElement.querySelector('#cerrarSesion');
  outSesion.addEventListener('click', (e) => {
    e.preventDefault();
    outUser().then(() => {
      window.location.hash = '#/';
    })
  });

    
   
 
  return divElement;
};




