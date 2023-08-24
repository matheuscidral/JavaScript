import express from "express";
import { somar } from "./exercicios/exercicio1.js";
import { salario } from "./exercicios/exercicio2.js";
import { mediaPesos } from "./exercicios/exercicio3.js";
import { temperatura } from "./exercicios/exercicio4.js";
import { distancia } from "./exercicios/exercicio5.js";

const app = express();
app.use(express.json());

app.post("/api/exercicio1", (req, res) => {
  const result = somar(req.body.num1, req.body.num2);

  res.json({
    message: `resultado: ${result}`,
  });
});

app.post("/api/exercicio2", (req, res) => {
  const result = salario(req.body.ht, req.body.vh);

  res.json({
    message: `salario: ${result}`,
  });
});

app.post("/api/exercicio3", (req, res) => {
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

app.post("/api/exercicio4", (req, res) => {
  const result = temperatura(req.body.c);

  res.json({
    message: `temperatura: ${result}`,
  });
});

app.post("/api/exercicio5", (req, res) => {
  const result = distancia(req.body.m);

  res.json({
    message: `distancia: ${result}`,
  });
});

app.post("/api/exercicio6", (req, res) => {
  const { segundos } = req.body;

  if (segundos === undefined || segundos < 0) {
    return res
      .status(400)
      .json({
        error:
          "O campo 'segundos' é obrigatório e deve ser um número positivo válido.",
      });
  }

  const result = tempo(segundos);

  res.json({
    message: `tempo: ${result}`,
  });
});

app.listen(3000, () => {
  console.log("Servidor na porta 3000");
});
