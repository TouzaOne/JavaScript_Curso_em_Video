
let computerNumber
let userNumbers = []

function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1)
}

function compareNumbers() {
    const userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers

    if (userNumber > computerNumber) {
        document.getElementById('textOutput').innerHTML = 'Your number is too High!'
    }
    else if (userNumber < computerNumber) {
        document.getElementById('textOutput').innerHTML = 'Your number is too Low!'
    }
    else {
        document.getElementById('textOutput').innerHTML = 'Congratulations!! You WIN!!!'
    }
}