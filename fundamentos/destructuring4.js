function rand([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min]; // Garante que min é menor que max
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand([50, 40])); // Exibe um número aleatório entre 40 e 50
console.log(rand([992])); // Exibe um número aleatório entre 992 e 1000
console.log(rand([, 10])); // Exibe um número aleatório entre 0 e 10
console.log(rand([])); // Exibe um número aleatório entre 0 e 1000
