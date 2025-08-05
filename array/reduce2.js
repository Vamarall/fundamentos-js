const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false },
    {nome: 'Maria', nota: 9.2, bolsista: true },
    {nome: 'Pedro', nota: 9.8, bolsista: false },
]

// Todos os alunos são bolsistas?
const todosSaoBolsistas = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    return acumulador && atual; // acumulador será true se todos forem true e false se encontrar um false  
},true)

console.log(todosSaoBolsistas); // false, pois nem todos os alunos são bolsistas


// Algum aluno é bolsista?
const algumBolsista = alunos.map( a => a.bolsista).reduce(function(acumulador, atual){
    return acumulador || atual; // acumulador será true se encontrar pelo menos um true e false se todos forem false
})

console.log(algumBolsista); // true, pois pelo menos um aluno é bolsista