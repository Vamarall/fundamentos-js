function criarProduto(nome, preco, categoria = 'geral') {
    return{
        nome: nome,
        preco: preco,
        categoria: categoria,
    }
}

const prod1 = criarProduto('Notebook', 2199.49, 'eletrônicos');
console.log(prod1);

const prod2 = criarProduto('Camiseta', 29.99);
console.log(prod2);