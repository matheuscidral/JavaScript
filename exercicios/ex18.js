function custoCarro(custoFabrica) {
  let pDistribuidor = 0.28;
  let imposto = 0.45;

  return custoFabrica + custoFabrica * pDistribuidor + custoFabrica * imposto;
}

module.exports = { custoCarro };
