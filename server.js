import express from 'express'
const app = express()

app.get('/usuarios', (req, res) => {
    res.send('Primeira rota funcionando !')
})

app.listen(3000)