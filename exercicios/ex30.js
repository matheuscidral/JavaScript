function nAleatorios() {
  let nGerados = [];

  nGerados[0] = Math.floor(Math.random() * 8);
  nGerados[1] = Math.floor(Math.random() * 7) + 9;
  nGerados[2] = Math.floor(Math.random() * 6) + 17;
  nGerados[3] = Math.floor(Math.random() * 6) + 23;
  nGerados[4] = Math.floor(Math.random() * 6) + 24;

  return nGerados;
}

module.exports = { nAleatorios };
