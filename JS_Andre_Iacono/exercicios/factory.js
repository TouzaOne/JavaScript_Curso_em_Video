// Factory nada mais é que uma fábrica de objetos...

function createBook(title, author, pages) { // factory
    const book = { // object
        bookTitle: title,
        bookAuthor: author,
        bookPages: pages, 
        printBook: function() {
            console.log('Printing...')
        }
    }
    return book
}

const book1 = createBook('Atomic', 'James', 306)
const book2 = createBook('Think', 'Napolean', 450)

book1.color = 'White and Gold' // Adicionando propriedades, mesmo fora do objeto

console.log(book1)
console.log(book2)