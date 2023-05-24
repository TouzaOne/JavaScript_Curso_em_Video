
let value = Number(prompt('Enter the product value: '))

if (value >= 20) {
    document.getElementById('result').innerHTML = 'Approved!!'
    let a = document.getElementById('result')
    a.style.color = 'blue'
    a.style.background = 'lightgreen'
} else {
    document.getElementById('result').innerHTML = 'Denied!!'
    let d = document.getElementById('result')
    d.style.color = 'yellow'
    d.style.background = 'red'
}