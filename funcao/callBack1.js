const fabricantes = [ 'Mercedes', 'Audi', 'BMW', 'Ford', 'Chevrolet', 'Volkswagen', 'Toyota', 'Honda'];

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`);
}

// Usando a função 'forEach' para iterar sobre o array 'fabricantes'
fabricantes.forEach(imprimir); 
fabricantes.forEach((fabricante) => console.log(fabricante)); 