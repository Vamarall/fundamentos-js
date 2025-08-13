const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function lerDoArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, 'utf-8', (err, conteudo) => {
            if (err) {
                resolve(`Erro ao ler o arquivo: ${err.message}`)
            }
            else {
                resolve(conteudo)
            }
        })
    })
}

lerDoArquivo(caminho).then(conteudo => console.log(conteudo))