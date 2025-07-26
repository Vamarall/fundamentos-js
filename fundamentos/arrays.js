const valores = [1, 2, 3, 4, 5];

console.log(valores[0], valores[3]); // Acessa os elementos do array pelos índices
console.log(valores[5]); // Acessa um índice que não existe, retornando undefined

valores[5] = 10; // Adiciona um novo elemento no índice 5
console.log(valores); // Exibe o array atualizado
console.log(valores.length); // Exibe o tamanho do array

console.log(valores.pop()); // Remove o último elemento do array e o exibe
delete valores[0]; // Remove o elemento no índice 0
console.log(valores); // Exibe o array após a remoção

console.log(typeof valores); // Exibe o tipo do array, que é 'object'