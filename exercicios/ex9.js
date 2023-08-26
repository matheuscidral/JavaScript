function aprovadoReprovado(nota1, nota2, nota3) {
  const media = (nota1 + nota2 + nota3) / 3;

  if (media >= 7) {
    return `Média: ${media} | Aprovado`;
  } else if (media >= 5 && media < 7) {
    return `Média: ${media} | Recuperação`;
  } else {
    return `Média: ${media} | Reprovado`;
  }
}

module.exports = { aprovadoReprovado };
