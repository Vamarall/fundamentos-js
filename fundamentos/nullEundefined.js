const a = {name : 'John'};

console.log(a); // { name: 'John' }

const b = a // b é uma referência ao mesmo objeto que a
b.name = 'Doe'; // Modifica a propriedade name do objeto referenciado por b

console.log(a); // { name: 'Doe' } - a também é afetado pela modificação

let c = 3;
let d = c; // d recebe o valor de c, mas não é uma referência ao mesmo valor
d++; // Incrementa d, mas c permanece inalterado

console.log(c); // 3 - c não é afetado pela modificação de d
console.log(d); // 4 - d é incrementado

let valor; // Declaração de variável sem inicialização
console.log(valor); // undefined - valor não foi inicializado

valor = null; // Atribui null a valor, indicando ausência de valor
console.log(valor); // null - valor agora é explicitamente nulo

const produto = {}; // Objeto vazio
console.log(produto.preco); // undefined - preco não foi definido no objeto

produto.preco = null
console.log(produto.preco); // null - preco foi definido como null, indicando ausência de valor


