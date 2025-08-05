let a = 2; // Visivel apenas dentro do moduloB.js

// Exporta um objeto com propriedades e métodos
module.exports = {
    bomDia: 'Bom dia!',
    boaNoite() { return 'Boa noite!'}
}