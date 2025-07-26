let numero = 1
{
    let numero = 2
    console.log("dentro = " + numero); // 2
}
console.log("fora = " + numero); // 1

// O uso de 'let' permite que a variável 'numero' tenha escopo de bloco
// e não afete a variável 'numero' definida fora do bloco.
