const alumnasArray = ["Maria", "Sofia", "Camila"];
const listaAlumnas = document.getElementById("lista");

const crearLista = (alumnas) => {
    for (let i = 0; i < alumnas.length; i++) {
        let liAlumna = document.createElement("li");
        let nameAlumna = document.createTextNode(`${alumnas[i]}`);
        liAlumna.appendChild(nameAlumna);
        listaAlumnas.appendChild(liAlumna);
    }
};

crearLista(alumnasArray);
