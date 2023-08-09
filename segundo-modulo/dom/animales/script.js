const animalito = prompt('Elige uno de estos tres animales: gatito, perrito o chanchito');
const perrito = document.getElementById('perrito');
const gatito = document.getElementById('gatito');
const chanchito = document.getElementById('chanchito');

const animalitoElegido = (animal) => {
    if(animal == 'perrito'){
        perrito.style.display = 'block';
    } else if(animal == 'gatito'){
        gatito.style.display = 'block';
    } else if(animal == 'chanchito'){
        chanchito.style.display = 'block';
    } else {
        alert('Ingrese una de las tres opciones')
    }
}

animalitoElegido(animalito)