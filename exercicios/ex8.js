function tabuada(t) {
  const results = [];

  for (let i = 0; i <= 10; i++) {
    results.push(`${t} x ${i} = ${t * i}`);
  }
  return results;
}

module.exports = { tabuada };
