console.log(typeof String, typeof Array, typeof Object);

//Toda funcao tem um prototype

String.prototype.reverse = function () {
    return this.split('').reverse().join('');
}

/* Nao confundir o 'reverse' que é o nome do metodo 
com o 'reverse' que é o nome do metodo do array*/

console.log('Cruzeiro maior de minas'.reverse())

Array.prototype.first = function(){
    return this[0];
}

console.log([1, 2, 3, 4, 5].first());