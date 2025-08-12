// Operador ... rest(juntar)/spread(espalhar)
// Usar rest com parametro de funcao

//Usar spread com obj
const funcionario = { nome: 'Maria', salario: 12345.99}
const clone = {ativo: true, ...funcionario}
console.log(clone) // { ativo: true, nome: 'Maria', salario: 12345.99 }

// Usar spread com array
const grupoA = ['Maria', 'Victoria', 'Luisa']
const grupoFinal = ['Ana', 'Beatriz', ...grupoA]
console.log(grupoFinal)