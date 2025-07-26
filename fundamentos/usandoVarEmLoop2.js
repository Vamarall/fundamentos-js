const funcs = []

for(var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]() // Exibe 10, pois 'var' não tem escopo de bloco, e o loop já terminou quando a função é chamada
funcs[8]() // Exibe 10, pelo mesmo motivo acima
