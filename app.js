import express from 'express'
import { somar } from './exercicios/exercicio1.js'
const app = express()
app.use(express.json())

app.post('/api/exercicio1', (req, res) => {
    const result = somar(req.body.num1, req.body.num2)

    res.json({
        message: `resultado: ${result}`,
    })
})

app.listen(3000, () => {
    console.log('Servidor na porta 3000')
})
