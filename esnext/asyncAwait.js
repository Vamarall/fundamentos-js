const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            // Evento 'data': cada vez que chega um pedaço (chunk) da resposta, ele é adicionado a 'resultado'
            res.on('data', dados => {
                resultado += dados
            })

            // Evento 'end': disparado quando todos os dados já chegaram
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })
}


let obterAlunos = async () => {
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')

    return [].concat(turmaA, turmaB, turmaC)
}

obterAlunos().then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))