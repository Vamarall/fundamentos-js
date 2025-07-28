let comparaComThis = function(param){
    console.log(this === param); // Verifica se 'this' é igual ao parâmetro passado
}

comparaComThis(global); // true, pois 'this' refere-se ao objeto globalß

const obj = {};
comparaComThis = comparaComThis.bind(obj); // Vincula 'this' ao objeto 'obj'
comparaComThis(global); // false, pois 'this' agora é o objeto 'obj'
comparaComThis(obj); // true, pois 'this' é o objeto 'obj'

let comparaThisComArrow = param => console.log(this === param); 

comparaThisComArrow(global); // true, pois 'this' em arrow functions não muda
comparaThisComArrow(module.exports); // false, pois 'this' é o módulo atual
comparaThisComArrow = comparaThisComArrow.bind(obj); 
comparaThisComArrow(obj); // false, pois 'this' em arrow functions não muda