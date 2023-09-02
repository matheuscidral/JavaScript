function mPesos(p) {
  let m = 0;

  for (let i = 0; i < 5; i++) {
    m += p[i];
  }

  return m / 5;
}

module.exports = { mPesos };
