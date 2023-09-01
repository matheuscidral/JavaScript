function numerosNegativosDois(positivos, pares, multiplosDeSete) {
  const numeros = [];
  positivos = 0;
  pares = 0;
  multiplosDeSete = 0;

  for (let i = 0; i <= 10; i++) {
    if (numeros[i] > 0) {
      positivos++;
    }
    if (numeros[i] % 2 == 0) {
      pares++;
    }
    if (numeros[i] % 7 == 0) {
      multiplosDeSete++;
    }
  }
  return `${positivos}: Postivos ${pares}: Pares ${multiplosDeSete}: Múltiplos de 7`;
}

module.exports = { numerosNegativosDois };
