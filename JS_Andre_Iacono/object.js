/* No aprendizado de objetos, vamos ver a importância desse tipo de variável de referência. E como ele nos ajuda bastante quando precisamos acrescentar diversas coisas em um grupo de variáveis. */

// Sem a utilização de um objeto...
let itemName = 'Pen'
let itemPrice = 3
let itemAvailable = true
let itemColor = 'Red'

// Com a utilização de um objeto...
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

// Também posso escolher o que eu quero que seja exibido na tela...
console.log(pen.itemAvailable)
console.log(pen.itemName, pen.itemPrice)