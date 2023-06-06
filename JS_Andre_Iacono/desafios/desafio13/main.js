const images = [
    'images/cup-coffee.jpg',
    'images/foto-idoso-m.png',
    'images/manha.png',
    'images/pega_visao.png'
]

let imageElement = document.getElementById('image')
let buttonElement = document.getElementById('button')
let currentIndex = 0

buttonElement.addEventListener('click', function() {
    currentIndex++
    if (currentIndex >= images.length) {
        currentIndex = 0
    }
    imageElement.src = images[currentIndex]
})