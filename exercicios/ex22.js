function velMulta(velPermitida, velCarro) {
  if (velCarro > velPermitida && velCarro <= velPermitida + velPermitida * 0.2) {
    return `Multa! | Valor: R$ 102,00`;
  } else if (velCarro > velPermitida + velPermitida * 0.2) {
    return `Multa! | Valor: R$ 500,00`;
  } else {
    return `Limpo!`;
  }
}

module.exports = { velMulta };
