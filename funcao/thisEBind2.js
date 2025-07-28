function pessoa() {
    this.idade = 0;

    const self = this; // Captura o contexto de 'this' antes de entrar no setInterval
    setInterval(function () {
        self.idade++;
        console.log(self.idade);
    }/*.bind(this)*/, 1000)
}

new pessoa