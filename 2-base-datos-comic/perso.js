import { comic } from "./js/bd.js";

const param = new URLSearchParams(window.location.search);

const id = parseInt(param.get("id"));

const personaje = comic.personajes.find(p => p.id == id);

const contenedor = document.querySelector(".per-pac");

contenedor.innerHTML = `

 <h1>${personaje.nombre}</h1>
<p class="texto">${personaje.descripcion}
</p>

    <img  class="escena-img" src="${personaje.imagen}" alt="">





`
