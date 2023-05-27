
let computerNumber
let userNumbers = []
let attempts = 0

function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1)
}

function compareNumbers() {
    const userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers

    if (userNumber > computerNumber) {
        document.getElementById('textOutput').innerHTML = 'Your number is too High!'
        document.getElementById('inputBox').value = ''
        attempts++
        document.getElementById('attempts').innerHTML = attempts
    }
    else if (userNumber < computerNumber) {
        document.getElementById('textOutput').innerHTML = 'Your number is too Low!'
        document.getElementById('inputBox').value = ''
        attempts++
        document.getElementById('attempts').innerHTML = attempts
    }
    else {
        document.getElementById('textOutput').innerHTML = 'Congratulations!! YOU WON!!!'
        attempts++
        document.getElementById('attempts').innerHTML = attempts
    }
}