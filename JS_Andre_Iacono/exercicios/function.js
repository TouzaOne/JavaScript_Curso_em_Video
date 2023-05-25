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

// Podemos utilizar parâmetros DEFAULT para agilizar com mais eficiência e clareza os nossos comandos dentro de uma função... Variáveis que nós já sabemos que o seu valor é fixo, podemos passá-los, já logo, nos parâmetros lá emcima e ocultá-los lá embaixo na hora de passar-mos os argumentos... A isso chamamos de parâmetros DEFAULT... Veja:

function carLoan(loan, rate = 2.9, years = 5) {
    return (loan * rate / 100 * years) + loan
}

console.log(`O total pago ao final do financiamento do carro é de: U$${carLoan(20000)}, isso aqui na Inglaterra é claro!!`) // Note que aqui eu só precisei passar o argumento do valor do LOAN, pois os outros eu já havia definido lá emcima...

// Podemos utilizar o objeto ARGUMENTS dentro de uma função... Perceba que ele pega todos os elementos passados nos argumentos lá embaixo e faz o uso para cada um deles como ordenado pelo laço FOR...

function price() {
    let total = 0
    for (value of arguments)
        total += value
    return total
}
console.log(`O resultado do uso do meu objeto ARGUMENTS é: ${price(10, 20, 30, 40, 50)}`) // aqui são passados os argumentos que queremos usar...

// Function Expression... Que é uma função de expressão, por isso, sem nome.

const car = function() {
    console.log('Tesla')
}

car() // Note que aqui, ao invés de chamar a função, nós chamamos a variável que contêm a função sem nome dentro de si.

// Também é possível associar uma outra variável com a que já existe, levando a função que está dentro dela já imbutida... Veja:

const truck = car

truck() // Execute, e veja que o resultado é mesmo que o resultado de cima.

// HOISTING: Vale destacar aqui o processo que o JavaScript utiliza ao lidar com os comandos passados nos seus códigos. O JS sempre executará as funções em primeiro lugar, para depois dar continuidade ao restante dos comandos. E, nesse processo, dependendo do tipo de function que vc estiver utilizando, isso sim, implicará no resultado do seu programa, podendo dar erro em uma situação específica... Veja:

// Utilizando a Function Declaration...
function movie() {  // Veja que 1º é executada a função...
    console.log('The Matrix')
}
movie() // E, em 2º lugar é executada o chamado dessa função...

// Por isso, independentemente, de como escrevemos o nosso comando, na Function Declaration, o processo HOISTING sempre executará as funções primeiro... Veja:
movie()

function movie() {
    console.log('The Matrix')
}

// Isso já não ocorre quando utilizamos a Function Expression, pois a função está imbutida dentro de uma variável, por isso, o processo HOISTING não consegue encontrar a função e quando nós mudamos a localização dos comandos no código, o programa pode gerar um erro. Veja...

const bike = function() {
    console.log('Caloi')
}
bike() // Dessa forma, funciona!!! Já, do jeito abaixo, vai dar erro ao ser executado o programa... Veja...

baike()
const baike = function() {
    console.log('Caloi')
}

