
// Note que para descrever os objetos contidos num livro, eu teria que descrever todos eles de forma separada, criando uma variável pra cada...
let bookTitle = 'Atomic Habits'
let bookAuthor = 'James Clear'
let bookPages = 306

// Já, utilizando um OOP, todas as informações que eu necessito ficam bem organizadas dentro do próprio objeto... e, perceba que também é possível criar funções dentro do objeto...

const book = {
    bookTitle: 'Atomic Habits',
    bookAuthor: 'James Clear',
    bookPages: 306,
    bookChapters: {
        chap1: 'Fundamentals',
        chap2: '1st law'
    },
    printBook: function() {
        console.log('Printing...')
    }
}

book.printBook()