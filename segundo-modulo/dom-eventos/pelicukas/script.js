const todasButton = document.getElementById("todas");
const terrorButton = document.getElementById("cat-terror");
const comediaButton = document.getElementById("cat-comedia");
const animadasButton = document.getElementById("cat-animacion");

const peliculasTerror = document.getElementsByClassName("terror");
const peliculasComedia = document.getElementsByClassName("comedia");
const peliculasAnimadas = document.getElementsByClassName("animacion");

todasButton.addEventListener("click", () => {
    peliculasAnimadas[0].classList.remove("hidden");
    peliculasAnimadas[1].classList.remove("hidden");
    peliculasAnimadas[2].classList.remove("hidden");
    peliculasAnimadas[3].classList.remove("hidden");
    peliculasTerror[0].classList.remove("hidden");
    peliculasTerror[1].classList.remove("hidden");
    peliculasTerror[2].classList.remove("hidden");
    peliculasTerror[3].classList.remove("hidden");
    peliculasComedia[0].classList.remove("hidden");
    peliculasComedia[1].classList.remove("hidden");
    peliculasComedia[2].classList.remove("hidden");
    peliculasComedia[3].classList.remove("hidden");
});

terrorButton.addEventListener("click", () => {
    peliculasAnimadas[0].classList.add("hidden");
    peliculasAnimadas[1].classList.add("hidden");
    peliculasAnimadas[2].classList.add("hidden");
    peliculasAnimadas[3].classList.add("hidden");
    peliculasTerror[0].classList.remove("hidden");
    peliculasTerror[1].classList.remove("hidden");
    peliculasTerror[2].classList.remove("hidden");
    peliculasTerror[3].classList.remove("hidden");
    peliculasComedia[0].classList.add("hidden");
    peliculasComedia[1].classList.add("hidden");
    peliculasComedia[2].classList.add("hidden");
    peliculasComedia[3].classList.add("hidden");
});

comediaButton.addEventListener("click", () => {
    peliculasAnimadas[0].classList.add("hidden");
    peliculasAnimadas[1].classList.add("hidden");
    peliculasAnimadas[2].classList.add("hidden");
    peliculasAnimadas[3].classList.add("hidden");
    peliculasTerror[0].classList.add("hidden");
    peliculasTerror[1].classList.add("hidden");
    peliculasTerror[2].classList.add("hidden");
    peliculasTerror[3].classList.add("hidden");
    peliculasComedia[0].classList.remove("hidden");
    peliculasComedia[1].classList.remove("hidden");
    peliculasComedia[2].classList.remove("hidden");
    peliculasComedia[3].classList.remove("hidden");
});

animadasButton.addEventListener("click", () => {
    peliculasAnimadas[0].classList.remove("hidden");
    peliculasAnimadas[1].classList.remove("hidden");
    peliculasAnimadas[2].classList.remove("hidden");
    peliculasAnimadas[3].classList.remove("hidden");
    peliculasTerror[0].classList.add("hidden");
    peliculasTerror[1].classList.add("hidden");
    peliculasTerror[2].classList.add("hidden");
    peliculasTerror[3].classList.add("hidden");
    peliculasComedia[0].classList.add("hidden");
    peliculasComedia[1].classList.add("hidden");
    peliculasComedia[2].classList.add("hidden");
    peliculasComedia[3].classList.add("hidden");
});
