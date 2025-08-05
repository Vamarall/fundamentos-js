const produtos = [
    {nome: 'Notebook', preco: 2500, fragil: true},
    {nome: 'iPad', preco: 1500, fragil: true},
    {nome: 'Celular', preco: 1200, fragil: true},
    {nome: 'Monitor', preco: 800, fragil: true},
    {nome: 'Copo plastico', preco: 200, fragil: false},
    {nome: 'Camisa RL', preco: 480, fragil: false},
]

// Filtrando produtos com preço maior que 1000 e que sejam frágeis
console.log(produtos.filter(p => p.preco > 1000))

// Filtrando produtos que não são frágeis e com preço menor que 300
console.log(produtos.filter(p => p.fragil === false).filter(p => p.preco < 300))

// Outra forma de filtrar produtos que não são frágeis e com preço menor que 300
const fragil = p => p.fragil === false;
const menorQue300 = p => p.preco < 300;

// Encadeando filtros
console.log(produtos.filter(fragil).filter(menorQue300));