const escola =  'Cod3r';

console.log(escola.charAt(4)); // Retorna o caractere na posição 4 
console.log(escola.charAt(5)); // Retorna '' (vazio) se a posição não existir
console.log(escola.charCodeAt(3)); // Retorna o código Unicode do caractere na posição 3

console.log(escola.indexOf('3')); // Retorna o índice da primeira ocorrência do caractere '3'
console.log(escola.substring(1)); // Retorna a substring a partir do índice 1
console.log(escola.substring(0, 3)); // Retorna a substring do índice 0 ao 3 (não inclusivo)

console.log('Escola '.concat(escola).concat('!')); // Concatena 'Escola' com 'Cod3r' e '!'
console.log(escola.replace('3', 'e')); // Substitui '3' por 'e'

console.log('Pedro,Maria,Jose'.split(',')); // Divide a string em um array usando ',' como delimitador