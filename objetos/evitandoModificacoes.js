// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: "Genérico", preco: 1.99, tag: "promoção"
})

console.log("Extensivel: ", Object.isExtensible(produto))

produto.nome = "Borracha" 
produto.descricao = "Borracha escolar branca" // Não será adicionado, pois o objeto não é extensível
delete produto.tag 
console.log(produto)

//Object.seal
const pessoa = {nome: 'Victor', idade: 25}
Object.seal(pessoa) // Não permite adicionar ou remover propriedades, mas permite modificar valores de propriedades existentes
console.log("Selado: ", Object.isSealed(pessoa))

pessoa.nome = 'Flavio'
pessoa.sobrenome = 'Silva' // Não será adicionado, pois o objeto está selado
delete pessoa.idade // Não será removido, pois o objeto está selado
console.log(pessoa)

//Object.freeze
const carro = {marca: 'Mercedes', modelo: 'G63 AMG', ano: 2023}
Object.freeze(carro) // Não permite adicionar, remover ou modificar propriedades
console.log("Congelado: ", Object.isFrozen(carro))

carro.ano = 2024 // Não será modificado, pois o objeto está congelado
carro.valor = 500000 // Não será adicionado, pois o objeto está congelado
delete carro.modelo // Não será removido, pois o objeto está congelado
console.log(carro)