function mAltura(qntdPessoas, h) {
  let m = 0;

  for (let i = 0; i < qntdPessoas; i++) {
    m += h[i];
  }

  return m / qntdPessoas;
}

module.exports = { mAltura };
