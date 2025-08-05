const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
]

// Reduce é uma função que reduz o array a um único valor, aplicando uma função acumuladora em cada elemento do array.
// O valor inicial do acumulador pode ser passado como segundo argumento do reduce.
// Se não for passado, o primeiro elemento do array será usado como valor inicial e a iteração começará a partir do segundo elemento.
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual);
    return acumulador + atual;  
}, 10)

console.log(resultado);