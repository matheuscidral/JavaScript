function pElevador(p) {
  const pMaximo = 180;
  let pTotal = 0;

  for (let i = 0; i < p.length; i++) {
    pTotal += p[i];
  }

  if (pTotal < 180) {
    return `Limite de peso não atinjido (${pTotal} / ${pMaximo})`;
  } else {
    return `Limite de peso atinjido (${pTotal} / ${pMaximo})`;
  }
}

module.exports = { pElevador };
