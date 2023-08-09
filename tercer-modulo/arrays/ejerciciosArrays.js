// Todos los ejercicios los hice con RunJS por eso no hago un archivo html

//obtener Menor
const obtenerMenor = (array) => {
    let arrayOrdenado = array.sort((a, b) => a - b);
    return arrayOrdenado[0];
};

obtenerMenor([5, 7, 99, 34, 54, 2, 12]); // 2

//sumar numeros
const sumar = (numeros) => {
    return numeros.reduce(function (total, elemento) {
        return total + elemento;
    });
};

sumar([5, 7, 10, 12, 24]);
//58

//contiene numeros
const contiene = (numero, array) => {
    if (array.includes(numero)) {
        return true;
    }
    return false;
};

contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]); // true
contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]); // false

//inverir caso
const invertirCaso = (string) => {
    const nuevoString = [];
    for (let letra of string) {
        if (letra === letra.toUpperCase()) {
            nuevoString.push(letra.toLowerCase());
        } else if (letra === letra.toLowerCase()) {
            nuevoString.push(letra.toUpperCase());
        }
    }
    return nuevoString.join("");
};

invertirCaso("Ada Lovelace"); // 'aDA lOVELACE'
invertirCaso("feliz cumple"); // 'FELIZ CUMPLE'
invertirCaso("jAvAsCrIpT"); // 'JaVaScRiPt'

//tragamonedas
const gano = (tragamonedas) => {
    for (let i = 0; i < 5; i++) {
        if (tragamonedas[i] !== tragamonedas[0]) {
            return false;
        }
    }
    return true;
};

gano(["⭐️", "⭐️", "⭐️", "💫", "✨"]); // false
gano(["💫", "💫", "💫", "💫", "💫"]); // true
gano(["💫", "💫", "💫", "💫", "💫", "⭐️"]); // true

//gatitos y perritos VERRRRRRRRRRRRRRRRRRRRR

//chat status
const obtenerChatStatus = (usuarias) => {
    if (usuarias.length == 1) {
        return `${usuarias[0]} esta conectada`;
    } else if (usuarias.length == 2) {
        return `${usuarias[0]} y ${usuarias[1]} estan conectadas`;
    } else if (usuarias.length > 2) {
        return `${usuarias[0]}, ${usuarias[1]} y ${
            usuarias.length - 2
        } persona(s) estan conectadas`;
    }
};

obtenerChatStatus(["Ada"]); // 'Ada está conectada'
obtenerChatStatus(["Ada", "Grace"]); // 'Ada y Grace están conectadas'
obtenerChatStatus(["Ada", "Grace", "Marie", "sofia"]); // 'Ada, Grace y 1 persona(s) más están conectadas'

//plantines VEEEEEEEEEERRRR

//comer plantas VEEEEEEEEEER

//multiplicar

const multiplicar = (multi, numeritos) => {
    return numeritos.map(function (numero) {
        return numero * multi;
    });
};

multiplicar(2, [5, 7, 15, 22, 40]); // [10, 14, 30, 44, 80]
multiplicar(10, [2, 5, 77]); // [20, 50, 770]

//filtrar palabras
const filtrarPorLongitudMayorA = (numero, cadena) => {
    let palabrasEscogidas = cadena.filter(function (palabra) {
        return palabra.length > numero;
    });
    return palabrasEscogidas;
};

filtrarPorLongitudMayorA(4, [
    "dia",
    "remolacha",
    "azul",
    "sorpresa",
    "te",
    "verde",
]); // ['remolacha', 'sorpresa', 'verde']

//palabras recortadas

const recortar = (numero, palabras) => {
    let palabrasRecortadas = palabras.map(function (text) {
        return text.slice(0, numero);
    });
    return palabrasRecortadas;
};

recortar(4, ["elefante", "dinosaurio", "chocolate", "avion", "america"]); // ['elef', 'dino' 'choc', 'avio', 'amer']
recortar(1, ["algoritmo", "bug", "compilador"]); // ['a', 'b', 'c']

//son iguales
const sonIguales = (a, b) => {
    return a.join("-") === b.join("-") ? true : false;
};

sonIguales([10, 25, 6, 33, 48, 105], [10, 25, 6, 33, 48, 105]);
//true
sonIguales([19, 25, 6, 33, 48, 105], [11, 25, 6, 33, 48, 105]);
//false
sonIguales([10, 25, 6, 33, 48, 105], [25, 10, 6, 33, 48, 105]);
//false

