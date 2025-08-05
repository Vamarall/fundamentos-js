const moduloA = require('./moduloA') // Importa o módulo A e atribui à constante 'moduloA'
const moduloB = require('./moduloB') // Importa o módulo B e atribui à constante 'moduloB'

// O caminho ./ indica que o módulo está no mesmo diretório

console.log(moduloA.falar) // Acessa a propriedade 'falar' do módulo A
console.log(moduloA.bemVindo)
console.log(moduloA.olaNode) 
console.log(moduloA) // Exibe o objeto completo do módulo A

console.log(moduloB.bomDia) // Acessa a propriedade 'bomDia' do módulo B
console.log(moduloB.boaNoite()) // Chama a função 'boaNoite' do módulo B
console.log(moduloB) // Exibe o objeto completo do módulo B
