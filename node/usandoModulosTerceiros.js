const _ = require('lodash') // Importa a biblioteca Lodash e atribui à constante '_'
// Usa a função random da Lodash para gerar um número aleatório entre 1 e 1000 a cada 2 segundos
setInterval(() => console.log(_.random(100,199)), 2000) 