function facrtory(nome, idade, salario) {
    return {
        nome: nome,
        idade: idade,
        salario: salario,
        falar() {
            console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e ganho R$ ${this.salario}.`);
        },
        aniversario() {
            this.idade++;
            console.log(`Parabéns ${this.nome}, agora você tem ${this.idade} anos!`);
        }
    };
}

const pessoa1 = facrtory('João', 30, 2000);
const pessoa2 = facrtory('Maria', 25, 2500);

console.log(pessoa1, pessoa2);
console.log(pessoa1.falar(), pessoa2.falar());
console.log(pessoa1.aniversario(), pessoa2.aniversario());


function produto(nome, codigo, preco) {
    this.nome = nome;
    this.codigo = codigo;
    this.preco = preco;
    this.desconto = 0.1; // 10% de desconto

    this.aplicarDesconto = function() {
        return this.preco - (this.preco * this.desconto);
    };

    this.exibirDetalhes = function() {
        console.log(`Produto: ${this.nome}, Código: ${this.codigo}, Preço: R$ ${this.preco.toFixed(2)}, Preço com Desconto: R$ ${this.aplicarDesconto().toFixed(2)}`)
    }

}

const produto1 = new produto('Notebook', '12345', 3000);
const produto2 = new produto('Smartphone', '67890', 1500);
console.log(produto1, produto2);

const fromJSON = JSON.parse('{"nome": "Carlos", "idade": 28, "salario": 3000}');
console.log(fromJSON.nome, fromJSON.idade, fromJSON.salario);

