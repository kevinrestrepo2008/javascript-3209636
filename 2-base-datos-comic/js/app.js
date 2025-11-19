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
          
            <h1>${escenas.nombre}Capitulo 2</h1>
                    <img ${escenas.imagen} class="character-img" src="./img/capitulo2.png" alt="">
                      <img ${escenas.imagen} class="character-img" src="./img/capitulo1.png" alt="">


            `
  listaCapitulos.appendChild(miCard)

  console.log(escenas.nombre)

});