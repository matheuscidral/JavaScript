const express = require("express");
const { somar } = require("./exercicios/ex1.js");
const { salario } = require("./exercicios/ex2.js");
const { mediaPesos } = require("./exercicios/ex3.js");
const { temperatura } = require("./exercicios/ex4.js");
const { distancia } = require("./exercicios/ex5.js");
//const { tempo } = require ("./exercicios/ex6.js");
const { tabuada } = require("./exercicios/ex8.js");
const { calculadora } = require("./Exercicios/ex11.js")
const { positivoNegativo } = require("./Exercicios/ex12.js")
const { parImpar } = require("./Exercicios/ex13.js")
const { maiorNumero } = require("./Exercicios/ex14.js")
const { verificarTriangulo } = require("./Exercicios/ex15.js")
const { calcularImpostoRenda } = require("./Exercicios/ex16.js")
const { mediaPonderada } = require("./Exercicios/ex17.js")
const { custoCarro } = require("./Exercicios/ex18.js")
const { jurosCap } = require("./Exercicios/ex19.js")
const { valorTotalIPI } = require("./Exercicios/ex20.js")
const { velMulta } = require("./Exercicios/ex22.js")
const { escreverBatata } = require("./Exercicios/ex23.js")
const { tabuadaRepeticao } = require("./Exercicios/ex24.js")
const { mAltura } = require("./Exercicios/ex25.js")
const { mPesos } = require("./Exercicios/ex26.js")
const { pElevador } = require("./Exercicios/ex27.js")
const { nNegativos } = require("./Exercicios/ex28.js")
const { nAleatorios } = require("./Exercicios/ex29.js")
const { nAleatoriosMath } = require("./Exercicios/ex30.js")

const { idade } = require("./desafios/ds1.js");
const { troca } = require("./desafios/ds2.js");
const { maior } = require("./desafios/ds3.js");
const { maiorDeTres } = require("./desafios/ds4.js");
const { anoBissexto } = require("./desafios/ds5.js");
const { numerosNegativosDois } = require("./desafios/ds6.js");

const app = express();
app.use(express.json());

app.post("/api/ex1", (req, res) => {
  const result = somar(req.body.num1, req.body.num2);

  res.status(200).json({
    message: `result: ${result}`,
  });
});

app.post("/api/ex2", (req, res) => {
  const result = salario(req.body.ht, req.body.vh);

  res.status(200).json({
    message: `salario: ${result}`,
  });
});

app.post("/api/ex3", (req, res) => {
  const result = mediaPesos(req.body.p1, req.body.p2, req.body.p3, req.body.p4, req.body.p5);

  res.status(200).json({
    message: `media: ${result}`,
  });
});

app.post("/api/ex4", (req, res) => {
  const result = temperatura(req.body.c);

  res.status(200).json({
    message: `temperatura: ${result}`,
  });
});

app.post("/api/ex5", (req, res) => {
  const result = distancia(req.body.m);

  res.status(200).json({
    message: `distancia: ${result}`,
  });
});

/*app.post("/api/ex6", (req, res) => {
  const { result } = req.body;

  res.status(200).json({
    message: `tempo: ${result}`,
  });
});*/

app.post("/api/ex8", (req, res) => {
  const result = tabuada(req.body.t);

  res.status(200).json({
    message: "tabuada:", results: result,
  });
});

app.post('/api/ex11', (req, res) => {
  const result = calculadora(req.body.op, req.body.num1, req.body.num2);

  res.status(200).json({
    message: result
  });
});

app.post('/api/ex12', (req, res) => {
  const result = positivoNegativo(req.body.num);

  res.status(200).json({
    message: result
  });
});

app.post('/api/ex13', (req, res) => {
  const result = parImpar(req.body.num);

  res.status(200).json({
    message: result
  });
});

app.post('/api/ex14', (req, res) => {
  const result = maiorNumero(req.body.num1, req.body.num2);

  res.status(200).json({
    message: `${result}`
  });
});

app.post('/api/ex15', (req, res) => {
  const result = verificarTriangulo(req.body.num1, req.body.num2, req.body.num3, req.body.h);

  res.status(200).json({
    message: result
  });
});

