function soma(){
    let soma = 0;
    for(i in arguments){
        soma += arguments[0];
    }
    return soma;
}

console.log(soma(1, 2, 3, 4, 5)) // 15
console.log(soma(1, 2)) // 2
console.log(soma()) // 0
console.log(soma('q', 'w', 'e')) //0 + 'q' + 'w' + 'e' = '0qwe'