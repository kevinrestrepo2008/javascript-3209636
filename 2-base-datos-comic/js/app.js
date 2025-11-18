const bannerpk = document.querySelector(".hero")
const listaCapitulos = document.querySelector (".section")
bannerpk.style.backgroundImage = `url(${comic.portada})`
console.log (bannerpk)

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
            miCard.classList.add("tarjeta-cap")
            miCard.innerHTML = `
            <img src="${escenas.imagen}" />
            <p>${escenas.nombre}</p>
            `
            listaCapitulos.appendChild(miCard)
            
            console.log (escenas.nombre)
        
          });