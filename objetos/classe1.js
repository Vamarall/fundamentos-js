class Lancamento {
    constructor(nome = 'Generico', valor = 0) {
        this.nome = nome;
        this.valor = valor;
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = [];

    }

    // ... significa que pode receber vários parâmetros que serao convertidos em um array
    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l));
    }

    sumario() {
        let valorTotal = 0;
        this.lancamentos.forEach(l => {
            valorTotal += l.valor;
        })

        return valorTotal;
    }
}

const salario = new Lancamento('Salario', 45000);
const contaLuz = new Lancamento('Conta de luz', -220);

const contas = new CicloFinanceiro(7, 2025);
contas.addLancamentos(salario, contaLuz);
console.log(contas.sumario());