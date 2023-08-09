//Elementos
let contador = document.getElementById("contador");
const menos10 = document.getElementById("menos-10");
const menos5 = document.getElementById("menos-5");
const menos1 = document.getElementById("menos-1");
const mas1 = document.getElementById("mas-1");
const mas5 = document.getElementById("mas-5");
const mas10 = document.getElementById("mas-10");

//Funciones

let numero = 0;

//Eventos click

menos10.addEventListener("click", () => {
    numero = numero - 10;
    contador.innerText = numero;
});
menos5.addEventListener("click", () => {
    numero = numero - 5;
    contador.innerText = numero;
});
menos1.addEventListener("click", () => {
    numero--;
    contador.innerText = numero;
});
mas1.addEventListener("click", () => {
    numero++;
    contador.innerText = numero;
});
mas5.addEventListener("click", () => {
    numero = numero + 5;
    contador.innerText = numero;
});
mas10.addEventListener("click", () => {
    numero = numero + 10;
    contador.innerText = numero;
});
