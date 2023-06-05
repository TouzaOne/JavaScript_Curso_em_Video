let num = document.getElementById('num')
let resultNumber = document.getElementById('result')
let checkNumber = document.getElementById('check')

checkNumber.addEventListener('click', function() {
    let number = Number(num.value)
    
    if (number >= 1 && number <= 10) {
        resultNumber.innerHTML = 'The number is valid!!'
    } else if (number < 1) {
        resultNumber.innerHTML = 'The number is invalid!!'
    } else if (number > 10) {
        resultNumber.innerHTML = 'The number is invalid!!'
    }

    num.value = ''
})