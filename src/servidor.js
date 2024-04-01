const porta = 3004
const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')

app.use(express.json()) // para ler o corpo da requisição como JSON
app.use(express.urlencoded({ extended: true }))


app.get('/produtos', (req, res, next) => {
    const produtos = bancoDeDados.getTodosProdutos();
 
    res.send(produtos);
})

app.get('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.getProdutoPorId(req.params.id);
    if (!produto) {
        return res.status(404).send("Produto não encontrado");
    }
   
    res.send(produto);
})

app.post('/produtos', (req, res) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })


    res.send(produto);
})

app.put('/produtos/:id', (req, res) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })


    res.send(produto);
})

app.delete('/produtos/:id', (req, res) =>{
    const produto =  bancoDeDados.excluirProduto(req.params.id);
    
    if(!produto){
        return res.status(404).send('Produto não encontrado')
    }

    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})
