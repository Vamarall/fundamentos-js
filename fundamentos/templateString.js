const nome = "Rebeca";
const concatenacao = "Ola " + nome + "!";

const template = `Ola ${nome}!`;

console.log(concatenacao, template);

console.log(`1 + 1 = ${1 + 1}`); // Avalia a expressão dentro do template string

const up = s => s.toUpperCase();
console.log(`Ei... ${up("cuidado")}!`); // Chama a função up para transformar a string em maiúsculas

