const rojo = prompt('Ingrese valor rojo');
const verde = prompt('Ingrese valor verde');
const azul = prompt('Ingrese valor azul');
const tomandoBody = document.getElementsByTagName('body')
const fondo = tomandoBody[0]

fondo.style.backgroundColor = `rgb(${rojo},${verde},${azul})`;

//22,193,114