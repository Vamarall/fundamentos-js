const contA = require('./instanciaUnica');
const contB = require('./instanciaUnica');

const contC = require('./instanciaNova')(); // () chama a função que retorna um objeto
const contD = require('./instanciaNova')(); 
contA.inc()
contA.inc()

// O valor de contA e contB é o mesmo, pois ambos referenciam o mesmo objeto
console.log(contA.valor) // 3
console.log(contB.valor) // 3

contC.inc();
// O valor de contC e contD é diferente, pois cada um é uma instância nova
console.log(contC.valor, contD.valor) // 2,1

