const funcs = []

for(let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()// Exibe 2, pois 'let' tem escopo de bloco, e cada iteração do loop cria uma nova variável 'i'
funcs[8]() // Exibe 8, pelo mesmo motivo acima