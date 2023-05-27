
let computerNumber
let userNumbers = []
let attempts = 0
let maxguesses = 10

function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1)
}

function compareNumbers() {
    const userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers

    if (attempts < maxguesses) {    

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
    else {
        document.getElementById('textOutput').innerHTML = 'You Lose!! The computer number was: ' + computerNumber
    }
}