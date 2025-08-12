/* O map é uma coleção de pares chave/valor onde as chaves podem ser de qualquer tipo,
 diferentemente dos objetos que possuem chaves do tipo string ou symbol.
 */
const tecnologias = new Map();

tecnologias.set('react', { framework: false });
tecnologias.set('spring', { framework: true });

// Como acessar os valores
console.log(tecnologias.react); // undefined
console.log(tecnologias.get('react')) // { framework: false }
console.log(tecnologias.get('react').framework) // false


const chavesVariadas = new Map([
    [function () { }, 'Funcao'],
    [{}, 'Objeto'],
    [123, 'Numero']
])

chavesVariadas.forEach((valor, chave) => {
    console.log(valor, chave);
})

// has é usado para verificar se uma chave existe no Map
console.log(chavesVariadas.has(123)); // true
chavesVariadas.delete(123); // Remove a chave 123
console.log(chavesVariadas.has(123)); // false

console.log(chavesVariadas.size); // 2

// Nao é possivel usar chaves duplicadas
chavesVariadas.set(123, 'Numero')
chavesVariadas.set(123, 'Numero')

console.log(chavesVariadas)