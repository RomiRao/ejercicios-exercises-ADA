//Funcion GRITAR

const gritando = (str) => {
    console.log(`${str} !`)
}

gritando('hola');
gritando('aaaaaaaa');

//Funcion NOMBRE

const obtenerNombre = (nombre, apellido) => {
    console.log(`${nombre} ${apellido}`)
};

obtenerNombre('Ada','Lovelace');

//Funcion SALUDAR

const saludando = (nombre) => {
    console.log(`Hola ${nombre}`)
};

saludando('Ada');



//Funcion SALUDAR GRITANDO

const gritar = (str) => {
    return `${str} !`
}

const obtenerNombreCompleto = (nombre, apellido) => {
    return nombre + ' ' + apellido;
};

const saludar = (nombre) => {
    return `Hola ${nombre}, un gusto conocerte`
};

const nombreCompleto = obtenerNombreCompleto('Ada', 'Lovelace');
const saludo = saludar(nombreCompleto);
const grito = gritar(saludo);

console.log(grito);


//Funcion datos de ciudad

const obtenerDatosDeCiudad = (nombre, poblacion, pais) =>{
    console.log(`La ciudad de ${nombre} tiene una poblacion de ${poblacion} habitantes y esta ubicada en ${pais}`)
}

obtenerDatosDeCiudad('Cordoba','un millon', 'Argentina');