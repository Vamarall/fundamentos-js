const fs = require('fs');

const produto = {
    nome: 'Audi R8',
    preco: 1500000,
    potencia: 640
}
// nome_diretorio + arquivo_que_será_criado.json, o que sera escrito, funcao callback que gera o erro ou sucesso
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), (err) => {
    console.log(err || 'Arquivo salvo com sucesso!');
})