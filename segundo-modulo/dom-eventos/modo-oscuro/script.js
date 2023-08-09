const body = document.getElementById('body');
const mainContainer = document.getElementById('main-container');
const boton = document.getElementById('modo-oscuro');
const icono = document.getElementById('icono')
const butonSpan = document.getElementById('button-span')

const modoOscuro = () => {
body.classList.toggle('modo-oscuro-body');
mainContainer.classList.toggle('modo-oscuro-main');
boton.classList.toggle('modo-oscuro-boton');

icono.classList.toggle('fa-sun');
icono.classList.toggle('fa-moon');

if (butonSpan.innerText == 'Modo Oscuro') {
    butonSpan.innerText = 'Modo Claro'
} else {
    butonSpan.innerText = 'Modo Oscuro'
}

}

boton.addEventListener('click', () => modoOscuro());

