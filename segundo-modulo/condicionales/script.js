//Puede ver peli

const puedeVerPelicula = (edad, tieneAutorizacion) => {
    if (edad >= 15 || tieneAutorizacion == true) {
        return true
    } else {
        return false
    }
}

puedeVerPelicula(12, false) // false
puedeVerPelicula(12, true)  // true
puedeVerPelicula(16, false) // true
puedeVerPelicula(18, true)  // true

//En rango

const estaEnRango = (valor, minimo, maximo) => {
    if (valor >= minimo && valor <= maximo) {
        return true
    } else {
        return false
    }
}

estaEnRango(3, 1, 10)   // true
estaEnRango(1, 1, 10)   // true
estaEnRango(10, 1, 10)  // true
estaEnRango(12, 1, 10)  // false
estaEnRango(-3, 1, 10)  // false

//Puede avanzar

const puedeAvanzar = (color) => {
    if (color === 'verde') {
        return true
    } else if (color === 'rojo' || color === 'amarillo') {
        return false
    } else {
        return 'Error: color de semáforo inválido'
    }
}

puedeAvanzar('verde')     // true
puedeAvanzar('amarillo')  // false
puedeAvanzar('rojo')      // false
puedeAvanzar('lila')      // 'Error: color de semáforo inválido'

//esVocal

const esVocal = (letra) => {
    if (letra.match(/[aeiou]/)) {
        return true
    } else {
        return false
    }
}

esVocal('a') // true
esVocal('n') // false

//esConcenante

const esConsonante = (letra) => {
    if (esVocal(letra) === true) {
        return false
    } else {
        return true
    }
}

esConsonante('a') // false
esConsonante('n') // true

//Hora Valida

const esHoraValida = (hora) => {
    const horaPartida = hora.split(':')
    const horas = horaPartida[0]
    const minutos = horaPartida[1]
    if (horas >= 0 && horas <= 23 && minutos >= 0 && minutos <= 59) {
        return true
    }
    return false
}

esHoraValida('12:23') // true
esHoraValida('12:65') // false
esHoraValida('28:05') // false
esHoraValida('00:00') // true

//Puede renovar carnet

const puedeRenovarCarnet = (pasoTests, tieneMultasImpagas, pagoImpuestos) => {
    if (pasoTests && !tieneMultasImpagas && pagoImpuestos) {
        return true
    }
    return false
}

puedeRenovarCarnet(true, true, true)    // false
puedeRenovarCarnet(true, true, false)   // false
puedeRenovarCarnet(true, false, true)   // true
puedeRenovarCarnet(true, false, false)  // false
puedeRenovarCarnet(false, true, true)   // false
puedeRenovarCarnet(false, true, false)  // false
puedeRenovarCarnet(false, false, true)  // false
puedeRenovarCarnet(false, false, false) // false

//Puede graduarse

const puedeGraduarse = (asistencia, materiasAprobadas, tesisAprobada) => {
    return asistencia >= 75 && materiasAprobadas >= 50 && tesisAprobada
}

puedeGraduarse(80, 50, true)  // true
puedeGraduarse(80, 50, false) // false
puedeGraduarse(80, 45, true)  // false
puedeGraduarse(80, 45, false) // false
puedeGraduarse(65, 50, true)  // false
puedeGraduarse(33, 55, false) // false
puedeGraduarse(42, 45, true)  // false
puedeGraduarse(28, 45, false) // false

//esParoImpar

