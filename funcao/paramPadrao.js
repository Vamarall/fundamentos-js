// Gerar valor padrao com ||
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(2), soma1(2, 3), soma1(2, 3, 4)) // 3, 4, 6, 9


// Gerar valor padrao com operador ternário
function soma2(a, b, c) {
    a = a != undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? c : 1
    return a + b + c;
}

console.log(soma2(), soma2(2), soma2(2, 3), soma2(2, 3, 4)) // 3, 4, 6, 9

// valor padrao do ES2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c;
}

console.log(soma3(), soma3(2), soma3(2, 3), soma3(2, 3, 4)) // 3, 4, 6, 9


