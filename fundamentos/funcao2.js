//// Armazenando uma função em uma variável
const soma = function(a,b){
    console.log(a + b);
}

soma(2, 3); // Chama a função soma com os argumentos 2 e 3

// Armazenando uma funcao arroqw em uma variável
const imprimeSoma = (a,b) => {
    console.log(a + b);
}

imprimeSoma(2, 3); // Chama a função imprimeSoma com os argumentos 2 e 3

// Retorno implicito
const subtracao = (a,b) => a - b; 

console.log(subtracao(5, 3)); // Chama a função subtracao com os argumentos 5 e 3

const imprimir2 = a => console.log(a);
imprimir2('Teste'); // Chama a função imprimir2 com o argumento 'Teste'