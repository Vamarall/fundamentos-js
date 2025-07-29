const notas = [10, 6.5, 8, 7.5];

//Sem callback
const notasBaixas1 = [];
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i]);
    }
}
console.log(notasBaixas1);

//Com callback

const notasBaixas2 = notas.filter(nota => nota < 7);
console.log(notasBaixas2);