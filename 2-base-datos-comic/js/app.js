 
import { comic } from "./bd.js";

const bannerpk = document.querySelector(".panel")
const listaCapitulos = document.querySelector(".personajes")
bannerpk.style.backgroundImage = `url(${comic.portada})`
console.log(bannerpk)

document.querySelector('.panel-conte h1').textContent = comic.nombreComic;

/*  aqui vamos a mostrar las tarjetas de escenas  */

/* console.log (comic.escenas) */

comic.escenas.forEach(escenas => {
  const miCard = document.createElement("div")
  miCard.classList.add("escena")
  miCard.innerHTML = `
  <a class="link"  href="escenaspag.html?id=${escenas.id}">
            <h1>${escenas.nombre}</h1>
                    <img src="${escenas.imagen}" class="personajes-img" alt="">

</a>

            `
  listaCapitulos.appendChild(miCard)

  console.log(escenas.nombre)

});


const section1 = document.querySelector(".section1")
const listaPersonajes = document.createElement("div")
listaPersonajes.classList.add("personajes1")
section1.appendChild(listaPersonajes)

comic.personajes.forEach(per => {

  const micard = document.createElement("div")
  micard.classList.add("personajes1")
  micard.innerHTML = `
  <a class="link" href="persopag.html?id=${per.id}">
            <h1>${per.nombre}</h1>
                    <img src="${per.imagen}" class="personajes1-img" alt="">
</a>

            `
  listaPersonajes.appendChild(micard)
});



