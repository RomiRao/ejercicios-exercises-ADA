// Lista de Nirvana
// Privada: Si
// Canciones:
// Smells Like Teen Spirit
// In Bloom
// Come As You Are

let lista = {
    nombre: "Nirvana",
    privada: true,
    canciones: ["Smells Like Teen Spirit", "In Bloom", "Come As You Are"],
};

if (lista.privada === true) {
    lista.privada = "Si";
}

console.log(`Lista de ${lista.nombre}`);
console.log(`Privada: ${lista.privada}`);
console.log(`Canciones:
${lista.canciones.join(", ")}`);
