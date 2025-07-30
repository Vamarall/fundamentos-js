function MeuObjeto() {}

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__); // true
console.log(MeuObjeto.prototype === obj1.__proto__); // true

MeuObjeto.prototype.nome = 'Anônimo';
MeuObjeto.prototype.falar = function() {
    console.log(`Meu nome é ${this.nome}`);
};

obj1.falar(); // Meu nome é Anônimo

obj2.nome = 'João';
obj2.falar(); // Meu nome é João

const obj3 = {};
obj3.__proto__ = MeuObjeto.prototype; // Definindo o prototipo de obj3 como MeuObjeto.prototype
obj3.nome = 'Maria';
obj3.falar(); // Meu nome é Maria