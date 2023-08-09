const titulo = prompt('Indique titulo de su articulo');
const imagen = prompt('Proporcione una imagen');
const url = prompt('Indique url a su articulo');

//Elementos
const tituloArticulo = document.getElementById('titulo')
const imagenArticulo = document.getElementById('imagen')
const urlArticulo = document.getElementById('link')

tituloArticulo.innerText = titulo;
imagenArticulo.src = imagen;
urlArticulo.href = url;

//https://bestfriends.org/sites/default/files/styles/story_mobile_530_x_298/public/story_images/FirstKittensFoster1501sak_1124x554.jpg?h=5c78e16c&itok=MtowTT92

//https://bestfriends.org/es/historias/articulos/8-razones-para-cuidar-gatitos-temporalmente