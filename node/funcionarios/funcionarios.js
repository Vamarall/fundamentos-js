const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios'); // axios é uma biblioteca para fazer requisições HTTP

// axios.get(url) faz uma requisição GET para a URL fornecida
axios.get(url).then(response => {
    const funcionarios = response.data;
    console.log(funcionarios);
})