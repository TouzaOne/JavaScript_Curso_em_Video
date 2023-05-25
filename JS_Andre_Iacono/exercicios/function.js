/* Funções: são um grupo de tarefas ou cálculos que vc pode executar com a chamada de uma determinada function. Observe que a função tem que vir acompanhada da abertura de (), que será utilizada para passarmos os parametros. Existem, basicamente, 2 tipos de functions... Veja: */

// Function Declaration... Onde vc têm que declarar o nome da função em questão.

function saleStatus() {
    console.log('Approved')
}

saleStatus() // chamando a função...

// Passando parametros para a função...
function saleStetus(status, total) { // Aqui passamos os parametros...
    console.log(`Transaction ${status} with total amount: $${total}`)
}

saleStetus('Approved', 30) // Aqui passamos os argumentos correspondem pra cada parametro passado lá em cima.

// Função executando cálculos matemáticos...
function percentage10(price) {
    return price - (price * 10/100)
}

console.log(percentage10(48)) // Chamando a função e exibindo-a direto na tela.

// Function Expression... Que é uma função de expressão, por isso, sem nome.

const car = function() {
    console.log('Tesla')
}

car() // Note que aqui, ao invés de chamar a função, nós chamamos a variável que contêm a função sem nome dentro de si.

// Também é possível associar uma outra variável com a que já existe, levando a função que está dentro dela já imbutida... Veja:

const truck = car

truck() // Execute, e veja que o resultado é mesmo que o resultado de cima.
