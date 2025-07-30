const pai = { nome: "Pedro", corCabelo: "preto" };

//Criando um objeto filha1 que herda de pai com Object.create(pai)
const filha1 = Object.create(pai);
filha1.nome = "Ana";
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: "Bia", writable: false, enumerable: true }
})
console.log(filha2.nome) // Bia
filha2.nome = "Carla"; // Não vai alterar o valor, pois writable é false
console.log(`Meu nome é ${filha2.nome} meu cabelo é ${filha2.corCabelo}`); // Meu nome é Bia meu cabelo é preto
console.log(`Meu nome é ${filha1.nome} e meu pai é ${filha1.__proto__.nome}`); // Meu nome é Ana e meu pai é Pedro

console.log(Object.keys(filha1)); // ['nome']
console.log(Object.keys(filha2)); // ['nome']

for (let key in filha1) {
    filha1.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`);
}