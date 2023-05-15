/* Funções: são um grupo de tarefas ou cálculos que vc pode executar com a chamada de uma determinada function. Observe que a função tem que vir acompanhada da abertura de (), que será utilizada para passarmos os parametros. */

function saleStatus() {
    console.log('Approved')
}

saleStatus() // chamando a função...

// Passando parametros para a função...
function saleStetus(status, total) { // Aqui passamos os parametros...
    console.log(`Transaction ${status} with total amount: $${total}`)
}

saleStetus('Approved', 30) // Aqui passamos os argumentos correspondem pra cada parametro passado lá em cima.