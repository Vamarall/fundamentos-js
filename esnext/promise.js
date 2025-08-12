function falarDe(segundos, frase){
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDe(3, 'Cruzeiro')
.then( frase => frase.concat(' é o melhor time do mundo!'))
.then(frase => console.log(frase))
.catch(e => console.log(e))