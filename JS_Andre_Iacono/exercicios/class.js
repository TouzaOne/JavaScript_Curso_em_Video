// Dentro do JavaScript podemos usar um conceito que vem de outras linguagens de programação que é o CLASS (classe), que nada mais é que uma função construtora, ou seja, têm o mesmo princípio do CONSTRUCTOR.

class Data { // Podemos considerar como a "planta da casa"
    constructor(day = 1, mounth = 1, year = 1970) {
        this.day = day,
        this.mounth = mounth,
        this.year = year
    }
    exibir() {
        return `${this.day}/${this.mounth}/${this.year}`
    }
}

const d1 = new Data()
console.log(d1)

d1.day = 24
d1.mounth = 3
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