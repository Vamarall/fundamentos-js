function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco());

const carro = { preco: 49990, desc: 0.20 };

console.log(getPreco.call(carro)); // Chamada com call
console.log(getPreco.apply(carro)); // Chamada com apply

console.log(getPreco.call(carro, 0.17, '$')); // Chamada com call e parâmetros adicionais
console.log(getPreco.apply(carro, [0.17, '$'])); // Chamada com apply e parâmetros adicionais