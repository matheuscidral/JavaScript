function tempo(valorSegundos) {
  let horas = 0;
  let minutos = 0;
  let segundos = valorSegundos;

  if (valorSegundos >= 3600) {
    horas = valorSegundos / 3600;
    minutos = (valorSegundos % 3600) / 60;
    segundos = (valorSegundos % 3600) % 60;
  } else if (valorSegundos >= 60) {
    minutos = valorSegundos / 60;
    segundos = valorSegundos % 60;
  }

  return `${parseInt(horas)}h, ${parseInt(minutos)}min, ${parseInt(segundos)}s`;
}

module.exports = { tempo };
