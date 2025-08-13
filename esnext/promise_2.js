function esperarPor(tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Executando promise...')
            resolve('Cruzeiro')
        }, tempo)
    })
}

let p = esperarPor(3000)
    .then(valor => console.log(valor))
