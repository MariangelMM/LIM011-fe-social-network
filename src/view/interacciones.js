

export const INTERACCIONES = () => {
   const db = firebase.firestore();


  const viewHome = `
    <img class= "" src="imagenes/bannerloguito.png" alt="">
    <section>
      <form>
        <textarea id="texto" placeholder="¿Que estas pensando"></textarea>
        <div class="compartir">
            <button class="enviar" id="enviar">Enviar</button>
        </div>
      </form>
<table>
<tbody id="tabla"></tbody>
</table>

    </section> `;


  const divElem = document.createElement('div');
  divElem.innerHTML = viewHome;
//PUBLICAR
  const publicar = divElem.querySelector('#enviar');
  publicar.addEventListener('click', (e) => {
    e.preventDefault()
    const textarea = divElem.querySelector('#texto').value;
    console.log(textarea);

    db.collection('publicaciones').add({
      post: textarea,
    })

      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        divElem.querySelector('#texto').value = '';
      })
      .catch(function (error) {
        console.log(error)
      });
  });

  //LISTA DE PUBLICACIONES
const listaPublicaciones = divElem.querySelector('#tabla');
db.collection('publicaciones').onSnapshot((querySnapshot) =>{
  listaPublicaciones.innerHTML = '';
  querySnapshot.forEach((doc) => {
    tabla.innerHTML += `
    <td scope=row> ${doc.id}</td>
    <td> ${doc.data().post}</td>
    `
  })
})


  return divElem;
};