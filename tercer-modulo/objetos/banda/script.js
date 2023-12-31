let banda = {
    name: "Led Zeppelin",
    year: 1968,
    active: false,
    thumbnail:
        "http://townsquare.media/site/295/files/2014/10/Led-Zeppelin1.jpg?w=980&q=75",
    members: ["Jimmy Page", "Robert Plant", "John Paul Jones", "John Bonham"],
    albums: [
        {
            name: "Led Zeppelin",
            year: 1969,
            songs: ["Good Times, Bad Times", "Communication Breakdown"],
            duration: 2691,
        },
        {
            name: "Led Zeppelin II",
            year: 1969,
            songs: ["Whole Lotta Love", "Moby Dick", "Ramble On"],
            duration: 2502,
        },
        {
            name: "Led Zeppelin III",
            year: 1970,
            songs: ["Immigrant Song"],
            duration: 2489,
        },
        {
            name: "Led Zeppelin IV",
            year: 1971,
            songs: ["Rock and Roll", "Stairway to Heaven", "Four Sticks"],
            duration: 2559,
        },
    ],
};

// completa el codigo para lograr el resultado esperado

const sumarCanciones = (albums) => {
    let canciones = 0;
    albums.forEach((element) => {
        canciones = canciones + element.songs.length;
    });
    return canciones;
};

const sumarSegundos = (albums) => {
    let total = 0;
    albums.forEach((element) => {
        total = total + element.duration;
    });
    return total / cantidadTotalCanciones;
};

let anioLanzamiento = banda.year;
let cantidadMiembros = banda.members.length;
let miembros = banda.members.join(", ");
let cantidadDiscos = banda.albums.length;
let cantidadTotalCanciones = sumarCanciones(banda.albums);
let promedioDuracion = sumarSegundos(banda.albums);

///// RESULTADO
console.log("Led Zeppelin se fundó en el año " + anioLanzamiento);
console.log("Tiene " + cantidadMiembros + " miembros: " + miembros);
console.log("Tiene en total " + cantidadDiscos + " discos");
console.log(
    "Tiene en total " +
        cantidadTotalCanciones +
        " canciones entre todos los discos."
);
console.log("En promedio, cada canción dura " + promedioDuracion + " segundos");
// ESPERADO
// Led Zeppelin se fundó en el año 1968
// Tiene 4 miembros: Jimmy Page, Robert Plant, John Paul Jones, John Bonham
// Tiene en total 4 discos
// Tiene en total 9 canciones entre todos los discos.
// En promedio, cada canción dura 1137.888888888889 segundos
