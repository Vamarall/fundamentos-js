const [a] = [10];
console.log(a); // Exibe 10, pois 'a' recebe o primeiro elemento do array

const [n1, ,n2, n3, n4, n5 = 0] = [10, 20, 30, 40, 50];
console.log(n1, n2, n3, n4, n5); // Exibe 10 30 40 50 0, pois 'n5' recebe o valor padrão 0

const [, [, nota]] = [[, 8.5], [9.3, 7.8]]; 