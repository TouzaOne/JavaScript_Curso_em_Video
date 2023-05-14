// Função em JavaScript

function parimpar(n) {
    if (n%2 == 0) {
        return 'É Par!'
    } else {
        return 'É ímpar!'
    }
}
/* Para a função ter êxito no JS precisamos fazer uma chamada para ela. E isso pode ser feita de 2 formas... a 1ª é essa aí de baixo... armazenando dentro de uma variável o resultado da função. */

let res = parimpar(4)
console.log(res)

// E, a 2ª é essa aí abaixo... jogando diretamente o resultado no console.

console.log(parimpar(4))