const nombre = prompt('Ingrese su nombre')
const titulo = document.getElementById('titulo')

titulo.innerText = `Hola ${nombre}!`
titulo.style.textAlign = 'center';
titulo.style.fontSize = '80px';
titulo.style.fontFamily = 'Helvetica';