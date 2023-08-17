import express from "express"
const app = express()

app.get("/api/:userId/unknow/:personId", (req, res) => {
    const nome = req.query.personId
    const id = req.query.userId

    res.json({
        message: `queryParam ${nome}` + ` id ${id}`
    })
})

app.listen(3000, () => {
    console.log("Example app listening on port 3000!")
})