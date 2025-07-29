// Factory Function Example
function criarPessoa() {
    return {
        nome: 'Joao',
        idade: 92,
        salario: 1288
    }
}

// Usando a função factory para criar uma nova pessoa
const pessoa1 = criarPessoa();
console.log(pessoa1);
