//Numero PAR

const esPar = (numero) => {
    return numero  % 2 == 0
};

console.log('este numero es par',esPar(2));
console.log('este numero es par',esPar(3));
console.log('este numero es par',esPar(4));

//Numero IMPAR

const esImpar = (num) => {
    return num % 2 == 1
}

console.log('este numero es impar',esImpar(2));
console.log('este numero es impar',esImpar(3));
console.log('este numero es impar',esImpar(4));

//Area TRIANGULO

const calcularAreaTriangulo = (base, altura) => {
    console.log(Number((base * altura) / 2))
};

calcularAreaTriangulo(3, 4);
calcularAreaTriangulo(5, 6);