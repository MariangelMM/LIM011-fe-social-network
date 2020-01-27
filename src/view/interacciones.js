import {
  cerrarSesion, creaPostUsuario, PintaPost, borrarPost, editarTextPost, currentUser,
} from '../firebase/controladorfirebase.js';

export const INTERACCIONES = (user) => {
  const viewCatalogo = ` 
  <body>
  <header>
    <nav>
      <p>FOOD BOOK</p>
      <menu id="cerrarSesion">Cerrar sesión</i>
    </nav>
  </header>


  <main class="publicaciones">
    <section class="seccion-perfil">
      <img class="portada" src="../imagenes/bannerloguito.png" alt="foto de portada">
      <div class="info-user">
        <img id="fotoPerfil" class="foto-perfil" src="${user.photoURL}" alt="foto de perfil">
        <p class="fondo" id="nombreUsuarioDestok">${user.name}</p>
      </div>
    </section>

    <section class="seccion-publicacion">
      <form class="form">
        <textarea class="mensaje" id="texto" placeholder="¿Qué quieres compartir?" cols="30" rows="4"></textarea>
        <div class="btn-enviar">
          <button class="btn-compartir" id="compartir">Compartir</button>
        </div>
        <select class="btn-tipopost" id="tipoPost">
          <option value='publico'>Público</option>
          <option value='privado'>Privado</option>
        </select>
      </form>
      <div id="publicPost">
      </div>
    </section>
  </main>
</body> `;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewCatalogo;

  // PUBLICAR
  const publicar = divElement.querySelector('#compartir');
  publicar.addEventListener('click', (e) => {
    e.preventDefault();
    const textarea = divElement.querySelector('#texto').value;
    const tipoPost = divElement.querySelector('#tipoPost').value;
    const datausuario = currentUser();
    creaPostUsuario(textarea, tipoPost, datausuario).then(() => {
      divElement.querySelector('#texto').value = '';
    })
      .catch(() => {
      });
  });
  // LISTAR PUBLICACIONES
  const publicPost = divElement.querySelector('#publicPost');
  const fnParaConsolearLaData = (data) => {
    publicPost.innerHTML = '';
    data.forEach((doc) => {
      const containerPost = document.createElement('div');
      containerPost.classList.add('post');
      containerPost.innerHTML = `
       <section class="form">
           <div class="cabecera-post">
             <p class="user-post">Publicado por ${doc.name}   ${doc.fecha} </p>
             <span id="btn-delete-${doc.id}"><img class="btn-eliminar" src="./imagenes/eliminar.png"></span>
           </div>
           <div id="contPostOriginal">
             <p id="post" class="message-public">${doc.contenido}</p>
           </div>
           <span id="btn-update-${doc.id}"><img class="btn-editar" src="./imagenes/editar.png"></span>
           <div id='contenedorEditar' class='hide'>
             <textarea id='postEditar'  cols="30" rows="10"></textarea>
             <span id="btn-update-save-${doc.id}"><img class="btn-guardar" src="./imagenes/guardar.png"></span>
           </div>
       </section>
             `;

      // eliminar post
      publicPost.appendChild(containerPost);

      const eliminar = containerPost.querySelector(`#btn-delete-${doc.id}`);
      eliminar.addEventListener('click', (e) => {
        e.preventDefault();
        borrarPost(doc.id);
      });
      // EDITAR POST
      const contPostOriginal = containerPost.querySelector('#contPostOriginal');
      const contEditar = containerPost.querySelector('#contenedorEditar');
      const editar = containerPost.querySelector(`#btn-update-${doc.id}`);

      editar.addEventListener('click', (e) => {
        e.preventDefault();
        contPostOriginal.classList.add('hide');
        contEditar.classList.remove('hide');
        containerPost.querySelector('#postEditar').value = doc.contenido;


        const guardar = containerPost.querySelector(`#btn-update-save-${doc.id}`);

        guardar.addEventListener('click', () => {
          e.preventDefault();
          const textoEditado = containerPost.querySelector('#postEditar').value;

          editarTextPost(doc.id, textoEditado);
        });
      });
    });
  };
  PintaPost(fnParaConsolearLaData);

  // cerrar sesion
  const outSesion = divElement.querySelector('#cerrarSesion');
  outSesion.addEventListener('click', (e) => {
    e.preventDefault();
    cerrarSesion().then(() => {
      window.location.hash = '#/';
    });
  });


  return divElement;
};
