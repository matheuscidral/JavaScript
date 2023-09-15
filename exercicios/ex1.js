function somar(num1, num2) {
  if(isNaN(num1) || isNaN(num2)) {
    throw new Error("Informe o número!");
  }

  return num1 + num2;
}

module.exports = { somar };
