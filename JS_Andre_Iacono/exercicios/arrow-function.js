// O ARROW FUNCTION serve, basicamente, para encurtar os comandos do seu código, pois ele já carrega dentro si o RETURN... Veja no exemplo abaixo:

// Do modo normal, utilizado no último exercício de array...
const movies = [
    {id: 1, movieName: 'Dejavu'},
    {id: 2, movieName: 'Back to the Future'},
    {id: 3, movieName: 'The Matrix'}
]
console.log(movies.find(function(movie) {
    return movie.movieName == 'The Matrix'
}))

// Agora, utilizando um ARROW FUNCTION... Perceba que o return foi substituído pelo sinal de =>
console.log(movies.find(movie => movie.movieName == 'The Matrix'))