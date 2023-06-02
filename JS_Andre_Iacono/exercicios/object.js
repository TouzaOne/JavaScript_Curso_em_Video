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
    preco: 5600,
    desconto: 0.25,
    precoComDesconto: function() { // nesse caso, temos que referenciar os atributos à eles mesmos, utilizando pra isso, o atributo THIS...
        return this.preco * (1 - this.desconto)
    }
}

console.log(produto.nome)
console.log(produto.precoComDesconto())

// No JavaScript, eu também posso criar novos elementos dentro do meu objeto de forma dinâmica, ou seja, sem precisar acessar o objeto em si... Veja:

produto.color = 'Silver'
produto.screen = 'FullHD'

console.log(produto)

// Podemos também construir, dentro de um mesmo objeto, vários outros objetos com arrays e assim por diante... à isso dá-se o nome de FORMA LITERAL... Veja:

const cliente = {
    codigo: 1654,
    nome: 'Ana',
    vip: true,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 123,
        complemento: 'Apt 101 Bloco B',
        pontosRef: [
            'Próximo ao Hospital X',
            'Atrás da Igreja Y',
            'Em frente a rodoviária'
        ]
    },
    nomeFilhos: ['Bia', 'Carlos', 'Gabriel']    
}

console.log(`A cliente ${cliente.nome} que mora com os seus filhos: ${cliente.nomeFilhos[1]} e ${cliente.nomeFilhos[2]} no endereço: ${cliente.endereco.logradouro}, ${cliente.endereco.numero}, tendo como ponto de referência: ${cliente.endereco.pontosRef[2]}`)

// Exercício de fixação de conteúdo...
const nascimento = {
    nome: 'Tiago',
    dia: 24,
    mes: 03,
    ano: 1984,
    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}    
    
console.log(`${nascimento.nome} nasceu em ${nascimento.exibir()} no estado do Rio de Janeiro!`)

nascimento.nome = 'Darla'
nascimento.mes = 7

console.log(`${nascimento.nome} nasceu em ${nascimento.exibir()} no estado do Rio de Janeiro!`)

// Também podemos usar uma função e dentro dela colocar um ou vários objetos..

function criarData(dia, mes, ano) {
    return {
        dia: dia,
        mes: mes,
        ano: ano,
        exibir: function() {
            return `${this.dia}/${this.mes}/${this.ano}`
        }
    }
}

const d1 = criarData(24, 03, 1984)
const d2 = criarData(24, 07, 1984)
const d3 = criarData(09, 07, 2010)

console.log(d1.exibir())
console.log(d2.exibir())
console.log(d3.exibir())

// Simplificando um pouco o código de cima, temos...

function criarData(dia, mes, ano) {
    return {
        dia,
        mes,
        ano,
        exibir() {
            return `${this.dia}/${this.mes}/${this.ano}`
        }
    }
}
const d4 = criarData(24, 3, 1984)
const d5 = criarData(24, 7, 1984)
const d6 = criarData(9, 7, 2010)

console.log(d1.exibir())
console.log(d2.exibir())
console.log(d3.exibir())