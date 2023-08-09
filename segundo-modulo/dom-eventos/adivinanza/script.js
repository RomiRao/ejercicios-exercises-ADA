const incorrectas = document.getElementsByClassName('incorrecta');
const correcta = document.getElementById('correcta');
const textoInferior = document.getElementById('respuesta');


const cambioDeColorIncorrecto = () => {
    const incorrecta1 = incorrectas[0]
    const incorrecta2 = incorrectas[1]
    incorrecta1.style.backgroundColor = 'red';
    incorrecta2.style.backgroundColor = 'red';
    correcta.style.backgroundColor = 'green';
    respuesta.innerText = 'Incorrecto!'
    respuesta.style.color = 'red';
}

const cambioDeColorCorrecto = () => {
    correcta.style.backgroundColor = 'green';
    respuesta.innerText = 'Correcto!'
    respuesta.style.color = 'green';
}

incorrectas[0].addEventListener('click', () => cambioDeColorIncorrecto());
incorrectas[1].addEventListener('click', () => cambioDeColorIncorrecto());
correcta.addEventListener('click', () => cambioDeColorCorrecto());