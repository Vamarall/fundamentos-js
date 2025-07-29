class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    falar() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

const pessoa1 = new Pessoa('Joao', 19);
pessoa1.falar();

function criarPessoa(nome,idade){
    return{
        nome: nome,
        idade: idade,
        falar() {
            console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
        }
    }
}

const pessoa2 = criarPessoa('Maria', 25);
pessoa2.falar();