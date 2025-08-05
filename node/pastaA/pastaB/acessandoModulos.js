// Importa o módulo A de dois níveis acima e atribui à constante 'moduloA'
const moduloA = require('../../moduloA'); // Para sair de uma pasta se usa ../
console.log(moduloA)

// Importa o modulo saudacao e vai ser procurado o arquivo index.js dentro da pasta saudacao
const saudacao = require('saudacao')
console.log(saudacao.saudacao) 

const http = require('http') // Importa o módulo http do Node.js


// ./ para acessar um arquivo na mesma pasta e ja que o arquivo é index.js ele é implicito
const c = require('./pastaC')
console.log(c.saudacao)

// Cria um servidor HTTP que responde com "Ola mundo!" para todas as requisições
http.createServer((req, res) => {
    res.write('Ola mundo!')
    res.end() // Encerra a resposta

}).listen(8080) 