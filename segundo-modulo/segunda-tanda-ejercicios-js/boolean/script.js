//Funcion EDAD

const esMayorDeEdad = (edad) => {
    console.log(Boolean(edad >= 18))
};

esMayorDeEdad(15) // false
esMayorDeEdad(18) // true
esMayorDeEdad(27) // true

//Funcion TEMPERATURA

const haceCalor = (temperatura) => {
    console.log(Boolean(temperatura >= 22))
};

haceCalor(12) // false
haceCalor(22) // true
haceCalor(32) // true

const haceFrio = (temperatura) => {
    console.log(Boolean(temperatura <= 12))
};

haceFrio(12) // true
haceFrio(22) // false
haceFrio(3) // true
haceFrio(-2) // true

//Funcion DEPOSITO

const aceptaDeposito = (monto) => {
    console.log(Boolean(monto % 10 == 0))
};

aceptaDeposito(440) // true
aceptaDeposito(123) // false
aceptaDeposito(500.50) // false
aceptaDeposito(1000) // true