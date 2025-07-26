console.log("a = "+ a) // Exibe 'a = undefined', pois a variável 'a' é içada (hoisted) para o topo do escopo, mas não inicializada
var a = 3 // Declaração de variável 'a' com valor 3
console.log("a = "+ a) // Exibe 'a = 3', pois agora 'a' foi inicializada com o valor 3