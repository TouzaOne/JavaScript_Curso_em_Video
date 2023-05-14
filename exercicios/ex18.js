// Vetores ou Arrays (Variáveis Compostas)

let num = [5, 8, 2, 9, 4]
console.log(num)
num[5]= 1 /* Mesmo não existindo o índice 5 vc pode criá-lo dessa forma que o JavaScript entende o que vc quer fazer e cria esse novo índice dando-lhe o valor que vc atribuiu a ele. */
num.push(3) // Adiciona um número ao final do vetor
console.log(num)
num.sort() // Põe os números do vetor em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições`) // Diz o tamanho do vetor
console.log(`O valor do índice escolhido no vetor é ${num[3]}`) /* Mostra o valor que está dentro do índice selecionado */

// Utilizando Vetor com Laço FOR (no percurso do Vetor)

for (pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

// Nas versões mais recentes do JavaScript, o mesmo laço de cima pode ser simplificado dessa forma... onde IN significa DENTRO!

console.log(num)

for (pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log(num)
pos = num.indexOf(8) // indexOf verifica se existe o valor selecionado dentro do vetor em questão, retornando o índice de onde ele se encontra
console.log(`O valor 8 está na posição ${pos}`)
pos = num.indexOf(7) // Caso, seja selecionado um valor que não exista dentro do vetor em questão, ele retorna como se ele pudesse estar no índice -1 (supostamente não vísivel)
console.log(`O valor 7 está na posição ${pos}`)
// Podemos corrigir essa situação criando uma condição pra isso...
pos = num.indexOf(7)
if (pos == -1) {
    console.log('O valor não foi encontrado!!')
} else {
    console.log(`O valor 7 está na posição ${pos}`)
}