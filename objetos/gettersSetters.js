const pessoa = {
    nome: 'João',
    sobrenome: 'Silva',
    idade: 30,
    
    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    },
    
    set nomeCompleto(valor) {
        const partes = valor.split(' ');
        this.nome = partes[0];
        this.sobrenome = partes.slice(1).join(' ');
    }
}

console.log(pessoa.nomeCompleto); // João Silva
pessoa.nomeCompleto = 'Maria Oliveira';
console.log(pessoa.nomeCompleto); // Maria Oliveira


console.log(Object.keys(pessoa)); // ['nome', 'sobrenome', 'idade', 'nomeCompleto']
console.log(Object.values(pessoa)); // ['Maria', 'Oliveira', 30, 'Maria Oliveira']
console.log(Object.entries(pessoa)); // [['nome', 'Maria'], ['sobrenome', 'Oliveira'], ['idade', 30], ['nomeCompleto', 'Maria Oliveira']]

Object.entries(pessoa).forEach(element => {

    console.log(`${element[0]}: ${element[1]}`);
    

});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/1990'
});

pessoa.dataNascimento = '02/02/1992'; // Não vai alterar o valor, pois writable é false
console.log(pessoa.dataNascimento); // 01/01/1990
console.log(Object.entries(pessoa))