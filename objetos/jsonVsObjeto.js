/*
 * JSON vs Objeto JavaScript
 * JSON é um formato de texto para troca de dados, enquanto objetos JavaScript são estruturas de dados.
 * JSON não suporta funções, enquanto objetos JavaScript podem conter métodos.
 */


const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj)); // {"a":1,"b":2,"c":3}

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) // { a: 1, b: 2, c: 3 }
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": [] }')) // { a: 1, b: 'string', c: true, d: {}, e: [] }