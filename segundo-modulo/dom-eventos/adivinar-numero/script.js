const texto = document.getElementById("texto");
const boton = document.getElementById("boton");

const generarNumero = () => {
    let numero = Math.floor(Math.random() * 10);
    return numero;
};

const adivinarNumero = (e, num) => {
    if (e.key > num) {
        texto.innerText = `El número es más chico. Número ingresado: ${e.key}`;
    } else if (e.key < num) {
        texto.innerText = `El número es más grande. Número ingresado: ${e.key}`;
    } else if (e.key == num) {
        texto.innerText = `Adivinaste. Número ingresado: ${e.key}`;
    } else {
        return false;
    }
};

document.addEventListener("keydown", (e) => adivinarNumero(e, numeroGenerado));
boton.addEventListener("click", () => {
    texto.innerText = "¡Nueva partida! Presione un número.";
    return (numeroGenerado = generarNumero());
});

let numeroGenerado = generarNumero();

//que reinicie con el boton
