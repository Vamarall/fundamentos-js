console.log(exports === this) // true
console.log(module.exports === exports) // true


this.a = 1;
exports.b = 2;
module.exports.c = 3;

console.log(module.exports) // { c: 3, a: 1, b: 2 }

exports = null; // Não altera o module.exports
console.log(module.exports) // { c: 3, a: 1, b: 2 }

module.exports = { publico: true } // Altera o module.exports
console.log(module.exports) // { publico: true }



