
let computerNumber
let userNumbers = []
let attempts = 0
let maxguesses = 10


function newGame() {
    window.location.reload()
}

function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1)
}

function compareNumbers() {
    const userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers
    
    if (attempts < maxguesses) {        

        if (userNumber > 100) {
            document.getElementById('textOutput').innerHTML = 'Number Invalid! Digit a number between 1 - 100...'
            document.getElementById('inputBox').value = ''
            //attempts++ (se eu quiser que o número de tentativas seja crescente...) 
            maxguesses--
            document.getElementById('attempts').innerHTML = maxguesses//attempts
        }
        else if (userNumber > computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Your number is too High!'
            document.getElementById('inputBox').value = ''
            //attempts++
            maxguesses--
            document.getElementById('attempts').innerHTML = maxguesses//attempts
        }
        else if (userNumber < computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Your number is too Low!'
            document.getElementById('inputBox').value = ''
            //attempts++
            maxguesses--
            document.getElementById('attempts').innerHTML = maxguesses//attempts
        }        
        else {
            document.getElementById('textOutput').innerHTML = 'Congratulations!! YOU WON!!!'
            //attempts++
            maxguesses--
            document.getElementById('attempts').innerHTML = maxguesses//attempts
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
        }
    }
    else {
        document.getElementById('textOutput').innerHTML = 'You Lose!! The computer number was: ' + computerNumber
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
    }
}