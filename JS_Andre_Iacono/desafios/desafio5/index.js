
const colors = ['Red', 'Blue', 'Yellow', 'Purple', 'Green']
const btn = document.getElementById('btn')

btn.addEventListener('click', function() {
    document.body.style.background = colors[0]
    const randomColor = getRandomColor()

})

function getRandomColor() {
    return Math.floor(Math.random() * colors.length)
}