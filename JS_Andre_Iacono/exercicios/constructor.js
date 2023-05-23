// CONSTRUCTOR nada mais é que um construtor de objetos, assim como o factory
// Porém, uma vantagem muito boa do constructor em cima do factory é que ele retorna automaticamente o conteúdo das variáveis direto para o objeto de origem

function CreateBook(title, author, pages) {
    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPages = pages
}
const book1 = new CreateBook('Atomic', 'James', 306)

console.log(book1)