// Requer o do módulo 'fs' para manipulação de arquivos, o modulo 'fs' é um modulo que vem embutido no Node.js
const fs = require('fs');


const caminho = __dirname + '/arquivo.json'

//sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8') // Lê o arquivo de forma síncrona

// Assíncrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo); // Converte o conteúdo lido de JSON para objeto JavaScript
    console.log(`${config.db.host}:${config.db.port}`);
})

const config = require('./arquivo.json') // Requer o arquivo JSON como um módulo, que é convertido automaticamente em objeto JavaScript
console.log(config.db);

// __dirname é uma constante que esta presente em todos os módulos do Node.js e representa o diretório atual do módulo
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...');
    console.log(arquivos);
})