app.post('/api/ex16', (req, res) => {
  const result = calcularImpostoRenda(req.body.cpf, req.body.numDep, req.body.rendaMensal);

  res.status(200).json({
    message: `Imposto: ${result}`
  });
});

app.post('/api/ex17', (req, res) => {
  const result = mediaPonderada(req.body.n1, req.body.n2, req.body.n3);

  res.status(200).json({
    message: `Média: ${result}`
  });
});

app.post('/api/ex18', (req, res) => {
  const result = custoCarro(req.body.custoCarro);

  res.status(200).json({
    message: `Carro: ${result}`
  });
});

app.post('/api/ex19', (req, res) => {
  const result = jurosCap(req.body.cap, req.body.taxa, req.body.tempo);

  res.status(200).json({
    message: result
  });
});

app.post('/api/ex20', (req, res) => {
  const result = vTotalIPI(req.body.porcentagem, req.body.cp1, req.body.vp1, req.body.qntp1, req.body.cp2, req.body.vp2, req.body.qntp2);

  res.status(200).json({
    message: `IPI: ${result}`
  });
});

/*app.post('/api/ex21', (req, res) => {
  const resultado = investigacaoCriminal(req.body.respostas);
  res.status(200).json({message: resultado});
})*/

app.post('/api/ex22', (req, res) => {
  const resultado = velMulta(req.body.velPermitida, req.body.velPraticada);

  res.status(200).json({
    message: resultado
  });
});

app.post('/api/ex23', (req, res) => {
  const resultado = escreverBatata(req.body.num);

  res.status(200).json({
    message: resultado
  });
});

app.post('/api/ex24', (req, res) => {
  const resultado = tabuadaRepeticao(req.body.num);
  res.status(200).json({
    message: resultado
  });
});

app.post('/api/ex25', (req, res) => {
  const resultado = mAltura(req.body.qntdPessoas, req.body.h);

  res.status(200).json({
    message: `Média: ${resultado}m`
  });
});

app.post('/api/ex26', (req, res) => {
  const resultado = mPesos(req.body.p);

  res.status(200).json({
    message: `Média: ${resultado}kg`
  });
});

app.post('/api/ex27', (req, res) => {
  const resultado = pElevador(req.body.p);

  res.status(200).json({
    message: resultado
  });
});

app.post('/api/ex28', (req, res) => {
  const numeros = req.body.n;
  const resultado = nNegativos(numeros);

  res.status(200).json({
    numbers: numeros, message: resultado
  });
});

app.post('/api/ex29', (_, res) => {
  res.status(200).json({
    message: `Números gerados: ${nAleatorios()}`
  });
});

app.post('/api/exercicio30', (_, res) => {
  res.status(200).json({
    message: `Números gerados: ${nAleatoriosMath()}`
  });
});

//DESAFIOS

app.post("/api/ds1", (req, res) => {
  const result = idade(req.body.num1);

  res.status(200).json({
    message: `Essa idade representa ${result}`,
  });
});

app.post("/api/ds2", (req, res) => {
  const result = troca(req.body.num1, req.body.num2);

  res.status(200).json({
    message: `A variáveis foram trocadas, ${result}`,
  });
});

app.post("/api/ds3", (req, res) => {
  const result = maior(req.body.num1, req.body.num2);

  res.status(200).json({
    message: `O maior numero é o: ${result}`,
  });
});

app.post("/api/ds4", (req, res) => {
  const result = maiorDeTres(req.body.num1, req.body.num2, req.body.num3);

  res.status(200).json({
    message: `${result}`,
  });
});

app.post("/api/ds5", (req, res) => {
  const result = anoBissexto(req.body.ano);

  res.status(200).json({
    message: `O ano: ${result}`,
  });
});

app.post("/api/ds6", (req, res) => {
  const numeros = numerosNegativosDois(req.body.numeros);
  const result = numeros;

  res.status(200).json({
    message: `${result}`,
  });
});

app.listen(3000, () => {
  console.log("Servidor na porta 3000");
});
