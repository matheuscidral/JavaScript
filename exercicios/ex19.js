function juroscap(cap, taxa, tempo) {
  let juros = cap * taxa * tempo;
  let montante = cap + juros;

  return `Cap: ${cap} | Juros: ${juros} | Montante: ${montante}`;
}

module.exports = { juroscap };
