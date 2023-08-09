const progreso = document.getElementById('progreso');
let porcentaje = document.querySelector('#porcentaje');
const disminuir = document.querySelector('#disminuir');
const aumentar = document.querySelector('#aumentar');

const botonDisminuir = (num) => {
    if(num >= 0 && num < 100) {
    let numero = Number(num) - 10;
    progreso.style.width = `${numero}px`
    porcentaje.innerHTML = numero
    console.log(numero)
    }
}

const botonAumentar = (num) => {
    if(num >= 0 && num < 100) {
    let numero = Number(num) + 10;
    progreso.style.width = `${numero}px`
    porcentaje.innerHTML = numero
    }
}

disminuir.addEventListener('click', () => botonDisminuir(porcentaje))

aumentar.addEventListener('click', () => botonAumentar(porcentaje.innerHTML))