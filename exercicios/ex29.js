function nAleatorios() {
  let nGerados = [];

  for (let i = 0; i < 15; i++) {
    nGerados[i] = Math.floor(Math.random() * 100);
  }

  return nGerados;
}

module.exports = { nAleatorios };
