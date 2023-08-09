let distancia = prompt('Ingrese la distancia que quiere calcular','');
let caminando = Number(distancia) / 5;
//5km por hora
let bici = Number(distancia) / 10;
//10km por hora
let auto = Number(distancia) / 80;
//80km por hora

alert(`Usted tardara:
${caminando} horas caminando
${bici} horas en bicicleta
${auto} horas en auto`);