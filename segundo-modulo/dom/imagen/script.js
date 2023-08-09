const tamanioElegido = prompt('Ingrese el tamanio de la imagen a ver')
const imagen = document.getElementById('gatitos')

const cambiarTamanio = (tamanio) => {
    if(tamanio === 'chica') {
        return imagen.style.width = '200px'
    } else if (tamanio === 'mediana') {
        return imagen.style.width = '500px'
    } else if (tamanio === 'grande') {
        return imagen.style.width = '650px'
    } else {
        alert('tamanio no valido, ocupara toda su pantalla uwu')
    }
}

cambiarTamanio(tamanioElegido)