const nums = [1,2,3,4,5];

// Map gera um novo array aplicando uma função a cada elemento do array original.
const resultMap = nums.map(x => x * 2);
console.log(resultMap, nums); // [2, 4, 6, 8, 10] // O array original permanece inalterado.

// Funcoes para aplicar com map
const soma = x => x + 10;
const triplo = x => x * 3;
const paraDinheiro = x => `R$ ${x.toFixed(2).replace('.', ',')}`;

// Aplicando as funções com map
const mapSoma = nums.map(soma);
const mapTriplo = nums.map(triplo);
const mapParaDinheiro = nums.map(paraDinheiro);

console.log(mapSoma);
console.log(mapTriplo);
console.log(mapParaDinheiro);

// Encadeando map para aplicar várias transformações
const mapEncadeado = nums.map(soma).map(triplo).map(paraDinheiro);
console.log(mapEncadeado); // ['R$ 33,00', 'R$ 36,00', 'R$ 39,00', 'R$ 42,00', 'R$ 45,00']