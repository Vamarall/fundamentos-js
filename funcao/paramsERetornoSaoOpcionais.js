function calcArea(altura, largura) {
    const area = altura * largura;
    if (area > 20) {
        console.log(`Valor acima do permitido : ${area}m2`);
    } else {
        return area;
    }
}

console.log(calcArea(2, 3)); //6
console.log(calcArea(2)); //NaN
console.log(calcArea()); //NaN
console.log(calcArea(2, 3, 4)); // Passando mais argumentos do que o esperado
console.log(calcArea(5, 5)) // Valor acima do permitido : 25m2