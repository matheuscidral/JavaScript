function numerosNegativosDois(numeros) {
  let positivos = 0;
  let pares = 0;
  let multiplosDeSete = 0;

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 0) {
      positivos++;
    }
    if (numeros[i] % 2 === 0) {
      pares++;
    }
    if (numeros[i] % 7 === 0) {
      multiplosDeSete++;
    }
  }

  return `${positivos}: Positivos ${pares}: Pares ${multiplosDeSete}: Múltiplos de 7`;
}

module.exports = { numerosNegativosDois };
