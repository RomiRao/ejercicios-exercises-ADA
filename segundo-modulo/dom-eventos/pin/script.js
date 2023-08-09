const pin = document.getElementById("numero-pin");
const numeros = document.getElementsByClassName("number-button");
const resetButon = document.getElementById("reset-btn");
const deleteButon = document.getElementById("delete-btn");

const agregarNum = (e) => {
    if (pin.innerText.length < 6) {
        let num = pin.innerText + e;
        pin.innerText = num;
    } else {
        return false;
    }
};

numeros[0].addEventListener("click", () => agregarNum(1));
numeros[1].addEventListener("click", () => agregarNum(2));
numeros[2].addEventListener("click", () => agregarNum(3));
numeros[3].addEventListener("click", () => agregarNum(4));
numeros[4].addEventListener("click", () => agregarNum(5));
numeros[5].addEventListener("click", () => agregarNum(6));
numeros[6].addEventListener("click", () => agregarNum(7));
numeros[7].addEventListener("click", () => agregarNum(8));
numeros[8].addEventListener("click", () => agregarNum(9));
numeros[9].addEventListener("click", () => agregarNum(0));

deleteButon.addEventListener("click", () => {
    pin.innerText = pin.innerText.slice(0, -1);
});

resetButon.addEventListener("click", () => {
    pin.innerText = "";
});
