const express = require("express");
const { somar } = require("./exercicios/ex1.js");
const { salario } = require("./exercicios/ex2.js");
const { mediaPesos } = require("./exercicios/ex3.js");
const { temperatura } = require("./exercicios/ex4.js");
const { distancia } = require("./exercicios/ex5.js");
//const { tempo } = require ("./exercicios/ex6.js");
const { tabuada } = require("./exercicios/ex8.js");

const app = express();
app.use(express.json());

app.post("/api/ex1", (req, res) => {
  const result = somar(req.body.num1, req.body.num2);

  res.json({
    message: `resultado: ${result}`,
  });
});

app.post("/api/ex2", (req, res) => {
  const result = salario(req.body.ht, req.body.vh);

  res.json({
    message: `salario: ${result}`,
  });
});

app.post("/api/ex3", (req, res) => {
  const result = mediaPesos(
    req.body.p1,
    req.body.p2,
    req.body.p3,
    req.body.p4,
    req.body.p5
  );

  res.json({
    message: `media: ${result}`,
  });
});

app.post("/api/ex4", (req, res) => {
  const result = temperatura(req.body.c);

  res.json({
    message: `temperatura: ${result}`,
  });
});

app.post("/api/ex5", (req, res) => {
  const result = distancia(req.body.m);

  res.json({
    message: `distancia: ${result}`,
  });
});

/*app.post("/api/ex6", (req, res) => {
  const { result } = req.body;

  res.json({
    message: `tempo: ${result}`,
  });
});*/

app.post("/api/ex8", (req, res) => {
  const result = tabuada(req.body.t);

  res.json({
    message: "tabuada:",
    results: result,
  });
});

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

app.listen(3000, () => {
  console.log("Servidor na porta 3000");
});
