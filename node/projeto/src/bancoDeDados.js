const sequence = {
    _id: 1,
    id() {
        return this._id++;
    }
}

const produtos = {}

function salvarProduto(produto) {
    if (!produto.id) {
        produto.id = sequence.id()
    }
    produtos[produto.id] = produto
    return produto
}

function getProduto(id){
    return produtos[id] || {}
}

function getProdutos(){
    return Object.values(produtos)
}

function excluirProduto(id){
    const prod = produtos[id]
    delete produtos[id]
    return prod
}

// Exportando as funções para serem usadas em outros arquivos
module.exports = {salvarProduto, getProduto, getProdutos, excluirProduto}