// Uma factory que retorna um objeto com uma propriedade e um método
module.exports = () => {
    return {
        valor: 1,
        inc(){
            this.valor++;
        }
    }
}