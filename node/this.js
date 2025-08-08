console.log(this === global); // false
console.log(this === module.exports) // true

function logThis() {
    console.log('Dentro da funcao...')
    console.log('Aponta para module.exports: ', this === module.exports) // false
    console.log('Aponta para global: ', this === global) //true
}

logThis();
