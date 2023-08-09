const listaMostrar = document.getElementById("lista-tareas");
const boton = document.getElementById("boton");
const texto = document.getElementById("texto");

let listaTareas = [];

const agregarTarea = () => {
    listaTareas.push(`${texto.value}`);
    let liTarea = document.createElement("li");
    liTarea.innerText = texto.value;
    listaMostrar.appendChild(liTarea);
    console.log(listaTareas);
};

boton.addEventListener("click", () => agregarTarea());
