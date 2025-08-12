for (let letras of 'Cod3er') {
    console.log(letras);
}

const assuntos = ['Map', 'Set', 'Promise']

for (let i in assuntos) {
    console.log(i); // Índice
}

for (let i of assuntos) {
    console.log(i)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for(let i of assuntosMap){
    console.log(i); // Retorna os pares chave/valor
}

for(let chave of assuntosMap.keys()){
    console.log(chave) // Retorna apenas as chaves
}

for(let valor of assuntosMap.values()){
    console.log(valor) // Retorna apenas os valores
}

for(let [ch, vl] of assuntosMap.entries()){
    console.log(ch, vl) // Retorna os pares chave/valor
}

const s = new Set(['a', 'b', 'c'])
for(let letra of s){
    console.log(letra); // Retorna os valores do Set
}