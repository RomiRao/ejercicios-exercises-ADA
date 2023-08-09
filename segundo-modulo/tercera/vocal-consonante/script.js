//Vocal funcion

const esVocal = (letra) => {
    if(letra.match(/[aeiou]/)) {
        return true
    } else {
        return false
    }
}

console.log(esVocal('a')) //true
console.log(esVocal('n')) //false

const esConsonante = (letra) => {
    if (esVocal(letra) === true) {
        return false
    } else {
        return true
    }
}

console.log(esConsonante('a')) //false
console.log(esConsonante('n')) //true