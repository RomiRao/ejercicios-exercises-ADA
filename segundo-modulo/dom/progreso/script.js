const progreso = prompt('Ingrese porcentaje')
const barra = document.getElementById('progreso')

const indicadorProgreso = (num) => {
    barra.style.width = `${num}%`
    barra.style.height = '30px'
}

indicadorProgreso(progreso)