const cancion1 = prompt('Ingrese cancion');
const cancion2 = prompt('Ingrese cancion');
const cancion3 = prompt('Ingrese cancion');
const cancion4 = prompt('Ingrese cancion');
const cancion5 = prompt('Ingrese cancion');
const item1 = document.getElementById('cancion1')
const item2 = document.getElementById('cancion2')
const item3 = document.getElementById('cancion3')
const item4 = document.getElementById('cancion4')
const item5 = document.getElementById('cancion5')

const listado = (uno, dos, tres, cuatro, cinco) => {
    item1.innerText = uno;
    item2.innerText = dos;
    item3.innerText = tres;
    item4.innerText = cuatro;
    item5.innerText = cinco;
}


listado(cancion1, cancion2, cancion3, cancion4, cancion5);
