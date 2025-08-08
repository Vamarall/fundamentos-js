const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios'); // axios é uma biblioteca para fazer requisições HTTP


const chineses = f => f.pais === 'China';
const genero = f => f.genero === 'F';
const menorSalario = ((menor, funcAtual) => {
    return funcAtual.salario < menor.salario ? funcAtual : menor;
})

// axios.get(url) faz uma requisição GET para a URL fornecida
axios.get(url).then(response => {
    const funcionarios = response.data;
    //gconsole.log(funcionarios);

    const result = funcionarios.filter(chineses).filter(genero).reduce(menorSalario);
    console.log(result);

})


console.log(menorSalario);