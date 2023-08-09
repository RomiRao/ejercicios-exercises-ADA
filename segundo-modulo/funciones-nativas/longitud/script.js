//.lenght

console.log('Ej.Largo');

const tienenMismaLongitud = (a, b) => {
    if (a.length === b.length) {
        return true
    }
    return false
}

console.log(tienenMismaLongitud('javascript', 'java')) // false
console.log(tienenMismaLongitud('manzana', 'cerveza')) // true

//ultimo caracter

console.log('Ej Ultimo caracter')

const esUltimoCaracter = (palabra, caracter) => {
    let ultimo = palabra.slice(-1) 
    if (ultimo == caracter) {
        return true
    }
    return false
};

console.log(esUltimoCaracter('lovelace', 'e')) // true
console.log(esUltimoCaracter('lovelace', 'f')) // false

//contrasenia

console.log('Ej.Contrasenia');

const esContraseniaValida = (contrasenia) => {
    if (contrasenia.length >= 8) {
        return true
    }
    return false
};

console.log(esContraseniaValida('contraseniaMuySegura')) // true
console.log(esContraseniaValida('abc123')) // false

//son iguales

console.log('Ej.Son Iguales');

const sonIguales = (a, b) => {
    if (a.toLowerCase() === b.toLowerCase()) {
        return true
    }
    return false
}

console.log(sonIguales('javascript', 'JavaScript')) // true
console.log(sonIguales('AdA LoVeLaCe', 'Ada Lovelace')) // true
console.log(sonIguales('NO ESTOY GRITANDO', 'ESTOY GRITANDO')) // false

//Contar palabras

console.log('Ej.Contar Palabras');

const contarPalabras = (str) => {
    console.log(str.split(' ').length)
}

contarPalabras('javascript') // 1
contarPalabras('ada lovelace')// 2
contarPalabras('si debuggear es el proceso de remover bugs, programar es el proceso de agregarlos') // 14

//Burlarse

console.log('Ej Burlarse')

const burlarse = (str) => {
    console.log(str.replaceAll(/[aeiou]/g, 'i'))
}

burlarse('programar es dificil') // 'prigimir is dificil'

//fraccionmayor  a uno

console.log('Ej. Fraccion Mayor a uno')

const esFraccionMayorAUno = (fraccion) => {
    const numeros = Number(fraccion.split('/'))
    const resultado = numeros[0] / numeros[1]
    return resultado > 1 ? true : false
}

console.log(esFraccionMayorAUno('1/2')) // false
console.log(esFraccionMayorAUno('2/2')) // false
console.log(esFraccionMayorAUno('4/2')) // true
