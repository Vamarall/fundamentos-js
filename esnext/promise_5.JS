function funcionaOuNao(valor, chance) {
    return new Promise((resolve, reject) => {
        if (Math.random() < chance) {
            reject('Ocorreu um erro.')
        } else {
            resolve(valor)
        }
    })
}


funcionaOuNao('Cruzeiro hepta campeao copa do brasil 2025', 0.1)
    .then(console.log)
    .catch(err => console.log(`Erro: ${err}`))

 
funcionaOuNao('Atletico mineiro é legal', 1)
    .then(console.log,
        err => console.log(`Erro esperado: ${err}`)
    )
    .then(() => console.log('Quase fim'))
    .catch(err => console.log(`Erro: ${err}`))  
    .then(() => console.log('Fim.'))