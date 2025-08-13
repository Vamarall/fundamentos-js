function gerarNumeroEntre(min, max, numerosProibidos) {
    if (min > max) {
        [max, min] = [min, max]
    }

    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const numAleatorio = parseInt(Math.random() * fator) + min
        if (numerosProibidos.includes(numAleatorio)) {
            reject(`Número ${numAleatorio} repitido!`)

        } else {
            resolve(numAleatorio)
        }

    })
}


async function gerarMegaSena(qtdeNumeros) {
    try {
        const numeros = []
        for (let i of Array(qtdeNumeros).fill()) {
            numeros.push(await gerarNumeroEntre(1, 60, numeros))
        }
        return numeros;
    } catch (e) {
        throw 'Que chato! ' + e
    }
}

gerarMegaSena(10)
    .then(console.log)
    .catch(console.log)