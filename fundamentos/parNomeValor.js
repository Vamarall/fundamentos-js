const saudacao = "Opa";

function exectar(){
    const saudacao = "Falaaa";
    return saudacao;
}

const cliente = {
    nome: "pedro",
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "Rua muito legal",
        numero: 123
    }
}

console.log(saudacao); // Opa
console.log(exectar()); // Falaaa
console.log(cliente); // Exibe o objeto cliente com suas propriedades