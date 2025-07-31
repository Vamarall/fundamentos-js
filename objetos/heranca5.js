function Aula(nomeAula, idAula){
    this.nomeAula = nomeAula;
    this.idAula = idAula;
}

const aula1 = new Aula('Herança', 1);
const aula2 = new Aula('Objetos', 2);

console.log(aula1, aula2);

//Simulando o new
function novo(f, ...params) {
    const obj = {};
    obj.__proto__ = f.prototype; // Define o protótipo do objeto como o prototype da função
    f.apply(obj, params);
    return obj
}

const aula3 = novo(Aula, 'Array', 3);
const aula4 = novo(Aula, 'String', 4);

console.log(aula3, aula4);