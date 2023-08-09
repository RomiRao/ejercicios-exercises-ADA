let escala1 = prompt('Indique el lugar de su escala','');
let duracion1 = prompt('Indique la duracion de ese vuelo','');
let escala2 = prompt('Indique el lugar de su escala','');
let duracion2 = prompt('Indique la duracion de ese vuelo','');
let escala3 = prompt('Indique el lugar de su escala','');
let duracion3 = prompt('Indique la duracion de ese vuelo','');
let vueloTotal = Number(duracion1) + Number(duracion2) + Number(duracion3);

alert(`Duracion de su viaje:
- ${escala1}: ${duracion1} horas.
- ${escala2}: ${duracion2} horas.
-${escala3}: ${duracion3} horas.
Duracion total del vuelo: ${vueloTotal} horas.`);