// encontrar indice
const obtenerIndice = (numero, array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === numero) {
            return i;
        }
    }
    return -1;
};

obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12]); // 2
obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12]); // -1
//se puede hacer con indexof tambien y son menos lineas de codigo
// const obtenerIndice = (numero, array) => {
//     for (let i = 0; i < array.length; i++) {
//         return array.indexOf(numero);
//     }
//     return -1;
// };

// repetir(valor, cantidad)
// Crear una función repetir que tome como argumento un valor valor y un número entero cantidad, y devuelva una array con valor repetido cantidad de veces.

const repetir = (valor, cantidad) => {
    let nuevoArray = [];
    for (i = 0; i < cantidad; i++) {
        nuevoArray.push(valor);
    }
    return nuevoArray;
};
//                                0         1           2
repetir("lovelace", 3); // ['lovelace', 'lovelace', 'lovelace']
repetir("a", 5); // ['a', 'a', 'a', 'a', 'a']
repetir("html", 0); // []

//Cuenta regresiva
const crearCuentaRegresiva = (numeroInicial) => {
    const cuentaRegresiva = [];
    for (let i = numeroInicial; i > -1; i--) {
        cuentaRegresiva.push(i);
    }
    return cuentaRegresiva;
};

crearCuentaRegresiva(3);
//[3, 2, 1, 0]
crearCuentaRegresiva(5);
//[5, 4, 3, 2, 1, 0]

//remover duplicados
const removerDuplicados = (array) => {
    return array.reduce((acc, item) => {
        if (!acc.includes(item)) {
            acc.push(item);
        }
        return acc;
    }, []);
};

//otra forma
const removerDuplicados2 = (array) => {
    const sinDuplicados = [];
    array.forEach((num) => {
        if (!sinDuplicados.includes(num)) {
            sinDuplicados.push(num);
        }
    });
    return sinDuplicados;
};

removerDuplicados([1, 1, 1]);
//[1]
removerDuplicados([1, 1, 2, 2, 3, 3]);
//[1, 2 ,3]
removerDuplicados([5, 23, 8, 5, 5, 44, 23]);
//[5, 23 ,8, 44]

//repetir letras

const repetirLetras = (palabra, cantidad) => {
    let nuevaPalabra = "";
    for (let letra of palabra) {
        nuevaPalabra = nuevaPalabra + letra.repeat(cantidad);
    }
    return nuevaPalabra;
};

repetirLetras("hola", 2);
//'hhoollaa'
repetirLetras("ada", 3);
//'aaadddaaa'
repetirLetras("ah!", 5);
//aaaaahhhhh!!!!!'
repetirLetras("basta", 1);
//'basta'

// EL SENIOOR DE LOS ANILIOS ME SALIO CSM
const estanJuntos = (personajes) => {
    const frodo = personajes.indexOf("Frodo");
    const sam = personajes.indexOf("Sam");
    return sam === frodo - 1 || sam === frodo + 1 ? true : false;
};

estanJuntos(["Sam", "Frodo", "Legolas"]); //true
estanJuntos(["Aragorn", "Frodo", "Sam"]); //true
estanJuntos(["Sam", "Orco", "Frodo"]); //false

//sumar impares
const sumarImparesHasta = (num) => {
    let numeroFinal = 0;
    for (let i = 0; i <= num; i++) {
        if (i % 2 == 1) {
            numeroFinal = numeroFinal + i;
        }
    }
    return numeroFinal;
};

sumarImparesHasta(5); // (1 + 3 + 5 = 9)
//9
sumarImparesHasta(13);
//49
sumarImparesHasta(47);
//576

//ver ejercicio
// const capitalizarPalabras = string => {
//     let stringNuevo = '';
//     let espacio = string.indexOf(' ')
//     for(let letra of string) {
//       if( = espacio + 1 ) {
//         stringNuevo = stringNuevo + letra.toUpperCase()
//       } else {
//         stringNuevo = stringNuevo + letra
//       }
//     }
//     return stringNuevo
//   }

//  capitalizarPalabras('Esto es un título')
//  //'Esto Es Un Título'
//   capitalizarPalabras('había una vez')
//  //'Había Una Vez'
//   capitalizarPalabras('OMG')
//  //'OMG'

//palindromos
const esPalindromo = (palabra) => {
    return palabra === palabra.split("").reverse().join("") ? true : false;
};

esPalindromo("ada");
//true
esPalindromo("reconocer");
//true
esPalindromo("mama");
//false
esPalindromo("javascript");
//false
