import express from 'express'
const app = express()
app.use(express.json)

const users = []

app.get('/usuarios', (req, res) => {
    res.send('Primeira rota funcionando !')
    res.json(users)
})

app.post('/usuarios', (req, res) => {
    console.log(app)
    res.send('ok deu certo !')

})

app.listen(3000)