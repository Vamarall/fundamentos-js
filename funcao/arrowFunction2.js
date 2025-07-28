function pessoa(){
    this.idade = 0;

    setInterval( () => {
        this.idade++;
        console.log(this.idade);
    }, 1000);
}

new pessoa; // Cria uma nova instância de pessoa e inicia o contador de idade