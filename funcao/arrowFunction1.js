// Função tradicional
let dobro = function (a) {
    return 2 * a;
}

// Arrow Function
dobro = (a) => {
    return 2 * a;
}

// Arrow Function simplificada
dobro = a => 2 * a;
console.log(dobro(Math.PI).toFixed(2)); // 6.28

let ola = function(){
    return 'Olá';
}

ola = () => 'Olá';
console.log(ola()); // Olá
