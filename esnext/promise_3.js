function gerarNumeroEntre(min, max) {
    if (min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        const fator = max - min + 1
        const numAleatorio = parseInt(Math.random() * fator) + min
        resolve(numAleatorio)
    })
}

let p = gerarNumeroEntre(10, 20)
    .then(num => num * 10)
    .then(numX10 => `O numero gerado foi ${numX10}`)
    .then(console.log)