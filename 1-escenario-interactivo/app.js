const zombie1 = document.querySelectorAll('.zom');
const guisante = document.querySelector('.guisante');
const score = document.querySelector('.score2');
let i = 0;


console.log(zombie1);
console.log(guisante);


zombie1.forEach(item => {

  /*   console.log("elemento: ", item); */
    

item.addEventListener("click", () => {
item.classList.add("saltar")

i++
score.textContent = `score = ${i}`


})
item.addEventListener("animationend", () => {
    item.style.display = "none"
}, {once: true})




})

/* juego2 */

const pac = document.querySelectorAll('.pac');
const fantasma = document.querySelector('.fantasma');
const score3 = document.querySelector('.score3');
let l = 0;


console.log(pac);
console.log(fantasma);


pac.forEach(item => {

  /*   console.log("elemento: ", item); */
    

item.addEventListener("click", () => {
item.classList.add("saltar")

l++
score3.textContent = `score = ${l}`


})
item.addEventListener("animationend", () => {
    item.style.display = "none"
}, {once: true})




})


/* juego3 */

const angry = document.querySelectorAll('.angry');
const pajaro = document.querySelector('.pajaro');
const score4 = document.querySelector('.score4');
let k = 0;


console.log(angry);
console.log(pajaro);


angry.forEach(item => {

  /*   console.log("elemento: ", item); */
    

item.addEventListener("click", () => {
item.classList.add("saltar")

k++
score4.textContent = `score = ${k}`


})
item.addEventListener("animationend", () => {
    item.style.display = "none"
}, {once: true})




})
