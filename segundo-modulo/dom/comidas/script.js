const eleccion = prompt('Que desea ver, comida bebida o postre?')
const comidas = document.getElementById('comidas');
const bebidas = document.getElementById('bebidas');
const postres = document.getElementById('postres');

const seccion = (opcion) => {
    if(opcion == 'comida'){
        comidas.style.display = "flex";
    } else if(opcion == 'bebida'){
        bebidas.style.display = "flex";
    } else if(opcion == 'postre'){
        postres.style.display = "flex";
    } else {
        alert('opcion invalida');
    }
};

seccion(eleccion);