const numeroFinal = document.getElementById("numero");

let eleccion = prompt("Desea encontrar el mayor o el menor");
let cantidad = prompt("Cantidad");

const arrayNumeros = [];

const agregarNumeros = () => {
    for (let i = 0; i < cantidad; i++) {
        let numero = prompt("Numero");
        arrayNumeros.push(numero);
        arrayNumeros.sort((a, b) => a - b);
    }
    elegirNumero(eleccion);
};

const elegirNumero = (eleccion) => {
    if (eleccion.toUpperCase() === "MAYOR") {
        arrayNumeros.reverse();
    }
    numeroFinal.innerText = arrayNumeros[0];
};

agregarNumeros();
