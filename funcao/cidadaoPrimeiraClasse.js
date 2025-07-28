
// função normal
function func1() { }

// função anônima atribuída a uma variável
const func2 = function () { }

// função anônima dentro de um array
const array = [function (a, b) { return a + b }, func1, func2];
console.log(array[0](2, 3))

// função anônima dentro de um objeto
const obj = {}
obj.falar = function () { return "Opa!" }
console.log(obj.falar())

// função como parâmetro de outra função
function run(fun) {
    fun();
}
console.log(run(function () { console.log("Executando...") }))

// função que retorna uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2,3)(4)
