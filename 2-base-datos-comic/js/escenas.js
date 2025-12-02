import { comic } from "./bd.js";

const parama = new URLSearchParams(window.location.search);

const id = parseInt(parama.get("id"));

const escena = comic.escenas.find(p => p.id == id);

const contenedor = document.querySelector(".esc-pa");

contenedor.innerHTML = `

 <h1>${escena.nombre}</h1>
<p class="des-esc"${escena.descripcion}</p>
    <video controls width="600">
        <source src="./img/video1.mp4" type="video/mp4">
       
    </video>
    <img src="${escena.imagen}" alt="">

    `