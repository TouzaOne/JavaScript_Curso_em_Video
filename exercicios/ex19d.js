// Função em JavaScript

/* Podemos criar uma função para calcular o fatorial de um número. Veja no exemplo abaixo utilizando o fatorial de 5.
5! = 5 x 4 x 3 x 2 x 1 = 120 */

function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

/* Também podemos simplificar essa função utilizando o conceito de RECURSIVIDADE, que aproveita o fatorial do número anterior ao que vc escolheu para acelerar todo o processo. Onde, usando o próprio exemplo do caso acima, teremos:
5! = 5 x 4 x 3 x 2 x 1 = 120 => que é o mesmo que:
5! = 5 x 4! = 120 -> podendo ser representado na seguinte fórmula:
n! = n x (n-1)! 
Exceto no caso do número sendo 1, pois o fatorial de 1 é 1 mesmo. */

function fatorial(n) {
    if (n ==1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))