// Capitalizar

console.log('Ej Capitalizar')

const capitalizar = (str) => {
    console.log(str.charAt(0).toUpperCase() + str.slice(1))
}

capitalizar('lovelace') // 'Lovelace'
capitalizar('había una vez...') // 'Había una vez...'

//Hacker Speak

console.log('Ej. Hacker Speak')

const aHackerSpeak = (str) => {
    console.log(str.replace(/[aA]/g, '4').replace(/[eE]/g, '3').replace(/[iI]/g, '1').replace(/[sS]/g, '5').replace(/[oO]/g, '0'))
}

// - Las i se transforman en 1
// - Las e se transforman en 3
// - Las a se transforman en 4
// - Las s se transforman en 5
// - Las 0 se transforman en 0

aHackerSpeak('javascript') // 'j4v45cr1pt'
aHackerSpeak('soy una hacker') // '50y un4 h4ck3r'
aHackerSpeak('ADA LOVELACE') // '4D4 L0V3L4C3'

//Primera Oracion

console.log('ej. Primera Oracion')

const obtenerPrimeraOracion = (str) => {
    console.log(str.split('.')[0])
}

obtenerPrimeraOracion('A mí no me preguntes, sólo soy una oración') // 'A mí no me preguntes, sólo soy una oración'
obtenerPrimeraOracion('Tengo varias oraciones. Esta es la segunda. Y esta es la tercera.') // 'Tengo varias oraciones.'

//Ocultar contrasenia

console.log('Ej. Ocultar contrasenia')

const ocultarContrasenia = (contrasenia) => {
    const str = contrasenia.toString();
    const replaced = str.replace(/[0-9]/g, '*');
console.log(replaced); 
}

ocultarContrasenia(123456) // '******'
ocultarContrasenia(111222333) // '*********'

//Espaciar Caracteres

console.log('Ej espaciar los caracteres')

const espaciarCaracteres = (str) => {
    console.log(str.split("").join(" "))
}

espaciarCaracteres('javascript') // 'j a v a s c r i p t'
espaciarCaracteres('ada lovelace') // 'a d a l o v e l a c e'

// remover Vocales

const removerVocales = (str) => {
    return str.replace(/[aeiou]/g, '')
}

  removerVocales('javascript') // 'jvscrpt'
  removerVocales('ada lovelace') // 'd lvlc'

// obtener extension

const obtenerExtension = (archivo) => {
    const nombreArchivo = archivo.split('.')
    return nombreArchivo[1]
}

obtenerExtension('imagen.png') // 'png'
obtenerExtension('index.html') // 'html'
obtenerExtension('notas.txt') // 'txt'

// Puente seguro

const esPuenteSeguro = (puente) => {
    if(puente.match(' ')) {
    return false
    }
    return true
}

  esPuenteSeguro('### ##') // false
  esPuenteSeguro('##### ####') // false
  esPuenteSeguro('########') // true

//obtener subreddit

const obtenerSubreddit = (url) => {
    const urlPartes = url.split('/')
    return urlPartes[4]
}

  obtenerSubreddit('https://www.reddit.com/r/javascript/') // 'javascript' 
  obtenerSubreddit('https://www.reddit.com/r/aww/') // 'aww' 

// convertir acronimo

const convertirEnAcronimo = (str) => {
    return str.split('').join('.').toUpperCase()
}

  convertirEnAcronimo('afip') // 'A.F.I.P.'
  convertirEnAcronimo('nasa') // 'N.A.S.A.'
