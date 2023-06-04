let startInput = document.getElementById('start')
let endInput = document.getElementById('end')
let outputDiv = document.getElementById('output')
let listPutDiv = document.getElementById('listput')

function showEvenNumbers() {
    let start = Number(startInput.value)
    let end = Number(endInput.value)

    let i = start
    let output = 0    
    let listput = [0]

    while (i <= end) {
        if (i % 2 == 0) {
        output = output + i + ' '         
        outputDiv.innerHTML = output        
        }        
        i++ 
        listput = output
        listPutDiv.innerHTML = `A sequência têm ${listput.length} números pares`
    }
    
}