
const friends = ['Marcos', 'Ana', 'Júlia', 'João', 'Tiago']

// Perceba que, se eu utilizar o FOR IN, o programa me retornará os índices dos elementos...
for (n in friends){
    console.log(n)
}

// Já utilizando o FOR OF, o programa me retorna os valores que estão dentro dos elementos...
for (i of friends){
    console.log(i)
}