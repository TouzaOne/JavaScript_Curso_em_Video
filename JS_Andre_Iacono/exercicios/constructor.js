// CONSTRUCTOR nada mais é que um construtor de objetos, assim como o factory
// Porém, uma vantagem muito boa do constructor em cima do factory é que ele retorna automaticamente o conteúdo das variáveis direto para o objeto de origem

function CreateBook(title, author, pages) {
    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPages = pages
}
const book1 = new CreateBook('Atomic', 'James', 306)

console.log(book1)

// Mais um exemplo...

function Data(dia = 24, mes = 3, ano = 1984) {
    this.day = dia;
    this.month = mes;
    this.year = ano;
    this.exibir = function() {
        return `${this.day}/${this.month}/${this.year}`
    }
}

const d1 = new Data()
const d2 = new Data(this.day, 7, this.year)
const d3 = new Data(9, 7, 2010)

console.log(`Tiago nasceu em: ${d1.exibir()}`)
console.log(`Darla nasceu em: ${d2.exibir()}`)
console.log(`Pedro nasceu em: ${d3.exibir()}`)