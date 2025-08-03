const jogadores = ['Lebron James', 'Stephen Curry', 'Kevin Durant', 'Kawhi Leonard'];

jogadores.pop() // Remove o último elemento do array
console.log(jogadores); // ['Lebron James', 'Stephen Curry', 'Kevin Durant']

jogadores.push('Giannis Antetokounmpo'); // Adiciona 'Giannis Antetokounmpo' ao final do array
console.log(jogadores); // ['Lebron James', 'Stephen Curry', 'Kevin Durant', 'Giannis Antetokounmpo']

jogadores.shift(); // Remove o primeiro elemento do array
console.log(jogadores); // ['Stephen Curry', 'Kevin Durant', 'Giannis Antetokounmpo']

jogadores.unshift('Luka Doncic'); // Adiciona 'Luka Doncic' ao início do array
console.log(jogadores); // ['Luka Doncic', 'Stephen Curry', 'Kevin Durant', 'Giannis Antetokounmpo']

jogadores.splice(2,0, 'James Harden'); // Adiciona 'James Harden' na posição 2 sem remover nenhum elemento
console.log(jogadores); // ['Luka Doncic', 'Stephen Curry', 'James Harden', 'Kevin Durant', 'Giannis Antetokounmpo']

jogadores.splice(1, 2); // Remove 2 elementos a partir da posição 1
console.log(jogadores); // ['Luka Doncic', 'Kevin Durant', 'Giannis Antetokounmpo']

const algunsJogadores = jogadores.slice(2) // Cria um novo array com os elementos a partir da posição 2
console.log(algunsJogadores); // ['Giannis Antetokounmpo']

const maisJogadores = jogadores.slice(1, 3) // Cria um novo array com os elementos da posição 1 até a posição 3 (não inclui a posição 3)
console.log(maisJogadores); // ['Kevin Durant', 'Giannis Antetokounmpo']