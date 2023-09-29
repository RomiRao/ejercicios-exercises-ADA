function clickCaja(e) {
    const el = document.querySelector(".box");

    el.innerHTML = "¡Clickeado!";

    setTimeout(function () {
        el.classList.add("circle");
        setTimeout(function () {
            el.classList.add("orange");
            setTimeout(function () {
                el.classList.remove("circle");
                setTimeout(function () {
                    el.classList.remove("orange");
                    el.classList.add("purple");
                    setTimeout(function () {
                        el.classList.add("fadeOut");
                    }, 0.5);
                }, 0.75);
            }, 0.25);
        }, 0.5);
    }, 2);

    // 1. Cambiar el texto del elemento a "¡Clickeado!"

    // 2. Hacer que el elemento sea un círculo después de 2 segundos (agregar la clase circle)
    // setTimeout(function () {
    //     el.classList.add("circle");
    // }, 2);
    // // 3. Hacer que el elemento sea naranja después de medio segundo (agregar la clase orange)

    // setTimeout(function () {
    //     el.classList.add("orange");
    // }, 0.5);

    // // 4. Hacer que el elemento sea un cuadrado después de un cuarto de segundo (remover la clase circle)

    // setTimeout(function () {
    //     el.classList.remove("circle");
    // }, 0.25);

    // // 5. Hacer que el elemento sea violeta desdpués de un tercio de segundo (remover la clase orange y agregar la clase purple)

    // setTimeout(function () {
    //     el.classList.remove("orange");
    //     el.classList.add("purple");
    // }, 0.75);

    // // 6. Ocultar el elemento después de medio segundo (agregar la clase fadeOut)

    // setTimeout(function () {
    //     el.classList.add("fadeOut");
    // }, 0.5);
}

const box = document.querySelector(".box");
box.addEventListener("click", clickCaja);
