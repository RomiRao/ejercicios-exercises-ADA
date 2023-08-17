let datos = {
    id: 1,
    nombre: "Ada",
    apellido: "Lovelace",
    email: "ada.lovelace@gmail.com",
    telefono: "1234567890",
    edad: 29,
    programa: true,
};

// codea aca la solucion

if (datos.programa === true) {
    datos.lenguajesFavoritos = ["JavaScript", "CSS"];
}

// aca mostrar la frase
console.log(
    `Hola, mi nombre es ${
        datos.nombre
    } y programo en ${datos.lenguajesFavoritos.join(" y ")}`
);
// por ejemplo "Hola, mi nombre es Ada y me programo en Javascript,C++"
