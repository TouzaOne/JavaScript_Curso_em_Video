
const colors = ['Red', 'Blue', 'Yellow', 'Purple', 'Green', 'Pink', 'Orange', 'Brown', 'Aqua']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

// Essa função será executada toda vez que eu clicar lá no botão de trocar a cor...
btn.addEventListener('click', function() {
    const randomColor = getRandomColor()
    document.body.style.background = colors[randomColor] // aplicando a cor ao background
    color.textContent = colors[randomColor]
    document.querySelector('.color').style.color = colors[randomColor]
    document.getElementById('h1').style.color = 'darkgray'  
})

// Essa é a função responsável por criar os números randômicos...
function getRandomColor() {
    return Math.floor(Math.random() * colors.length) // multiplicados pelo tamanho da nossa array
}