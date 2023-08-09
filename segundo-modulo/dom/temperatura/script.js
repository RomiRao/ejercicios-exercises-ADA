const temperatura = prompt('Ingrese la temperatura en grados celcius')
const titulo = document.getElementById('temperatura')

const colorTemperatura = (temp) => {
    titulo.innerText = `Temperatura actual: ${temp}`
    if(temp < 0) {
        titulo.style.color = 'blue';
    } else if (temp >= 0 && temp < 15) {
        titulo.style.color = 'lightblue';
    } else if (temp >= 15 && temp < 25) {
        titulo.style.color = 'green';
    } else if (temp >= 25 && temp < 30) {
        titulo.style.color = 'yellow';
    } else if (temp >= 30 && temp < 35) {
        titulo.style.color = 'orange';
    } else if (temp > 35) {
        titulo.style.color = 'red';
    } else {
        titulo.innerText = 'dale pone el numerito';
        return false
    }
}

colorTemperatura(temperatura)