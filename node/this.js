console.log(this === global); // false
console.log(this === module.exports) // true

function logThis(){
    console.log('Dentro da funcao...')
    console.log(this === module.exports) // false
    console.log(this === global) //true
}

logThis();
