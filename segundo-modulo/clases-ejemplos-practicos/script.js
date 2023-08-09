
// Condiciones

// ! es un operador de negacion que se pone delante de la variable. (!condicion) es como escribir //(condicion === false) 

// Condicion => true / false

const condicion = true

if (condicion) {
  // bloque de codigo que se ejecuta si mi condicion se cumple
    console.log("Entre en el if, mi condicion se cumplio")
} else {
  // unreacheable
    console.log("Mi condicion no se cumplio")
}

const numero1 = 10
const numero2 = "10"

// ==, ===, >, <, >=, <=, !, !=, !==

console.log(numero1 == numero2) // true, porque no importa el tipo de dato, tienen el mismo valor
console.log(numero1 === numero2) // false porque deberian tener el mismo tipo de dato

// Un string vacio sin caracteres es igual a 0 porque su valor es tipo falsy
// Hay valores que son trythy o falsy

const nombre = 'Pilar'
const vacio = ''

if (vacio) {
    console.log('entre en el if')
} else {
    console.log('entre en el else')
}

// condicion ? pasa esto : pasa esto otro

