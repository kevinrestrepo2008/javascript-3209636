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
