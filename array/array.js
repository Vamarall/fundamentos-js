console.log(typeof Array, typeof new Array, typeof [])

const maneira1 = new Array('Victor', 'Caua', 'Joao')
console.log(maneira1)


let maneira2 = ['Victor', 'Caua', 'Joao']
console.log(maneira2)

console.log(maneira2[0]) // Victor
console.log(maneira2[1]) // Caua
console.log(maneira2[2]) // Joao
console.log(maneira2[3]) // undefined
console.log(maneira2.length) // 3

maneira2[3] = 'Pablo'
maneira2.push('Lucas')
console.log(maneira2) // ['Victor', 'Caua', 'Joao', 'Pablo', 'Lucas']
console.log(maneira2.length) // 5

maneira2[9] = 'Gustavo'
console.log(maneira2.length) // 10
console.log(maneira2[8] === undefined) // true

console.log(maneira2) // ['Victor', 'Caua', 'Joao', 'Pablo', 'Lucas', <4 empty items>, 'Gustavo']

maneira2.sort() // Ordena os elementos do array
console.log(maneira2) // ['Caua', 'Gustavo', 'Joao', 'Lucas', 'Pablo', 'Victor']

delete maneira2[0]
console.log(maneira2[0], maneira2[1]) // undefined Caua

maneira2 = ['Victor', 'Neymar', 'Messi', 'Cristiano Ronaldo']
maneira2.splice(1, 2, 'Mbappe', 'Haaland') // Remove 2 elementos a partir do índice 1 e adiciona 'Mbappe' e 'Haaland'
console.log(maneira2) // ['Victor', 'Mbappe', 'Haaland', 'Cristiano Ronaldo']