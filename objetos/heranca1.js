//Cadeia de prototipos
Object.prototype.attr0 = "Z"; // Avo aponta para Object.prototype
const avo = { attr1: "A" }; // Avo aponta para Object.prototype
const pai = { __proto__: avo, attr2: "B", attr3: 3 };
const filho = { __proto__: pai, attr3: "C" };

console.log(filho.attr1); // A
console.log(filho.attr0); // Z
console.log(filho.attr3); // C

const carro = {
    velAtual: 0,
    velMaxima: 200,
    acelerar(delta) {
        if (this.velAtual + delta <= this.velMaxima) {
            this.velAtual += delta;
        } else {
            this.velAtual = this.velMaxima; ß
        }

    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMaxima}Km/h`;
    }
}

const ferrari = {
    modelo: "f40",
    velMaxima: 324 // Shadowing
}

const volvo = {
    modelo: "v40",
    status(){
        return `${this.modelo}: ${super.status()}`; // super chama o método da classe pai
    }
}

Object.setPrototypeOf(ferrari, carro); // Define carro como prototipo de ferrari
Object.setPrototypeOf(volvo, carro); // Define carro como prototipo de volvo

console.log(ferrari)
console.log(volvo)

volvo.acelerar(100);
console.log(volvo.status()); // v40: 100Km/h de 200Km/h

ferrari.acelerar(300);
console.log(ferrari.status()); //200Km/h de 324Km/h
