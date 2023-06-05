let num = document.getElementById('num')
let resultNumber = document.getElementById('result')
let i = 0

function shomNumber() {
    if (num >= 0 && num <= 10) {
        resultNumber = num
        resultNumber.innerHTML = 'The number is valid!!'
    }
}