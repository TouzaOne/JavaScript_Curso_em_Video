let value = Number(prompt('Enter the product value: '))

if (value >= 20) {
    document.getElementById('result').innerHTML = 'Approved!!'
} else {
    document.getElementById('result').innerHTML = 'Denied!!'
}