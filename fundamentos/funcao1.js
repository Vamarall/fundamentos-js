function imprimeSoma(a, b) {
    console.log(a + b);
}

imprimeSoma(2, 3); // Chama a função com os argumentos 2 e 3

function soma(a, b = 0) {
    return a + b; // Retorna a soma de a e b, com b tendo valor padrão 0
}

console.log(soma(2, 3)); // Exibe a soma de 2 e 3
console.log(soma(2)); // Exibe a soma de 2 e 0 (valor padrão de b)