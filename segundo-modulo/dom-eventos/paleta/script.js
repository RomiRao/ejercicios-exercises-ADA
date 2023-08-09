let fondito = document.getElementById('fondito');
const color1 = document.getElementById('color-1');
const color2 = document.getElementById('color-2');
const color3 = document.getElementById('color-3');

color1.addEventListener('click', () => {
    fondito.style.backgroundColor = 'lightcoral';
})
color2.addEventListener('click', () => {
    fondito.style.backgroundColor = 'lightgreen';
})
color3.addEventListener('click', () => {
    fondito.style.backgroundColor = 'lightseagreen';
})