// DATOS DE LAS PERSONAS QUE NECESITAMOS GUARDAR EN UNA BASE DE DATOS
// 1,ada@gmail.com,Ada Lovelace,1234567890
// 2,grace@hotmail.com,Grace Hopper,0987654321
// 3,hedy@gmail.com,Hedy Lamarr,6789054321
// 4,radia@yahoo.com,Radia Perlman,1234509876
// 5,Sheryl@facebook.com,Sheryl Sandberg,5432167890

// Ejemplo del formato de cada objeto: 0,ejemplo@terra.com,Ejemplo,1029384756
// var example = {
//   id: 0,
//   nombre: "Ejemplo",
//   email: "ejemplo@terra.com",
//   telefono: "1029384756"
// }

// Escribi aca abajo los objetos para cada uno de las personas que nos enviaron

let ada = {
    id: 1,
    nombre: "Ada Lovelace",
    email: "ada@gmail.com",
    telefono: "1234567890",
};

let grace = {
    id: 2,
    nombre: "Grace Hopper",
    email: "grace@hotmail.com",
    telefono: "0987654321",
};

let hedy = {
    id: 3,
    nombre: "Hedy Lamarr",
    email: "hedy@gmail.com",
    telefono: "6789054321",
};

let radia = {
    id: 4,
    nombre: "Radia Perlman",
    email: "ejemplo@terra.com",
    telefono: "1234509876",
};

let sheryl = {
    id: 5,
    nombre: "Sheryl Sandberg",
    email: "Sheryl@facebook.com",
    telefono: "5432167890",
};

//// TENEMOS QUE MOSTRAR LOS SIGUIENTES DATOS

// 1. El nombre de Ada:
console.log(ada.nombre);

// 2. El ID de Grace
console.log(grace.id);

// 3. El email de Hedy
console.log(hedy.email);

// 4. El ID y nombre de Radia
console.log(radia.id, radia.nombre);

// 5. El telefono de Sheryl
console.log(sheryl.telefono);
