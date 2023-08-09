const meGusta = prompt('Indique numero de Me Gusta');
const meEncanta = prompt('Indique numero de Me Encanta');
const meAsombra = prompt('Indique numero de Me Asombra');
const reacciones = document.getElementsByClassName('reacciones')

reacciones[0].innerText = `${meGusta}`
reacciones[1].innerText = `${meEncanta}`
reacciones[2].innerText = `${meAsombra}`