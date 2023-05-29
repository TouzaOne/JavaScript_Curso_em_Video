/* No aprendizado de objetos, vamos ver a importância desse tipo de variável de referência. E como ele nos ajuda bastante quando precisamos acrescentar diversas coisas em um grupo de variáveis. */

// Sem a utilização de um objeto...
let itemName = 'Pen'
let itemPrice = 3
let itemAvailable = true
let itemColor = 'Red'

// Com a utilização de um objeto... Note que é preciso abrir {} para adicionar os elementos.
let pen = {
    itemName: 'Pen',
    itemPrice: 3,
    itemAvailable: true,
    itemColor: 'Red'
}

console.log(pen)

// Posso alterar os elementos que estão dentro do meu objeto usando o comando:
pen.itemColor = 'Black'
pen.itemPrice = 4.5

console.log(pen)

// Também posso escolher o que eu quero que seja exibido na tela... (forma mais atual e mais usada hoje em dia)
console.log(pen.itemAvailable)
console.log(pen.itemName, pen.itemPrice)

// Mas, eu também posso exibir na tela da seguinte forma... (não muito usado hoje em dia)
console.log(pen['itemPrice'])
console.log(pen['itemColor'])

// Utilizando um método (ou função) dentro de um objeto...
const produto = {
    nome: 'iPad',
    prerco: 5600,
    desconto: 0.15,
    precoComDesconto: function() {
        return preco * (1 - desconto);
    }
}

console.log(produto.precoComDesconto())