//aprueba

const aprueba = (nota) => {
    const notaFinal = Math.round(nota)
    if(notaFinal >= 6){
    return true
    } else {
    return false
    }
}

  aprueba(1) // false
  aprueba(5.4) // false
  aprueba(5.5) // true
  aprueba(5.6) // true
  aprueba(8) // true

//Duracion en segundos

const obtenerDuracionEnSegundos = (duracion) => {
  const fragmentado = duracion.split(':')
  const minutos = fragmentado[0] * 60
  const segundos = fragmentado[1]
  return Number(minutos) + Number(segundos)
  }

obtenerDuracionEnSegundos('00:33') // 33
obtenerDuracionEnSegundos('01:05') // 65
obtenerDuracionEnSegundos('10:42') // 642


// es anio nuevo

const esAnioNuevo = (fecha) => {
  const anioNuevo = fecha.split('/')
  const dia = anioNuevo[0]
  const mes = anioNuevo[1]
  if(dia == 1 && mes == 1) {
    return true
  }
  return false
}

esAnioNuevo('03/05/2015') // false
esAnioNuevo('22/01/1987') // false
esAnioNuevo('01/01/2020') // true
