
    import { outUser } from '../firebase/controladorfirebase.js'

    export const INTERACCIONES = () => {
      const db = firebase.firestore();
      const viewCatalogo = `
      <header class="header-movil">
    <menu id="menu-movil" class="menu-movil"><i class="fas fa-bars fa-2x bars"></i></menu>
    <nav id="enlaces" class="animationOne">
      <p class="text">Mi perfil</p>
      <p class="text">Salir</p>
    </nav>
    <h1 class="logo-movil">PET LOVERS</h1>
  </header>
  <div class="list-menu-destok">
  <menu id="menu-movil-destok"><span id="nameUserHeader">Nombre de Mascota</span><i id="icon-down" class="fas fa-caret-down"></i></menu>
  <nav id="enlaces-destok" class="animationOne">
    <p class="text">Mi perfil</p>
    <p class="text">Salir</p>
  </nav>
  <h1 class="logo-destok">PET LOVERS</h1>
  <menu id="out-menu-destok">Cerrar sesión <i class="fas fa-sign-out-alt"></i></menu>
  </div>
  <main id="main-muro">
    <section class="flex section-info-muro">
      <figure class="figure-photo">
        <img id="photoProfile" class="photo" src="img/fondo-pet.jpg" alt="foto de perfil">
      </figure>
      <div>
        <p id="nameUser" class="name-user">Nombre de Mascota</p>
        <p class="text-grey">-- Perrito --</p>
      </div>
    </section>
    <section class="section-destok">
      <figure class="fig-portada">
        <img class="photo-info-muro" src="img/portada.jpg" alt="foto de portada">
      </figure>
      <div class="div-info-muro">
      <figure class="figure-photo">
        <img id="photoProfileDestok" class="photo" src="img/fondo-pet.jpg" alt="foto de perfil">
      </figure>
      <div>
        <p id="nameUserDestok" class="name-user">Nombre de Mascota</p>
        <p class="text-grey">-- Perrito --</p>
      </div>
      </div>
    </section>
    <div id="modal" class="modal reset">
    <figure id="flex" class="reset">
    <span id="close" type="button">x</span>
        <img id="contenido" src="" class="reset" alt="foto de perfil">
        </figure>
  </div>
    <section class="section-publics-muro">
      <form class="form">
        <textarea id = "texto" placeholder="¿Qué quieres compartir?" name="" id="" cols="37" rows="4"></textarea>
        <div class="btn-coment">
            <button class="btn-img"><i class="far fa-image icons-white"></i></button>
            <button class="btn-share" id = "compartir">Compartir</button>
        </div>
      </form>
      <div id="comentarios">
      </div>
    </section>
    <div id="perfil">
  </main>
  <script type="module" src="animation.js"></script>
  
    
      `;
    
      const divElement = document.createElement('div');
      divElement.innerHTML = viewCatalogo;
      // PUBLICAR 
      const publicar = divElement.querySelector('#compartir');
     publicar.addEventListener('click', (e) => {
         e.preventDefault()
         const textarea = divElement.querySelector('#texto').value;
         console.log(textarea);
    
       db.collection("publicaciones").add({
        contenido: textarea,
       })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            divElement.querySelector('#texto').value = '';
         })
         .catch(function(error) {
            console.error("Error: ", error);
         });
    });
    // LISTAR PUBLICACIONES 
    const comentarios = divElement.querySelector('#comentarios');
     db.collection("publicaciones").onSnapshot((querySnapshot) => {
      comentarios.innerHTML = '';
       querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().contenido}`);
            comentarios.innerHTML += `
              <div class = "comment">
                <div class="title-note">
                <p>Publicado por Jean Cedron - Comunal</p><i class="fas fa-times"></i>
                </div>
                  <p class="text-coment">${doc.data().contenido}</p>
               
              </div>
             `
         });
    });
    
    
      const outSesion = divElement.querySelector('#out-menu-destok');
      outSesion.addEventListener('click', (e)=> {
        e.preventDefault();
        outUser().then(() => {
          window.location.hash = '#/';
        })
      });


      return divElement;
    };




    