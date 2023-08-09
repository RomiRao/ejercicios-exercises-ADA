const kilometros = document.getElementById("kilometros");
const millas = document.getElementById("millas");

kilometros.addEventListener("input", (e) => {
    let conver = e.target.value * 0.62;
    millas.value = conver;
});

millas.addEventListener("input", (e) => {
    let conver = e.target.value * 1.61;
    kilometros.value = conver;
});
