function calculadora(op, num1, num2) {
  switch (op) {
    case "+":
      return `${num1} + ${num2} = ${num1 + num2}`;

    case "-":
      return `${num1} - ${num2} = ${num1 - num2}`;

    case "*":
      return `${num1} * ${num2} = ${num1 * num2}`;

    case "/":
      return `${num1} / ${num2} = ${num1 / num2}`;

    default:
      return `Operação Inválida`;
  }
}

module.exports = { calculadora };
