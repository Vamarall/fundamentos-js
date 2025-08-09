const porta = 3003;


const express = require('express');
const app = express()

const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true })) // Permite receber dados no formato URL-encoded

app.get('/produtos', (req, resp) => {
    resp.send(bancoDeDados.getProdutos()); // Envia um objeto JSON como resposta
})

app.get('/produtos/:id', (req, resp) => {
    resp.send(bancoDeDados.getProduto(req.params.id)); // Envia um objeto JSON como resposta
})

app.post('/produtos', (req, resp) => {
    const novoProduto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })

    resp.send(novoProduto) // Envia o produto criado como resposta
})

app.delete('/produtos/:id', (req, resp) => {
    const produtoExcluido = bancoDeDados.excluirProduto(req.params.id);
    resp.send(produtoExcluido) // Envia o produto excluído como resposta
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})