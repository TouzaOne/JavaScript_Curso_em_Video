// Dentro do JavaScript podemos usar um conceito que vem de outras linguagens de programação que é o CLASS (classe), que nada mais é que uma função construtora, ou seja, têm o mesmo princípio do CONSTRUCTOR.

class Data { // Podemos considerar como a "planta da casa"
    constructor(day = 1, month = 1, year = 1970) {
        this.day = day,
        this.month = month,
        this.year = year
    }
    exibir() {
        return `${this.day}/${this.month}/${this.year}`
    }
}

const d1 = new Data()
console.log(d1)

d1.day = 24
d1.month = 3
d1.year = 1984
console.log(d1)
console.log(d1.exibir())

console.log(typeof d1)
console.log(typeof Data)

// A partir daqui, podemos criar quantos objetos quisermos, bastando passar os novos parâmetros e os métodos (funções) que iremos usar dentro desses novos objetos... aproveitando assim, a "planta da casa" que já foi estabelecida lá em cima...

const d2 = new Data(9, 7, 2010)
console.log(d2)
console.log(d2.exibir())

const d3 = new Data(31, 5, 2023) // Dia em que estou aprendendo esse conteúdo...
console.log(d3)
console.log(d3.exibir())

const d4 = new Data(1, 6, 2023) // Dia em que o Flamengo meteu 2x0 no flu..kkkk
console.log(d4)
console.log(`Dia em que o Flamengo eliminou o flu por 2 x 0 na Copa do Brasil: ${d4.exibir()}`)