const ingreso = document.getElementById("ing-eg");
const botonResta = document.getElementById("boton-resta");
const botonSuma = document.getElementById("boton-suma");
const contador = document.getElementById("contador");
const movimientos = document.getElementById("movimientos");

let listaMovimientos = [];

let contadorIngresos = 0;

const sumarIngreso = () => {
    movimientos.innerHTML = "";
    if (ingreso.value !== "") {
        listaMovimientos.push(ingreso.value);
        for (let i = 0; i < listaMovimientos.length; i++) {
            let itemListaSuma = document.createElement("li");
            let sumaIngreso = document.createTextNode(`${listaMovimientos[i]}`);
            itemListaSuma.style.color = "green";
            itemListaSuma.appendChild(sumaIngreso);
            movimientos.appendChild(itemListaSuma);
            contadorIngresos = listaMovimientos.reduce(function (total, ing) {
                return Number(total) + Number(ing);
            });
        }
    }
    contador.innerText = contadorIngresos;
    console.log(listaMovimientos);
};

const restarIngreso = () => {
    movimientos.innerHTML = "";
    if (ingreso.value !== "") {
        listaMovimientos.push(ingreso.value);
        for (let i = 0; i < listaMovimientos.length; i++) {
            let itemListaSuma = document.createElement("li");
            let sumaIngreso = document.createTextNode(`${listaMovimientos[i]}`);
            itemListaSuma.style.color = "green";
            itemListaSuma.appendChild(sumaIngreso);
            movimientos.appendChild(itemListaSuma);
            contadorIngresos = listaMovimientos.reduce(function (total, ing) {
                return Number(total) + Number(ing);
            });
        }
    }
    contador.innerText = contadorIngresos;
    console.log(listaMovimientos);
};

botonResta.addEventListener("click", () => restarIngreso());
botonSuma.addEventListener("click", () => sumarIngreso());
