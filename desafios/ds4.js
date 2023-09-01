function maiorDeTres(num1, num2, num3) {
  if (num1 > num2 && num1 > num2) {
    return `${num1} é o maior número`;
  } else if (num2 > num1 && num2 > num3) {
    return `${num2} é o maior número`;
  } else {
    return `${num3} é o maior número`;
  }
}

module.exports = { maiorDeTres };
