function gerarNumeroEntre(min, max, tempo) {
    if (min > max) {
        [max, min] = [min, max]
    }
    return new Promise(resolve => {
        setTimeout(() => {
            const fator = max - min + 1
            const numAleatorio = parseInt(Math.random() * fator) + min
            resolve(numAleatorio)
        }, tempo)
    })
}


function gerarVariosNumeros() {
    return Promise.all([
        gerarNumeroEntre(1, 60, 4000),
        gerarNumeroEntre(1, 60, 1000),
        gerarNumeroEntre(1, 60, 3000),
        gerarNumeroEntre(1, 60, 5000),
    ])
}

gerarVariosNumeros().then(numeros => console.log(numeros))