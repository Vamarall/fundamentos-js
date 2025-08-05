const carrinho = [
    '{"nome": "Notebook", "preco": 2500}',
    '{"nome": "iPad", "preco": 1500}',
    '{"nome": "Celular", "preco": 1200}',
    '{"nome": "Monitor", "preco": 800}',
];

// Transformando um array de json em um array de objetos e extraindo o preço de cada produto
const paraObjeto = json => JSON.parse(json);
const getPreco = produto => produto.preco;

const novoArray = carrinho.map(paraObjeto).map(getPreco);
console.log(novoArray);
