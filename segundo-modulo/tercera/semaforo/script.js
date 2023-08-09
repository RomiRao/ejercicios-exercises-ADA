// const puedeAvanzar = (color) => {
//     if(color.toLowerCase() === 'verde') {
//         return true
//     } else if (color.toLowerCase() === 'rojo' || color.toLowerCase() === 'amarillo') {
//         return false
//     }
//     return 'Error'
// }

let getColor = prompt('Que color muestra el semaforo?');

const puedeAvanzar = (color) => {
    if(color.toLowerCase() === 'verde') {
        return alert('Puede pasar');
    } else if (color.toLowerCase() === 'rojo' || color.toLowerCase() === 'amarillo') {
        return alert('No puede pasar');
    }
        return alert(`Error: ${color} no es un color valido. Ingrese nuevamente el valor.`);
}

puedeAvanzar(getColor);