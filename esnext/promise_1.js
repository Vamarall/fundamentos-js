let p = new Promise(function (cumprirPromessa) {
    cumprirPromessa(['Victor', 'Maria', 'João', 'Pedro'])
})

p.then(valor => valor[0]) // Obtem o primeiro valor do array retornado pela Promise
    .then(primeiro => primeiro[0]) // Primeiro é o resultado da primeira chamada. Obtem o primeiro caractere do nome
    .then(letra => letra.toLowerCase()) // Converte a letra para minúscula
    .then(letraMinuscula => console.log(letraMinuscula)) // Imprime a letra minúscula