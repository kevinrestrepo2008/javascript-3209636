 
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

















/* carrusel */
// Variables globales del carrusel
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;
let autoPlayInterval;

// Función para mostrar un slide específico
function showSlide(index) {
    // Remover clase active de todos los slides e indicadores
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Añadir clase active al slide e indicador actual
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
    
    currentSlide = index;
}

// Función para cambiar de slide (botones anterior/siguiente)
function changeSlide(direction) {
    currentSlide += direction;
    
    // Loop infinito: si llega al final, vuelve al inicio
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    
    showSlide(currentSlide);
}

// Función para ir a un slide específico (indicadores)
function goToSlide(index) {
    showSlide(index);
}

// Auto-play: cambiar slide cada 5 segundos
function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        changeSlide(1);
    }, 2000); // 5000ms = 5 segundos
}

// Detener auto-play
function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

// Iniciar auto-play cuando carga la página
document.addEventListener('DOMContentLoaded', () => {
    startAutoPlay();
    
    // Pausar auto-play cuando el usuario pasa el mouse sobre el carrusel
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);
    }
});

// Control con teclado (flechas izquierda/derecha)
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (e.key === 'ArrowRight') {
        changeSlide(1);
    }
});


