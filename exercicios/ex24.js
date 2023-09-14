function tabuadaRepeticao(num) {
  const t = [];

  for (let i = 1; i <= 10; i++) {
    t.push(`${num} x ${i} = ${num * i}`);
  }

  return t;
}

module.exports = { tabuadaRepeticao };
