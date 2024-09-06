import express from 'express'
const app = express()
app.use(express.json)

app.get('/usuarios', (req, res) => {
    res.send('Primeira rota funcionando !')
})

app.post('/usuarios', (req, res) => {
    res.send('ok deu certo !')

})

app.listen(3000)