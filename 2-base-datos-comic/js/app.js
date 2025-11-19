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

            <h1>${escenas.nombre}</h1>
                    <img src="${escenas.imagen}" class="character-img" alt="">



            `
  listaCapitulos.appendChild(miCard)

  console.log(escenas.nombre)

});