const esParOImpar = (numero) => {
    if (numero % 2 === 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

esParOImpar(3)  // 'impar'
esParOImpar(10) // 'par'

//Positivo o negativo

const esPositivoONegativo = (numero) => {
    if (numero >= 0) {
        return 'positivo'
    } else {
        return 'negativo'
    }
}

esPositivoONegativo(3)  // 'positivo'
esPositivoONegativo(-5) // 'negativo'

//avanzarSemaforo

const avanzarSemaforo = (colorActual) => {
    if (colorActual === 'verde') {
        return 'amarillo'
    } else if (colorActual === 'amarillo') {
        return 'rojo'
    } else if (colorActual === 'rojo') {
        return 'verde'
    }
}

avanzarSemaforo('verde')     // 'amarillo'
avanzarSemaforo('amarillo')  // 'rojo'
avanzarSemaforo('rojo')      // 'verde'

//obtener dia mes

const obtenerDiasMes = (mes) => {
    switch (mes) {
        case 'enero':
            return 31;
            break;
        case 'febrero':
            return 29;
            break;
        case 'marzo':
            return 31;
            break;
        case 'abril':
            return 30;
            break;
        case 'mayo':
            return 31;
            break;
        case 'junio':
            return 30;
            break;
        case 'julio':
            return 31;
            break;
        case 'agosto':
            return 30;
            break;
        case 'septiempre':
            return 31;
            break;
        case 'octubre':
            return 30;
            break;
        case 'noviembre':
            return 31;
            break;
        case 'diciembre':
            return 31;
            break;
        default:
            return 'Ingrese mes valido';
    }
}

obtenerDiasMes("diciembre") // 31
obtenerDiasMes("febrero")   // 29

//obtener generacion

const obtenerGeneracion = (anioNacimiento) => {
    if (anioNacimiento >= 1949 && anioNacimiento <= 1968) {
        return 'Sos un Baby boomer'
    } else if (anioNacimiento >= 1969 && anioNacimiento <= 1980) {
        return 'Sos Generacion X'
    } else if (anioNacimiento >= 1981 && anioNacimiento <= 1993) {
        return 'Sos un Millenial'
    } else if (anioNacimiento >= 1994 && anioNacimiento <= 2010) {
        return 'Sos Generacion Z'
    }
    return false
}

obtenerGeneracion(1996)
obtenerGeneracion(1991)
obtenerGeneracion(1800)
obtenerGeneracion(1960)
obtenerGeneracion(1970)

//obtener Sensacion

const obtenerSensacion = (temperatura) => {
    if (temperatura < 0) {
        return '¡Está helando!'
    } else if (temperatura >= 0 && temperatura < 15) {
        return '¡Hace frío!'
    } else if (temperatura >= 15 && temperatura < 25) {
        return 'Está lindo'
    } else if (temperatura >= 25 && temperatura < 30) {
        return 'Hace calor'
    } else if (temperatura >= 30) {
        return '¡Hace mucho calor!'
    }
}

obtenerSensacion(33) // "¡Hace mucho calor!"

//obtener nota

const obtenerNota = (puntaje) => {
    if (puntaje < 6) {
        return 'Desaprobado'
    } else if (puntaje >= 6 && puntaje < 7) {
        return 'Regular'
    } else if (puntaje >= 7 && puntaje < 8) {
        return 'Bueno'
    } else if (puntaje >= 8 && puntaje < 10) {
        return 'Muy bueno'
    } else if (puntaje === 10) {
        return 'Excelente'
    } else {
        return 'Puntaje inválido'
    }
}

obtenerNota(7)    // "Bueno"
obtenerNota(9.6)  // "Excelente"
obtenerNota(12)   // "Puntaje inválido"

//Piedra papel o tijera

const jugarPiedraPapelTijera = (a, b) => {
    if (a === "piedra" && b === "tijera" || a === "papel" && b === "piedra" || a === "tijera" && b === "papel") {
        return `¡Ganó ${a}!`
    }
    if (b === "piedra" && a === "tijera" || b === "papel" && a === "piedra" || b === "tijera" && a === "papel") {
        return `¡Ganó ${b}!`
    }
    if (a === b) {
        return '¡Empate!'
    }
    return false
}

jugarPiedraPapelTijera('tijera', 'piedra')  // ¡Ganó piedra!
jugarPiedraPapelTijera('piedra', 'tijera')  // ¡Ganó piedra!
jugarPiedraPapelTijera('papel', 'piedra')   // ¡Ganó papel!
jugarPiedraPapelTijera('piedra', 'papel')   // ¡Ganó papel!
jugarPiedraPapelTijera('papel', 'tijera')   // ¡Ganó tijera!
jugarPiedraPapelTijera('tijera', 'papel')   // ¡Ganó tijera!
jugarPiedraPapelTijera('piedra', 'piedra')  // ¡Empate!
jugarPiedraPapelTijera('papel', 'papel')    // ¡Empate!
jugarPiedraPapelTijera('tijera', 'tijera')  // ¡Empate!