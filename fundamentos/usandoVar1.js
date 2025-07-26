{
    {
        { var numero = 20 }
        console.log(numero); // 20
    }
}
console.log(numero); // 20

function teste() {
    var numero2 = 123;
    console.log(numero2); // 123
}

teste();
// console.log(numero2); // Descomentar esta linha causaria um erro, pois numero2 não está definido no escopo global