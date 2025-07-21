const peso1 = 1.0
const peso2 = Number('2.0') // Number() converte uma string em número

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // Verifica se é inteiro

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = peso1 * avaliacao1 + peso2 * avaliacao2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // Formata o número para 2 casas decimais
console.log(media.toString(2)) // Converte para string em binárionode numeros.js
console.log(typeof media) // Verifica o tipo de dado`