import express from "express";
import { somar } from "./exercicios/ex1.js";
import { salario } from "./exercicios/ex2.js";
import { mediaPesos } from "./exercicios/ex3.js";
import { temperatura } from "./exercicios/ex4.js";
import { distancia } from "./exercicios/ex5.js";
import { tabuada } from "./exercicios/ex5.js";

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
  const { segundos } = req.body;

  res.json({
    message: `tempo: ${result}`,
  });
});*/

app.post("/api/ex7", (req, res) => {
  const result = tabuada(req.body.i, req.body.r);

  res.json({
    message: `tabuada: ${result}`,
  });
});

app.listen(3000, () => {
  console.log("Servidor na porta 3000");
});
