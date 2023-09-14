function nNegativos(numeros) {
  let n = 0;

  if (numeros.length > 10 || numeros.length < 10) {
    return `Números atuais: ${numeros.length}`;
  } else {
    for (let i = 0; i < 10; i++) {
      if (numeros[i] < 0) {
        n++;
      }
    }

    return `Nos números: ${n} / 10 SÃO NEGATIVOS`;
  }
}

module.exports = { nNegativos };
