// let e var
{
    var a = 12;
    let b = 16;
    console.log(b)
}
console.log(a)
// console.log(b) // ReferenceError: b is not defined

// Template strings
const prod = 'Ipad';
console.log(`Prodtuo ${prod} é caro!`)

//destructuring
const [l, e, ...tras] = 'Cod3er';
console.log(l, e, tras); // C o [d, 3, e, r]

const [x, y] = [1, 2]
console.log(x, y)

const {nome, idade} = {nome: 'Victor', idade: 23};
console.log(nome, idade); // Victor 23