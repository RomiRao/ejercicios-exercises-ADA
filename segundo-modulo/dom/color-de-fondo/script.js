const color = prompt('Ingrese color en valor hexadecimal');
const tomandoBody = document.getElementsByTagName('body')
const fondo = tomandoBody[0]

fondo.style.backgroundColor = color;