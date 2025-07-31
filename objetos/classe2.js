class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome;
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Piloto') {
        super(sobrenome);
        this.profissao = profissao;
    }
}

class Filho extends Pai {
    constructor() {
        super('Gurgel')
    }
}

const filho = new Filho();
console.log(filho);

console.log(typeof Filho);