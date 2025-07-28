const soma = function(a, b) {
    return a + b;
}

const imprimeResultado = function(a,b, operacao = soma){
    console.log(operacao(a,b));
}

imprimeResultado(2, 3); // 5
imprimeResultado(2,3, function (x,y){
    return x - y;
})
imprimeResultado(2,3, (x,y) => x * y); 

const pessoa = {
    falar: function(){
        console.log("Opa!");
    }
}

pessoa.falar();
