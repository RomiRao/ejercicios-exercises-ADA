const continente = prompt('Ingrese continente: america, asia o europa');
const america = document.getElementsByClassName('america');
const asia = document.getElementsByClassName('asia');
const europa = document.getElementsByClassName('europa');

const continenteElegido = (cont) => {
    if(cont == 'america') {
        america[0].style.color = 'red'
        america[1].style.color = 'red'
        america[2].style.color = 'red'
    } else if(cont == 'asia') {
        asia[0].style.color = 'red'
        asia[1].style.color = 'red'
        asia[2].style.color = 'red'
    } else if(cont == 'europa'){
        europa[0].style.color = 'red'
        europa[1].style.color = 'red'
        europa[2].style.color = 'red'
    } else {
        alert('ingrese continente valido')
    }
}

continenteElegido(continente)