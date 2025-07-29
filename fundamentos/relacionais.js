console.log('01)', '1' == 1); // Comparação de igualdade (valor)
console.log('02)', '1' === 1); // Comparação de identidade (valor e tipo)
console.log('03)', '3' != 3); // Comparação de desigualdade (valor)
console.log('04)', '3' !== 3); // Comparação de não identidade (valor e tipo)

console.log('05)', 3 < 2); // Menor que
console.log('06)', 3 > 2); // Maior que
console.log('07)', 3 <= 2); // Menor ou igual
console.log('08)', 3 >= 2); // Maior ou igual

const d1 = new Date(0); // 01/01/1970
const d2 = new Date(0); // 01/01/1970

console.log('09)', d1 === d2); // Comparação de identidade (mesmo objeto)
console.log('10)', d1 == d2); // Comparação de igualdade (mesmo valor)

