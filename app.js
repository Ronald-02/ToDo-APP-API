const express = require ('express');
const app = express();
const port = 3000


app.get('/', (req, res) => {
    res.send('Rota ativada com GET: retorna dados dos usuários')
});

app.get('/', (req, res) => {
    res.send('Rota ativada com GET: retorna dados das tarefas')
});

app.listen(port, () => {
    console.log(`Porta: ${port}`)
})