
import { outUser, postUser , showPost, DeletePost} from '../firebase/controladorfirebase.js'

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
      <div id="comentarios" >
      </div>
    </div>
  </div> `;

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
        <div class="div-post">
        <div class="post-header">
              <p class="message-post">Publicado por </p>
                <p class="text-coment">${doc.data().contenido}</p>
                <button class="btn-delete"  id="btn-delete-${doc.id}">X</button>
            </div>
            </div>
             `
             //eliminar post 
             const eliminar = document.querySelector(`#btn-delete-${doc.id}`)
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




