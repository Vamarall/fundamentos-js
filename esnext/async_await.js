function esperarPor(tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Executando promise...')
            resolve()
        })
    }, tempo)
}


function imprimirValor() {
    return new Promise(resolve => {

        setTimeout(() => resolve(10), 5000)

    })
}


async function executar() {

    let valor = await imprimirValor()

    await esperarPor(1500)
    console.log(`Async/Await... Valor: ${valor}`)

    await esperarPor(1500)
    console.log(`Async/Await 2... Valor: ${valor + 1}`)

    await esperarPor(1500)
    console.log(`Async/Await 3... Valor: ${valor + 2}`)

    return valor + 3;

}


executar().then(console.log)