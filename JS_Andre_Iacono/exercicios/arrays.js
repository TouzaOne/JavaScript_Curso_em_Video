/* No aprendizado de Arrays (identificado sempre pela abertura de [] podemos criar uma lista de elementos que serão armazenados, cada qual, referente ao índice de origem. */

let friends = ['Silvia', 'João', 'Pedro']
console.log(friends)

// Para imprimir na tela somente o nome que vc deseja, é só acrescentar a localização, através do índice, de onde está o nome que vc quer imprimir.

console.log(friends[2])

// Também posso alterar os elementos dentro da lista...
friends[2] = 'Carla'
console.log(friends)

// Criar um elemento novo...
friends[3] = 'Tiago'
console.log(friends)

// Adicionar um elemento novo na última vaga...
friends.push(12)
friends.push(3)
console.log(friends)  

// Colocar os elementos em ordem alfabética ou crescente (se forem números)
console.log(friends.sort())

// Descobrir a quantidade total de elementos existentes dentro da lista...
console.log(`A lista em questão têm ${friends.length} elementos.`)