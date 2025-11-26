const bannerpk = document.querySelector(".hero")
const listaCapitulos = document.querySelector(".character-list")
bannerpk.style.backgroundImage = `url(${comic.portada})`
console.log(bannerpk)

bannerpk.innerHTML = `
<div class="hero-container">
                <h1>${comic.nombreComic}</h1>
                <div class="hero-buttons">
                    <button class="play-btn">Reproducir</button>
                    <button class="trailer-btn">Trailer</button>
                    
                </div>
           `

/*  aqui vamos a mostrar las tarjetas de escenas  */

/* console.log (comic.escenas) */

comic.escenas.forEach(escenas => {
  const miCard = document.createElement("div")
  miCard.classList.add("character")
  miCard.innerHTML = `
  <a class="link"  href="escenaspag.html?id=${escenas.id}">
            <h1>${escenas.nombre}</h1>
                    <img src="${escenas.imagen}" class="character-img" alt="">

</a>

            `
  listaCapitulos.appendChild(miCard)

  console.log(escenas.nombre)

});


const perso = document.querySelector(".section1")

comic.personajes.forEach(per => {
  
  const micard = document.createElement("div")
  micard.classList.add("character-img1")
  micard.innerHTML = `
  <a class="character-list1 link" href="persopag.html?id=${per.id}">
<div class="character">
                    <h1>${per.nombre}</h1>
                    <img class="character-img1" src="${per.imagen}" alt="">
                </div>
                </a>


  `
  perso.appendChild(micard)
});



