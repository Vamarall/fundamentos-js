
const pessoa = {
    nome: 'João',
    idade: 30,
    endereco: {
        rua: 'Rua A',
        numero: 123
    }
}

const { nome, idade } = pessoa;
console.log(nome, idade);

const {nome : n, idade: i} = pessoa;
console.log(n, i);

const { endereco: { rua, numero } } = pessoa;
console.log(rua, numero);

const {sobrenome, bemHumorado = true} = pessoa;
console.log(sobrenome, bemHumorado); // undefined true