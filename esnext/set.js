// Nao aceita repeticao/nao é indexada
const times = new Set();

times.add('Vasco');
times.add('Flamengo').add('Fluminense').add('Botafogo');
times.add('Vasco'); // Não adiciona, pois já existe

console.log(times); // Set { 'Vasco', 'Flamengo', 'Fluminense', 'Botafogo' }
console.log(times.size); // 4
console.log(times.has('Vasco')); // true
times.delete('Flamengo');
console.log(times.has('Flamengo')); // false

const nomes = ['Lucas', 'Henrique', 'Arthur', 'Ian', 'Lucas']
const nomesSet = new Set(nomes);
console.log(nomesSet)