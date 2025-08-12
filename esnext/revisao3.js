// Object.values/Objects.entries
const obj = { a: 1, b: 2, c: 3 }

console.log(Object.values(obj))// [1, 2, 3]
console.log(Object.entries(obj))// [['a', 1], ['b', 2], ['c', 3]]


//Class
class Animal { }
class Cachorro extends Animal {
    falar() {
        return 'Au Au'
    }
}

console.log(new Cachorro().falar()) 