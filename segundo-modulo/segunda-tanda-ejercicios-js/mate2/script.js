// Funcion Horas a Segundos

const convertirHorasEnSegundos = (horas) => {
    let segundos = Number(horas * 3600);
    console.log(`${horas} son ${segundos}`);
};

convertirHorasEnSegundos(1) // 3600
convertirHorasEnSegundos(3) // 10800
convertirHorasEnSegundos(4.5) // 16200

// Funcion PERIMETRO RECTANGULO

const calcularPerimetroRectangulo = (ancho, alto) => {
    console.log(Number((ancho * 2) + (alto * 2)))
}

calcularPerimetroRectangulo(3.2, 5) // 16.4
calcularPerimetroRectangulo(10, 20) // 60

//Funcion Porcentaje

const calcularPorcentaje = (numero, porcentaje) => {
    console.log(Number(numero * (porcentaje / 100)))
}

calcularPorcentaje(100, 15) // 15
calcularPorcentaje(10, 50) // 5
calcularPorcentaje(200, 10) // 20

//Funcion SUMAR Porcentaje

const sumarPorcentaje = (numero, porcentaje) => {
    let resultadoPorcentaje = calcularPorcentaje (numero, porcentaje);
    return numero + resultadoPorcentaje;
}

sumarPorcentaje(100, 15) // 115
sumarPorcentaje(10, 50) // 15
sumarPorcentaje(200, 10) // 220

//Funcion RESTAR Porcentaje


const restarPorcentaje = (numero, porcentaje) => {
    let resultadoPorcentaje = calcularPorcentaje (numero, porcentaje);
    return numero - resultadoPorcentaje;
}

restarPorcentaje(100, 15) // 85
restarPorcentaje(10, 40) // 6
restarPorcentaje(200, 10) // 180

//Funcion FPS

const calcularFPS = (fps, minutos) => {
    console.log(Number((fps * 60) * minutos))
};

calcularFPS(1, 1) // 60
calcularFPS(10, 2) // 1200
calcularFPS(2, 3) // 360

//Funcion PUNTAJE

const calcularPuntaje = (facil, normal, dificil) => {
    console.log(Number((facil * 3) + (normal * 5) + (dificil * 10)))
};

// facil: 3 puntos
// normal: 5 puntos
// dificil: 10 puntos

calcularPuntaje(3, 0, 0) // 9
calcularPuntaje(0, 2, 1) // 20
calcularPuntaje(5, 1, 2) // 40