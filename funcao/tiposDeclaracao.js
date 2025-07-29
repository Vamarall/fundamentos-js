console.log(soma(2, 3)) // é possível chamar a função antes de sua declaração pois o JavaScript carrega todas as declarações de função antes de executar o código 
//console.log(sub(2, 3)) // ReferenceError: Cannot access 'sub' before initialization
// console.log(mult(2, 3)) // ReferenceError: Cannot access 'mult' before initialization

// function declaration
function soma(a, b) {
    return a + b;
}

// function expression
const sub = function (a, b) {
    return a - b;
}
console.log(sub(2,3))

// named function expression
const mult = function mult(a, b) {
    return a * b;
}
console.log(mult(2,3))
