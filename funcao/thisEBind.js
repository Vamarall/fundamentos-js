const pessoa = {
    saudacao: "Fala Pessoal!",
    falar() {
        console.log(this.saudacao); // this refere-se ao objeto pessoa
    }

}

// Bind é usado para vincular o contexto de 'this' a uma função 
const falarDePessoa = pessoa.falar.bind(pessoa); 
falarDePessoa(); // Fala Pessoal!